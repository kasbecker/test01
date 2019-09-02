import axios from 'axios';
import { DATA_ERROR, GET_DATA_PEND } from './types';

// export const getPend = value => {
//   //const query = queryString.stringify(value)

//   return async dispacth => {
//     try {
//       const res = await axios.get(
//         `http://localhost:8000/apis/penduduk?nik=${value.nik}&name=${
//           value.name
//         }`
//       );
//       console.log("res", res);
//       dispacth({
//         type: GET_DATA_PEND,
//         payload: res.data
//       });
//     } catch (error) {
//       dispacth({
//         type: DATA_ERROR,
//         payload: "data is not found"
//       });
//       console.log("error", error);
//     }
//   };
// };

export const getData = value => {
  //const query = queryString.stringify(value)

  return async dispacth => {
    try {
      const res = await axios.get(
        `http://localhost:8000/apis/penduduk?nik=${value.nik}`
        // `http://192.168.1.100:8888/ords/siakoff/test1/photo/${value.nik}`
      );
      console.log('res', res);
      dispacth({
        type: GET_DATA_PEND,
        payload: res.data
      });
    } catch (error) {
      dispacth({
        type: DATA_ERROR,
        payload: 'data is not found'
      });
      console.log('error', error);
    }
  };
};

export const getDetail = value => {
  //const query = queryString.stringify(value)

  return async dispacth => {
    try {
      const res = await axios.get(
        `http://localhost:8000/apis/penduduk/searchdetail?nama_lgkp=${value.nama_lgkp}&namaibu=${value.namaibu}`
        // `http://192.168.1.100:8888/ords/siakoff/test1/photo/${value.nik}`
      );
      console.log('res', res);
      dispacth({
        type: GET_DATA_PEND,
        payload: res.data
      });
    } catch (error) {
      dispacth({
        type: DATA_ERROR,
        payload: 'data is not found'
      });
      console.log('error', error);
    }
  };
};
