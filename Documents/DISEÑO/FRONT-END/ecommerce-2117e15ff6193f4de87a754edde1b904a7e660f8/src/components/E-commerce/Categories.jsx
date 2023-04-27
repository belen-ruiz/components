import styled from "styled-components";
import { categories } from "../Data/Data"
import { CategoriesItem } from './CategoriesItem'

export const Categories = () => {
  return (
    <CategoriesContainer>
        {categories.map((item) => (<CategoriesItem key={item.id} item={item}/>))}
    </CategoriesContainer>
  )
}

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
