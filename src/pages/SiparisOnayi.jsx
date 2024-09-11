import React from 'react';
import styled from 'styled-components';

const ConfirmationContainer = styled.div`
  position: relative; 
  padding: 100px;
  background-color: #CE2829;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
`;

const ConfirmationTitle = styled.h2`
  font-size: 2em;
  color: white;
  font-weight: bold;
  gap: 0;
  margin-bottom: 300px;
`;

const ConfirmationMessage = styled.p`
  font-size: 2em;
  color: white;
  text-align: center;
  font-weight: 100;
  gap: 0;
  margin: 0; 
`;

function SiparisOnayi() {
  return (
    <ConfirmationContainer>
      <ConfirmationTitle>Teknolojik Yemekler</ConfirmationTitle>
      <ConfirmationMessage>Tebrikler!</ConfirmationMessage>
      <ConfirmationMessage>SİPARİŞİNİZ ALINDI!</ConfirmationMessage>
    </ConfirmationContainer>
  );
}

export default SiparisOnayi;
