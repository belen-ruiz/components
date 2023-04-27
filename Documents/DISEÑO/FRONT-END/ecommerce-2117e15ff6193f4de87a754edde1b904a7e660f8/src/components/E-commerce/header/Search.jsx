import styled from "styled-components";
import { SearchOutlined } from '@mui/icons-material'

export const Search = () => {
  return (
    <SearchContainer>
      <input type="text" placeholder='Buscar Productos'/>
      <SearchOutlined />
    </SearchContainer>
  )
}

const SearchContainer = styled.div`
  flex: 1;
  justify-content: start;

`
