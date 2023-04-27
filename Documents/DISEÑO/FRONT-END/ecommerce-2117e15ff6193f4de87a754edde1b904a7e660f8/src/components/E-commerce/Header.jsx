import styled from "styled-components";
import { Logo } from "./header/Logo"
import { Search } from "./header/Search"
import { Icons } from "./header/Icons";
import { Announcement } from "../Announcement/Announcement";



export const Header = () => {
  return (
    <>
        <Announcement />
        <HeaderContainer>
          <Search />
          <Logo />
          <Icons />
        </HeaderContainer>
    </>
  )
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding: 2rem;
  background-color: grey;
`
