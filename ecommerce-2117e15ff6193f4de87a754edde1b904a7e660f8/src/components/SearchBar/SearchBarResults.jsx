import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { Users } from "./Users";

export const SearchBarResults = () => {

  const [usuarios, setUsuarios] = useState([])
  const [tablaUsuarios, setTablaUsuarios] = useState([])
  const [busqueda, setBusqueda] = useState("")

  const getPetition = async()=>{
    await axios.get("https://jsonplaceholder.typicode.com/users")
    .then ( res => { 
      setUsuarios(res.data) 
      setTablaUsuarios(res.data) 
      })
    .catch( err => { console.log(err) })
  }

  useEffect(() => {
    getPetition()
  },[])

  const handleChange = (e) => { 
    console.log(e.target.value)
    setBusqueda(e.target.value)
    filter(e.target.value)  
  }

  const filter = (query) =>{
    let resBusqueda = tablaUsuarios.filter((e)=>{
      if (e.name.toString().toLowerCase().includes(query.toLowerCase())
      
      || e.username.toString().toLowerCase().includes(query.toLowerCase()))
      
      {return e;}
    });

    setUsuarios(resBusqueda)
  }

  return (
      <>
          <SearchBarStyled>
              <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={busqueda}
                  onChange={handleChange}
              />
              <SearchIcon />
          </SearchBarStyled>

          <Users />
      </>
  );
}


const SearchBarStyled = styled.div`
    display: flex;
    background-color: #666666;
    padding: 0.9rem;
    
  
`