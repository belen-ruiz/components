import styled from 'styled-components/macro';
import { useEffect, useState } from 'react';
import { useRequest } from "./requestContainer"
import { request } from "./BaseUrl"


export const useApiResult = (request) => {
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  
  const requester = useRequest();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")

      .then(async (response) => {
        if (response.ok) {
          setResults(await response.json());
          setError(null);
        } else {
          setError(await response.text());
        }})
      .then((response)=>console.log(response))
      .catch((err) => {
        setError(err.message);
      });

  }, []);

  console.log(results)
  return [results, error];
};

