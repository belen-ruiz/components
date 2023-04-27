import styled from "styled-components";
import AppsIcon from '@mui/icons-material/Apps';
import { Cart } from "./Cart";
import { NavBar } from "./NavBar";
import { DarkModeMenu } from "./DarkModeMenu";
import { useState } from "react";


export const Dropdown = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () =>{
    setIsOpen(!isOpen)
  }

  return (
      <DropdownContainerStyle>
          <AppsIcon className="appsIcon" onClick={handleClick} />
          {isOpen ? (
              <MenuStyle>
                  <DarkModeMenu />
                  <NavBar />
                  <Cart />                  
              </MenuStyle>
          ) : (
              ""
          )}
      </DropdownContainerStyle>
  );
}


const DropdownContainerStyle = styled.div`
    width: 300px;
    height: auto;
    margin-top: 3rem;
    background-color: #e5e5e5;
    .appsIcon{
      cursor: pointer;
    }
`

const MenuStyle = styled.div`
  background-color: #b3b3b3;
  margin: 1rem;
  padding: 1rem;
  display:flex;
  flex-direction: column;
  gap: 1rem;
 
`


