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
const initialFilters = { category: [] };

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState(initialProducts);
  const [filters, setFilters] = useState(initialFilters);

  const filtersArrToObj = ([
    category,
  ]) => ({
    category,
  });

  useEffect(() => {
    (async () => {
      const fetchedFilters = await ApiService.getCategories();
      try {
        const filterName = 'category';
        const filterObject = {};
        filterObject[filterName] = fetchedFilters;
        const urlParams = createUrlParamObj(searchParams);
        const urlParamsEntriesArray = Object.entries(urlParams);
        const filterOptionsFromUrl = [];
        urlParamsEntriesArray.forEach(([name, value]) => {
          const valuesArray = [].concat(value);
          valuesArray.forEach((id) => {
            if (filterObject[name]) {
              const selectedFilterOption = filterObject[name].find((x) => x.id === id);
              filterOptionsFromUrl.push(selectedFilterOption);
            }
          });
        });
        const filterOptionsIds = filterOptionsFromUrl.map(({ id }) => id);
        const checkedFilterOptionsFromUrl = Object.entries(filterObject)
          .map(([name, value]) => ({
            [name]: value.map((x) => {
              if (filterOptionsIds.indexOf(x.id !== -1)) {
                return (
                  { ...x, selected: true }
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

  const updateUrlParamsWithNewFilters = (newFilters) => {
    const newValuesArr = [];
    Object.entries(newFilters).forEach(([name, value]) => {
      searchParams.delete(name);
      newValuesArr.push(value.map((obj) => ({ ...obj, name })));
    });
    const transformedValues = newValuesArr
      .flat()
      .filter((obj) => obj.selected)
      .map(({ id, name }) => ({
        key: name,
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

  useEffect(() => {
    (async () => {
      const params = createUrlParamObj(searchParams);
      const fetchedProducts = await ApiService.getProducts(params);
      const productsArray = Object.values(fetchedProducts).flat();
      setProducts(productsArray);
    })();
  }, [searchParams]);
  const providerValue = useMemo(() => ({
    products,
    filters,
    handleFilterChange,
  }), [products, filters]);

  return (
    <ProductContext.Provider value={providerValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
