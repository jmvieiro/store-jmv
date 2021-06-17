
export const NAME_APP = 'Store JMV';

export async function getProductsMeLi(criterio) {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${criterio}`
    );
    const data = await response.json();
    return data.results;
  }

// function getData() {
//     let value = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         let aux = 12;
//         if (aux >= 20) resolve(aux);
//         else reject("Ops");
//       }, 3000);
//     });
//     return value;
//   }
//   getData()
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error);
//     });