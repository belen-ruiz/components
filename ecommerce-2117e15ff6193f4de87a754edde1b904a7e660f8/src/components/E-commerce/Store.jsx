import styled from "styled-components/macro";
import { Footer } from './Footer'
import { Header } from './Header'
import { ProductList } from "./ProductList";
import { FiltersContainerSort } from './FiltersContainerSort';
import { FiltersContainer } from './FiltersContainer';

export const Store = () => {
  return (
    <StoreContainer>
        <Header />

        <ProductContainer>
          <ProductList />

          <FiltersContainerSort />

          <FiltersContainer />
        </ProductContainer>

        <Footer />
    </StoreContainer>
  )
}

    
const StoreContainer = styled.div`
    width: 100%;
`

const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr auto;
    padding: 3rem;
    gap: 1rem;
`

