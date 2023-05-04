import { useFetch } from "../../API/useFetch";
// import Loader from "./Loader";
// import Message from "./Message";

const SelectList = ({ title, handleChange }) => {
    const url = `https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre`
    
    const { data, error, loading } = useFetch(url);
    //console.log(data, error, loading);
    console.log(useFetch())

  if (!data) return null;

//   if (error) {
//     return (
//       <Message
//         msg={`Error ${error.status}: ${error.statusText}`}
//         bgColor="#dc3545"
//       />
//     );
//   }

  let id = `select-${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1);
  let options = data.response[title];
  console.log(options);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      {/* {loading && <Loader />} */}

      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige un {title}</option>
        {data &&
          options.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
      </select>
    </>
  );
};

export default SelectList;