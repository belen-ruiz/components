import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([null]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      try {
        let res = await fetch(url);

        if (!res.ok) {
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
          };
        }

        let data = await res.json();
        console.log(data) //ok

        data.results.forEach(async (el) => {
          let res = await fetch(el.url),
              data = await res.json();
         // console.log(data); //ok
          
          // let dataItem = {
          //   id: json.id,
          //   name: json.name,
          //   //avatar: json.sprites.front_default,
          // };
          // //setData((data) => [...data, dataItem]);

          // setData([...data, dataItem]);
          
          setData(data)
          console.log(data)

        });

        setIsPending(false);
        //setData(data);
        setError({ err: false });
      } catch (err) {
        setIsPending(true);
        setError(err);
      }
    };

    getData(url);
  }, [url]);

  return { data, isPending, error };
};

