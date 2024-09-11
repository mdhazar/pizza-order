import React from 'react';
import styled from 'styled-components';

const ConfirmationContainer = styled.div`
  
  margin: 50px auto;
  background-color:  #CE2829;
  
  padding: 200px;

`;

const ConfirmationTitle = styled.h2`
  font-size: 2em;
  color: white;
`;

const ConfirmationMessage = styled.p`
  font-size: 1.2em;
  color: white;
`;

function SiparisOnayi() {
  return (
    <ConfirmationContainer>
      <ConfirmationTitle>Teknolojik Yemekler</ConfirmationTitle>
      <ConfirmationMessage>
        Tebrikler!
      </ConfirmationMessage>
      <ConfirmationMessage>
        SİPARİŞİNİZ ALINDI!
      </ConfirmationMessage>
    </ConfirmationContainer>
  );
}

export default SiparisOnayi;