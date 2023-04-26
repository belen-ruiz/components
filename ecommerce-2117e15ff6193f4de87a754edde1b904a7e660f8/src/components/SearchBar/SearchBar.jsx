import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';


export const SearchBar = ({handleChange}) => {

    const [query, setQuery] = useState("")


    return (
        
            <SearchBarStyled>
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={query}
                    onChange={handleChange}
                />
                <SearchIcon />
            </SearchBarStyled>
        
    );
};



const SearchBarStyled = styled.div`
    display: flex;
    background-color: #666666;
    padding: 0.9rem;
    
  
`