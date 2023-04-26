import styled from 'styled-components/macro';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { useState } from 'react';


const RangeSlider = () => {
  const [value, setValue] = useState([4000, 8000]);

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(value)
  };

  const valuetext = (value) => {
    return `$${value}`;
  }

  const marks = [
    {
      value: 3000,
      label: '-$3000',
    },
    {
      value: 6000,
      label: '$6000',
    },
    {
      value: 9000,
      label: '+$9000',
    }
  ];

  return (
    <Box sx={{ width: 150 }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        defaultValue={value}
        value={value}
        onChange={handleChange}
        step={500}
        min={2999}
        max={9999}
        marks={marks}
      />
    </Box>
  );
}

export const FiltersContainer = () => {
  return (
    <FilterContainerAlf>
        <ProductsFilter>
          <Title> Filtros </Title>

          <Filters>
            <RangeSlider />

            <Filter> categorias </Filter>
          </Filters>
        </ProductsFilter> 
    </FilterContainerAlf>
  )
}


const FilterContainerAlf = styled.div`
    grid-column: 1/2;
    grid-row: 2/3;

`
const ProductsFilter = styled.div``

const Title = styled.label``

const Filters = styled.div`
    span{
        font-size: 0.8rem;
    }
`

const Filter = styled.div``