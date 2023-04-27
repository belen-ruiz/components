import { useRef } from "react";
import styled, { keyframes } from "styled-components";
import "../../app.css"


//no se usa useRef. leer doc
export default function Modal({children, title, root}) {

    const reference = useRef(null);

    function handleClose(){
        root.unmount();
    }

  return (
    <ModalContainer ref={reference}>
        <ModalView>
            <ModalHeader>
                <Title>{title}</Title>
                <CloseBtn onClick={handleClose} > X </CloseBtn>
            </ModalHeader>
            <ModalContent>
                {children}
            </ModalContent>
        </ModalView>
    </ModalContainer>
  )
}

const KeyframeFadeIn = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`

const KeyframeFadeOut = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(0);
    }
`


const ModalContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    z-index: 199;
    width: 100%;
    height: 100vh;
    
`

const ModalView = styled.div`
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    width: 90%;
    height: 90vh;
    box-sizing: border-box;

    animation: ${KeyframeFadeIn} 0.3s ease forwards;


`

const ModalHeader = styled.div`
    background-color: white;
    padding: 10px;
    display: flex;
    justify-content: space-between;

`

const Title = styled.div``

const CloseBtn = styled.div`
    border: none;
    background: none;
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 3px;
    cursor: pointer;
    color: #999;
  
    &:hover {
      color: black;
    }

`

const FadeOut = styled.div`
    animation: ${KeyframeFadeOut} 0.3s ease;

`

const ModalContent = styled.div``







