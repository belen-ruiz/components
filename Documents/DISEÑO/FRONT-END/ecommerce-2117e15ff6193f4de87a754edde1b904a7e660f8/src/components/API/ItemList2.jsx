import React from "react";
import { useFetch } from "./useFetch";
import { Item } from "./Item"


export default function ItemList2() {
  let url = "";

  let { data, loading, error } = useFetch(url);
  let isLoading = JSON.stringify(loading)
  let err = JSON.stringify(error)

  
  return (
    <>
      <h2>Hooks Personalizados</h2>
      {/* {loading && <h3>Cargando...</h3>} */}
      
      {!data ? (
          <div>
            <h3>{err}</h3>
          </div>
        ) : (
          data.map((item) => (
            <Item key={item.id} name={item.name} avatar={item.avatar} />
          ))
        )}

    </>
  );
}