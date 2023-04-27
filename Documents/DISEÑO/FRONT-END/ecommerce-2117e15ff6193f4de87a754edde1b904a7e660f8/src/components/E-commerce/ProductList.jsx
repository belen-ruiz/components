import styled from 'styled-components/macro';
import SortByAlphaRoundedIcon from '@mui/icons-material/SortByAlphaRounded';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';import { popularProducts } from "../Data/Data";
import { DestacadosItem } from "./DestacadosItem";


export const ProductList = ({item}) => {
  return (
    <>
      <ProductListContainer>
          {popularProducts.map((item)=> 
            (<DestacadosItem item={item} key={item.id} />))
          }
      </ProductListContainer>
    </>
  )
}


const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  grid-column: 2/3;
  grid-row: 2/3;
`

