import styled from "styled-components";


export const CategoriesItem = ({item}) => {
  return (
    <CategorieItem>
        <Image src={item.img} alt={item.title}/>
        <Info>
            <h1> {item.title} </h1>
            <button>SHOP NOW</button>
        </Info>
    </CategorieItem>
  )
}


const CategorieItem = styled.div`
    width: 30%;
    height: 400px;
    overflow: hidden;
    position: relative;

`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5;
`

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        font-size: 1rem;
    }
    
`

