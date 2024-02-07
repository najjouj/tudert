// import axios from "axios";

// const BASE_URL='http://10.0.0.2:1337'
 const API_KEY='091e32f4984432afd91278630fe7ee03703f9939f125bad9d57f0c5e45ce40418ff48a6a99eb42ef6d77901fa7a67c9df4fbfc4731d50bd88709121e4d0d8df9e2e3fdc9aace9e337d9e37b92f010c8603e2a22d637e01081ce21a336b562774295fae8a8b4998d7e8798d87dd1586e087a7b13287adee8f1dc18fa0edbe2b1e'
 

import axios from 'axios';
//  const   headers={
//         'Authorization':API_KEY,
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     }

const baseUrl = 'https://reqres.in';
const baseUrl1='http://192.168.148.223:1337/api'
 const   headers={
        'Authorization':"Bearer "+API_KEY,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
        const instance = axios.create({
            baseURL: baseUrl1,
            timeout: 10000,
            headers: headers
          });
        //   const axios=axios.create({
        //     method: 'get',
        //     url: `${baseUrl1}/api/sliders/`,
        //   }).then((response) => {
        //     console.log(response.data);
        //     console.log('success globzl api1!!');
        //   }).catch(error=>console.log(error));
// axios({
//   method: 'get',
//   url: `${baseUrl1}/api/sliders/`,
// }).then((response) => {
//   console.log(response.data);
//   console.log('success globzl api1!!');
// }).catch(error=>console.log(error));


 const getSlider=()=>instance.get(`/sliders?populate=*`).catch(error=>console.log(error));
 const getCategory=()=>instance.get(`/categories?populate=*`).catch(error=>console.log(error));
 const getPreniumHospitals=()=>instance.get(`/hospitals?filters[prenium][$eq]=true&populate=*`).catch(error=>console.log(error));
 const getHospitalsBycategory=(category)=>instance.get("hospitals?filters[categories][name][$in]="+category+"&populate=*").catch(error=>console.log(error));
 const bookappointment=(data)=>instance.post('/appointments',data).catch(err=>console.log(err));
export default {
    getSlider,
    getCategory,
    getPreniumHospitals,
    getHospitalsBycategory,
    bookappointment
}

       
    

// Passing configuration object to axios
// axios({
//   method: 'get',
//   url: `${baseUrl1}/api/sliders/id:0`,
// }).then((response) => {
//   console.log(response.data);
// }).catch(error=>console.log(error));

//Invoking the get method to perform a GET request
// instance.get(`${baseUrl1}/sliders/`,).then((response) => {
//   console.log(response.data);
// }).catch(error=>console.log(error));