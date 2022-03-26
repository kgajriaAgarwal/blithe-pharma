// // useAxios hook

// import { useState, useEffect } from 'react';
// import axios from 'axios';

// axios.defaults.baseURL = '/api';

// const useAxios = (axiosParams) => {

//     const [response, setResponse] = useState(undefined);
//     const [error, setError] = useState('');
//     const [loading, setloading] = useState(true);

//     debugger
//     console.log("bhole bhandari..")
//     const fetchData =  async (params) => {
//     try {
//         const result = await axios.request(params);
//         setResponse(result.data);
//         } catch( error ) {
//             setError(error);
//         } finally {
//             setloading(false);
//         }
//     };

//     useEffect(() => {
//         fetchData(axiosParams);
//     }, []); // execute once only

//     return { response, error, loading };
// };

// export default useAxios;


import { useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = '';

export const useAxios = () => {
    const [response, setResponse] = useState(undefined);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const operation = async(params) => {
        try {
            setLoading(true)
            const result = await axios.request(params);
            setResponse(result.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return { response, error, loading, operation };
};

export default useAxios;
