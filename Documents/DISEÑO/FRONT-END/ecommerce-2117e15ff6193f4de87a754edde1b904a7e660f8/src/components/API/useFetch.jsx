import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState([]); //null?
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async (url) => {
            try {
                let res = await fetch(url);

                if (!res.ok) {
                throw {
                        err: true,
                        status: res.status,
                        statusText: !res.statusText
                            ? "Ocurrió un error"
                            : res.statusText,
                    };}

                let data = await res.json();
                console.log(data); //ok

                setTimeout(() => {
                    data.results.forEach(async (el) => {
                        let res = await fetch(el.url),
                            data = await res.json();
                        //console.log(data); //ok
    
                        let dataItem = {
                            id: data.id,
                            name: data.name,
                            avatar: data.sprites.front_default,
                        };
    
                        setData((data) => [...data, dataItem]);
                        // console.log(data)
                    });
                }, 3000);
                

                setLoading(false);
                setError({ err: false });
            } catch (err) {
                setLoading(true);
                setError(err);
            }
        };

        getData(url);
    }, []);

    console.log(data);

    return { data, loading, error };
};
