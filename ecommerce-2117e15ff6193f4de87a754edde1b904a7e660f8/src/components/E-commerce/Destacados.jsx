import styled from 'styled-components/macro'
import { destacados } from '../Data/Data'
import { DestacadosItem } from './DestacadosItem'

export const Destacados = () => {
  return (
    <>
      <Title>Productos destacados</Title>
      <DestacadosContainer>
          {destacados.map((item)=> 
          (<DestacadosItem item={item} key={item.id} />))
          }
      </DestacadosContainer>
    </>
  )
}

const Title = styled.h2`
  text-align: center;
`

const DestacadosContainer = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
`
