/* eslint-disable no-unused-vars */
import React, {
  useState,
  useEffect,
  createContext,
  useMemo,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import { createUrlParamObj } from '../../../helpers/url-helpers';
import ApiService from '../../../services/api-service';

const initialProducts = [];
const initialFilters = { category: [] }; // category: [], brand: []

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState(initialProducts);
  const [filters, setFilters] = useState(initialFilters);

  const filtersArrToObj = ([
    category,
  ]) => ({
    // brand,
    category,
    // color,
    // size,
  });

  // gauname filtrus
  useEffect(() => {
    (async () => {
      const fetchedFilters = await ApiService.getCategories();
      // jeigu visiems, tai su promiseAll
      try {
        // verciam i objekta
        const filterName = 'category';
        const filterObject = {};
        filterObject[filterName] = fetchedFilters;
        // urlParams - iš esamų url parametrų, funkcija sukuria objektų parametrą category=lipsticks
        const urlParams = createUrlParamObj(searchParams);
        // iš esamų urlParams reikia sužymėti pasirinktas kategorijas
        const urlParamsEntriesArray = Object.entries(urlParams);
        //
        const filterOptionsFromUrl = [];
        // einame per masyvą, kuris dar masyvus kurie turi name ir value;
        urlParamsEntriesArray.forEach(([name, value]) => {
          const valuesArray = [].concat(value); // concat sujungia visas reikšmes į vieną masyvą
          valuesArray.forEach((id) => {
            if (filterObject[name]) { // jeigu parsiusti filtrai nuo kategorijos
              // ar esantys id yra tokie patys kaip perduoti id
              // ar sitas id esantis fetched filteriuose yra lygtus id suformuotuose parametru id
              // filterObject[name]- paimamas name, kuris yra musu =>
              // => suformuotame objekte (categories, brand)
              const selectedFilterOption = filterObject[name].find((x) => x.id === id);
              filterOptionsFromUrl.push(selectedFilterOption);
            }
          });
        });
        // apsirašome ids iš URL
        const filterOptionsIds = filterOptionsFromUrl.map(({ id }) => id);
        // ušžymimi options iš URL, (kurie pasirinkti, kurie ne,) pagal tai koks yra URL
        // imami visi filtrai, performajuomi filtrai, kad jie turetu savybe checked
        const checkedFilterOptionsFromUrl = Object.entries(filterObject)
          .map(([name, value]) => ({
            [name]: value.map((x) => {
            // jeigu sitame masyve is Ids jeigu yra toks elementas, kurį turi parfetchinti filtrai
              if (filterOptionsIds.indexOf(x.id !== -1)) {
                return (
                  { ...x, selected: true }
                // išskleidžiam, ir jam pridėsime, kad jis yra selected
                );
              }
              return (
                { ...x, selected: false }
              );
            }),
          }));
        const syncedFiltersValues = checkedFilterOptionsFromUrl
          .map((filter) => Object.values(filter))
          .flat();
        const syncedFiltersObj = filtersArrToObj(syncedFiltersValues);
        setFilters(syncedFiltersObj);
      } catch (err) {
        throw new Error(err);
      }
    })();
  }, []);

  // const updateUrlParamsWithNewFilters = (newFilters) => {
  //   const newValuesArr = [];
  //   Object.entries(newFilters).forEach(([name, value]) => {
  //     searchParams.delete(name);
  //     newValuesArr.push(value.map((obj) => ({ ...obj, name })));
  //   });
  //   const transformedValues = newValuesArr
  //     .flat()
  //     .filter((obj) => obj.selected)
  //     .map(({ id, name }) => ({
  //       key: name,
  //       value: id,
  //     }));

  //   const newUrlParams = createUrlParamObj(searchParams, transformedValues);
  //   setSearchParams(newUrlParams);
  // };

  const handleFilterChange = (selectedOption, filterName) => {
    const newFilter = [...filters[filterName]];
    const foundSelectedOption = newFilter.find((x) => x.id === selectedOption.id);
    if (!foundSelectedOption.selected) {
      foundSelectedOption.selected = true;
    } else { foundSelectedOption.selected = false; }

    const newFilters = {
      ...filters,
      [filterName]: newFilter,
    };
    setFilters(newFilters);
    // updateUrlParamsWithNewFilters(newFilters);
  };

  // gauname produktus
  useEffect(() => {
    (async () => {
      const params = createUrlParamObj(searchParams);
      const fetchedProducts = await ApiService.getProducts(params);
      // Object- sukuria masyvą iš fetchedProducts objektų (objektų funkcija)
      // flat()- nuima [], palieka atskirus {}
      // paiima objekto reikšmes ir sudeda į masyvą
      const productsArray = Object.values(fetchedProducts).flat();
      setProducts(productsArray); // pakeičiama initialValues į parfetchintus produktus
    })();
  }, [searchParams]);
  // []-jeigu tušti, funkcija įsivykdis kai uzsikraus komponentai
  // jeigu irasai funkcija, isivykdis funkcija kai search params pasikeičia
  const providerValue = useMemo(() => ({
    products,
    filters,
    handleFilterChange,
  }), [products, filters]);
  // [] atsinaujins funkcija tada kai keisis produktai arba filters;

  return (
    <ProductContext.Provider value={providerValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
