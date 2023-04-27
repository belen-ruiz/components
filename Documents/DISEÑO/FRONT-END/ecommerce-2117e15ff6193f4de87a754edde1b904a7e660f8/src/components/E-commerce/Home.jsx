import styled from "styled-components";
import { CarrouselContainer } from '../Carrousel/CarrouselContainer'
import { Footer } from './Footer'
import { Header } from './Header'
import { MainHome } from './MainHome'

export const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <CarrouselContainer />
      <MainHome />
      <Footer />
    </HomeContainer>
  )
}


const HomeContainer = styled.div`
  width: 100vw;
`