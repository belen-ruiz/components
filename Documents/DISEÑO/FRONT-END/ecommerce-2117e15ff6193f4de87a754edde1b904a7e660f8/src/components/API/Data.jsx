import React from "react";
import { useFetch } from "../API/useFetch";

export default function Data() {
  let url = "https://pokeapi.co/api/v2/pokemon/";
  //url = "https://jsonplaceholder.typicode.com/users";
  console.log(useFetch());

  let { data, isPending, error } = useFetch(url);

  let pending = JSON.stringify(isPending)
  let dataStr = JSON.stringify(data)


  console.log(dataStr)


  return (
    <>
      <h2>Hooks Personalizados</h2>
      <h3>{JSON.stringify(isPending)}</h3>
      <h3>{pending}</h3>

      <h3>
        <mark>{JSON.stringify(error)}</mark>
      </h3>

      <pre style={{ whiteSpace: "pre-wrap" }}>
        <code style={{ wordBreak: "break-word" }}>{dataStr}</code>
      </pre>
      {/* {dataStr.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          dataStr.map((el) => (
            <li key={el.id} name={el.name}>
              {el.name}
            </li>
          ))
        )}

      {dataStr && dataStr.map((el) => (
          <figure>
            <img src={el.avatar} alt={el.name} />
            <figcaption>{el.name}</figcaption>
          </figure>
          ))} */}

    </>
  );
}