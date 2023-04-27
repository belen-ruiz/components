import styled from "styled-components";
import { ShoppingCart } from './ShoppingCart'
import { Sign } from './Sign'

export const Icons = () => {
  return (
    <IconContainer>
        <Sign />
        <ShoppingCart />
    </IconContainer>
  )
}

const IconContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: end;

`
