import styled from "styled-components";
import { ItemCount } from "./ItemCount";

export const ProductCard = () => {
  return (
    <>
        <ContainerCard>
            <Image>
                <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" alt="" />
            </Image>

            <Info>
                <Title>
                    Zapatos
                </Title>

                <Price>
                    $5000
                </Price>

                <Description>
                    Zapatos de cuero. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quae culpa nam. Deserunt esse ducimus quisquam illo optio accusantium culpa earum.
                </Description>

                <Filtros>
                    <Filtro>
                        <FiltroTitle>Talle</FiltroTitle>
                        <select name="size" id="size">
                            <option value="---">---</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                        </select>
                    </Filtro>

                    <Filtro>
                        <FiltroTitle>Color</FiltroTitle>
                        <Colores color="black" />
                        <Colores color="red" />
                        <Colores color="green" />
                    </Filtro>
                </Filtros>

                {/* <ItemCount
                onAdd={onAdd}
                initial={1}/>
                 */}
                <Buttons>
                    WishList
                </Buttons>

                <Count>
                    Comprar
                </Count>
            </Info>
        </ContainerCard>
    </>
  )
}

const ContainerCard = styled.div`
    display:flex;
    flex-direction: row;
    padding: 1rem;
    gap: 2rem;
    background-color: grey;
`

const Image = styled.div``

const Info = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: start;
`

const Title = styled.div`
    font-size: 1.5rem;
`

const Price = styled.div`
    font-size: 1rem;
    font-weight: bold;
`

const Description = styled.div`
    font-size: 1rem;
`
const FiltroTitle = styled.div``

const Filtros = styled.div`
    display: flex;
    gap: 6rem;
    justify-content: space-between;

`
const Filtro = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    select{
        padding: 0.2rem;
    }

`

const Colores = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${props => props.color}
`



const Buttons = styled.div``

const Count = styled.div``

