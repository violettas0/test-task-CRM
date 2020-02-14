import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  position: fixed;
  background-color: #44a757;
  color: #ffffff;
  border: none;
  border-radius: 50%;
  z-index: 10000;
`;

export default function AddClientButton() {
    return (
        <StyledButton>Добавить клиента</StyledButton>
    )
}