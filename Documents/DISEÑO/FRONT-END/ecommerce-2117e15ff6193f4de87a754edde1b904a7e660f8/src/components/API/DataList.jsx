import React from "react";
import { useFetch } from "./useFetch";

const Item = ({ avatar, name }) => {
  
  return (
    <div style= {{display: "inline-flex"}}>
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
    </div>
  );
}

export default function DataList() {
  let url = "https://pokeapi.co/api/v2/pokemon/";
  //url = "https://jsonplaceholder.typicode.com/users";

  let { data, isPending, error } = useFetch(url);
  let pending = JSON.stringify(isPending)
  let err = JSON.stringify(error)

  
  return (
    <>
      <h2>Hooks Personalizados</h2>
      
      {data.length === 0 ? (
          <div>
            <h3>Cargando...</h3>
            <h3>{pending}</h3>
            <h3>{err}</h3>
          </div>
        ) : (
          data.map((el) => (
            <Item key={el.id} name={el.name} avatar={el.avatar} />
          ))
        )}

    </>
  );
}