export const createUrlParamObj = (searchParams, additionParams) => {
  const paramObj = {};
  const addParam = (value, key) => {
    if (!paramObj[key]) {
      paramObj[key] = [value];
    } else if (!paramObj[key].includes(value)) {
      paramObj[key].push(value);
    }
  };
  searchParams.forEach(addParam);
  if (additionParams) {
    additionParams.forEach(({ value, key }) => {
      addParam(value, key);
    });
  }
  return paramObj;
};

// appendUrlParams- iš duotų parametrų (name ir values) sugeneruoja =>
// search parametrų stringą 'categoryid=1&color=2'
// (perduoda funkcijai name ir value) => sukuria naują stringų masyvą
// => kurį sudarys {name kategorijos}={duombazės įrašo id}
// .join paiima visus masybo įrašus ir juos apjungia į vieną stringą ir kiekvieną įrašą skirs juis &
// pvz: categoryid=1&color=2
export const appendUrlParam = (name, values) => values.map((id) => `${name}=${id}`).join('&');

// (requestUrl, params) perduodama iš filtro pavadinimas ir filtro reikšmė
export const appendUrlParams = (requestUrl, params) => {
  const paramsArray = Object.entries(params);
  return paramsArray.reduce((prevVal, [name, values]) => {
    let previous = prevVal;
    previous += `&${appendUrlParam(name, values)}`;
    return previous;
  }, requestUrl);
};
