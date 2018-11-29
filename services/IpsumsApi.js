
import ipsumsApi from '../data.js'; 

// const types = []; 

// ipsumsApi.forEach(ipsum => {
//   const type = ipsum.type;
//   if(types.includes(type)) {
//     return;
//   }
//   types.push(type); 
// });
 

export default {
  getIpsums() {
    return ipsumsApi;
  },
  // getTypes() {
  //   return types; 
  // }
}; 