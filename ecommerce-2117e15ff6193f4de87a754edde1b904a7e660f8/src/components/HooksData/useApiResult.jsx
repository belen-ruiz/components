import styled from 'styled-components/macro';
import { useEffect, useState } from 'react';
import { useRequest } from "./requestContainer"



// export const useApiResult = (request) => {
//   const [ items, setItems ] = useState(null)
//   const [ error, setError ] = useState(null)


//   useEffect(() => {
//     fetch(request)
//     .then(async (response)=>{
//         if (response.ok) {
//           setItems (await response.json())
//           console.log(response)
//           ;
//             setError(null)
//         } else {
//             setError(await response.text())
//         }
//     })

//     .catch ((err) => {
//         setError(err.message)
//     });


//   }, [request]);


//   return [ items, error]
// }


export const useApiResult = (request) => {
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  
  const requester = useRequest();

  useEffect(() => {
    requester(request)
      .then(async (response) => {
        if (response.ok) {
          setResults(await response.json());
          setError(null);
        } else {
          setError(await response.text());
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [request, requester]);
  
  return [results, error];
};

