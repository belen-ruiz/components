import styled from "styled-components";
import SendIcon from '@mui/icons-material/Send';

export const Newsletter = () => {
  return (
    <NewsletterContainer>
        <Title>Newsletter</Title>
        <Info>Recibi las ultimas novedades y accede a descuentos exclusivos</Info>
        <InputField>
            <input type="email" placeholder='Ingrese su e-mail'/>
            <SendIcon />
        </InputField>
    </NewsletterContainer>
  )
}

const NewsletterContainer = styled.div`
    background-color: green;
    padding: 1rem;
    display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Title = styled.h2``

const Info = styled.div`
    padding-bottom: 1rem;
`

const InputField = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input{
    margin-right: 1rem;
  }

  svg{
    cursor: pointer;
    background-color: black ;
    color: white;
    margin: 1rem;
    width: 66px;
    height: 26px;
  }

`


