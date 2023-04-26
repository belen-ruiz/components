import styled from "styled-components";
import React from 'react'
import { Person2Rounded } from "@mui/icons-material";

export const Sign = () => {
  return (
    <SignContainer>
      <Person2Rounded />
    </SignContainer>
  )
}


export const SignContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center
  height: 35px;
  border: 2px solid black;
  border-radius: 50%;
  padding: 0.3rem;

`