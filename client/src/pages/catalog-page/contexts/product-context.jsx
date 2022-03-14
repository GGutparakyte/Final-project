// 1. produktu parfetchinimas
// 2. po filtru parsiuntimo, reikia, kad filtrai būtų paiimami pagal URL

import React, {
  useState,
  useEffect, createContext, useMemo,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import { createUrlParamObj } from '../../../helpers/url-helpers';
import ApiService from '../../../services/api-service';

const initialProducts = [];
const initialFilters = { category: [] }; // category: [], brand: []

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState(initialProducts);
  const [filters, setFilters] = useState(initialFilters);
  console.log('filters:', filters);

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
      console.log('fetched', fetchedFilters);
      try {
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
            if (fetchedFilters[name]) { // jeigu parsiusti filtrai nuo kategorijos
              // ar esantys id yra tokie patys kaip perduoti id
              // ar sitas id esantis fetched filteriuose yra lygtus id suformuotuose parametru id
              // fetchedFilters[name]- paimamas name, kuris yra musu =>
              // => suformuotame objekte (categories, brand)
              const selectedFilterOption = fetchedFilters[name].find((x) => x.id === id);
              filterOptionsFromUrl.push(selectedFilterOption);
            }
          });
        });
        // apsirašome ids iš URL
        const filterOptionsIds = filterOptionsFromUrl.map(({ id }) => id);
        // ušžymimi options iš URL, (kurie pasirinkti, kurie ne,) pagal tai koks yra URL
        // imami visi filtrai, performajuomi filtrai, kad jie turetu savybe checked
        const checkedFilterOptionsFromUrl = Object.entries(fetchedFilters)
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

  const updateUrlParamsWithNewFilters = (newFilters) => {
    const newValuesArr = [];
    Object.entries(newFilters).forEach(([filterName, valueArr]) => {
      searchParams.delete(filterName);
      newValuesArr.push(valueArr.map((obj) => ({ ...obj, filterName })));
    });
    const transformedValues = newValuesArr
      .flat()
      .filter((obj) => obj.selected)
      .map(({ id, filterName }) => ({
        key: filterName,
        value: id,
      }));

    const newUrlParams = createUrlParamObj(searchParams, transformedValues);
    setSearchParams(newUrlParams);
  };

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
    updateUrlParamsWithNewFilters(newFilters);
  };

  const providerValue = useMemo(() => ({
    filters,
    products,
    handleFilterChange,
  }), [filters, products]);
  // [] atsinaujins funkcija tada kai keisis produktai arba filters;

  return (
    <ProductContext.Provider value={providerValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
