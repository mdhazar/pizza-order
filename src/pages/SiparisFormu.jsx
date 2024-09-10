import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: #CE2829;
  color: white;
  width: 100%;
  border: 1px solid white;
`;

const Title = styled.h1`
  font-size: 2em;
  color: white;
  margin: 20px; 
`;

const Paragraf = styled.p`
  font-size: 1em;
  color: white;
  margin: 10px;
  
`;

function SiparisFormu() {
  return (
    <div>
      <Footer>
        <Title>Teknolojik Yemekler</Title>
        <Paragraf>Anasayfa - Sipariş Oluştur</Paragraf>
      </Footer>
    </div>
  );
}

export default SiparisFormu;
