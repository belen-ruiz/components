import styled from "styled-components";
import openModal from "../Modal/openModal";

export const Announcement = () => {

    function handleOpenModal(){
        openModal()
        console.log("se abre el modal")
    }

  return (
    <AnnouncementStyle>
        <div onClick={handleOpenModal}>
            Suscribite a nuestro newsletter
        </div>
    </AnnouncementStyle>
  )
}

const AnnouncementStyle = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    background-color: green;
    text-align: center;
    text-decoration: underline;
    cursor: pointer;
    z-index: 99;
`
