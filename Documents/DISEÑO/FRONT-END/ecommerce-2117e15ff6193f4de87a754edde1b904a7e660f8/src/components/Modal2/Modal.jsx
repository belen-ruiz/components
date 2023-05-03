import styled from "styled-components/macro";


const Article = styled.article`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
    display: ${isOpen => isOpen.active ? "flex" : "none"};
    justify-content: center;
    align-items: center;

    ${({isOpen}) => isOpen && `
        display: flex;
    `}
`
const ModalContainer = styled.button`
    position: relative;
    padding: 1rem;
    min-width: 320px;
    max-width: 480px;
    min-height: 200px;
    max-height: 600px;
    overflow-y: auto;
    background-color: #fff;
`

const BtnModalClose = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
`


export const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <Article onClick={closeModal} active={isOpen}>
      <ModalContainer onClick={handleModalContainerClick}>
        <BtnModalClose onClick={closeModal}>
          X
        </BtnModalClose>
        {children}
      </ModalContainer>
    </Article>
  );
};

//children en modalsContiner
