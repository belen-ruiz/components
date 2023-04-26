import styled from 'styled-components/macro';

export const FiltersContainerSort = () => {

    const filtersSort = [
        { filter: "Alfabeticamente" },
        { filter: "Precio Mayor" },
        { filter: "Precio Menor" },
    ];

  return (
    <FilterContainer>

        <ProductsSort>
          <Title> Sort By </Title>
          
          <Filters>
            {filtersSort.map((f)=>(
                <Filter key={f.filter}>  {f.filter} </Filter>
            ))}
          </Filters>
        </ProductsSort>
    </FilterContainer>
  )
}


const FilterContainer = styled.div`
  display: flex;
  justify-content: end;
  padding-bottom: 2rem;
  grid-column: 2/3;
  grid-row: 1/2;
`

const ProductsSort = styled.div``

const ProductsFilter = styled.div``

const Title = styled.label``

const Filters = styled.select``

const Filter = styled.option``