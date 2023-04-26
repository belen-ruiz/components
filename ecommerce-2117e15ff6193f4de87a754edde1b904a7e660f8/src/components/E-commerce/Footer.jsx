import { FacebookOutlined, Instagram, LinkedIn, Pinterest, Twitter } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { links } from "../Data/Data"


export const Footer = () => {
  return (
    <FooterContainer>
      <LogoFooter>
        ECOMMERCE.
      </LogoFooter>

      <NavBarFooter>
        <ul>
          {links.map((item) => 
          <NavLink to={item.path} key={item.link} style={({ isActive }) => isActive ? active : disactive}>
            <li>{item.link}</li>
          </NavLink>
          )}
        </ul>
      </NavBarFooter>

      <RedesIcons>
        <FacebookOutlined />
        <Instagram />
        <Twitter />
        <LinkedIn />
        <Pinterest />
      </RedesIcons>

      <Rights>
        © 2023 Desarollo por Belen Ruiz. Todos los derechos reservados, Inc.
      </Rights>

    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40vh;
  padding: 2rem;
  background-color: #f8f8cc;
  
`

const LogoFooter = styled.div`
  text-align: center;
`

const NavBarFooter = styled.div`

  ul{
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding-left: 0 !important;

    Navlink{
      background-color: ${(props) => (props.isActive ? "pink" : "#3c7f8b")};
    }
    li{
      cursor: pointer;
      text-decoration: underline;
    }
  }

`

const RedesIcons = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  justify-self: center;
  margin-bottom: 1rem;

    svg{
      margin: 0 1rem;
    }

`

const Rights = styled.p``


const active = {
  backgroundColor: 'grey',
  color: "white",
  padding: "0 1rem",
  borderRadius: "10px",

}

const disactive = {
  color: "black",

}
