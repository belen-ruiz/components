import styled from "styled-components";
import { ShoppingCartRounded } from "@mui/icons-material";
import { Badge } from '@mui/material';


export const ShoppingCart = () => {
  return (
      <Badge badgeContent={5} color="success">
    <ShoppingContainer>
        <ShoppingCartRounded />
    </ShoppingContainer>
      </Badge>
  )
}


const ShoppingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 35px;
  border: 2px solid black;
  border-radius: 50%;
  padding: 0.3rem;
  margin-left: 0.5rem;

`
