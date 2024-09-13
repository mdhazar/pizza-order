import React from 'react';
import styled from 'styled-components';
import { useLocation, useHistory } from 'react-router-dom';


const PageContainer = styled.div`
  background-color: #CE2829;
  min-height: 100vh; /* Tüm ekranı kapsaması için */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: white;
`;


const Header = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #CE2829;
  color: white;
`;

const ConfirmationContainer = styled.div`
  
  background-color: #CE2829;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ConfirmationTitle = styled.h2`
  font-size: 2em;
  color: white;
  font-weight: bold;
  margin-bottom: 20px;
  margin:0;
`;

const ConfirmationMessage = styled.p`
  font-size: 1.5em;
  color: white;
  text-align: center;
  margin-bottom: 0;
`;

const OrderDetails = styled.div`
  background-color: #CE2829;
  padding: 20px;
  border-radius: 8px;
  color: white;
`;

const ThankYouMessage = styled.p`
  font-size: 2em;
  color: white;
  text-align: center;
  margin-top: 50px;
`;

const BackButton = styled.button`
  background-color: #CE2829;
  color: white;
  font-size: 1.2em;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0;

  &:hover {
    background-color: #A12021;
  }
`;

function SiparisOnayi() {
  const history = useHistory();
  const location = useLocation();
  const order = location.state?.order;

  if (!order) {
    history.push('/siparisformu');
    return null;
  }

  return (
    <PageContainer>
      <Header>
        <ConfirmationTitle>Teknolojik Yemekler</ConfirmationTitle>
      </Header>
      
      <ConfirmationContainer>
        <OrderDetails>
          <h1>Sipariş Onayı</h1>
          <p>Boyut: {order.size}</p>
          <p>Hamur: {order.dough}</p>
          <p>Ek Malzemeler: {order.toppings.join(', ') || 'Yok'}</p>
          <p>Adet: {order.quantity}</p>
          <p>Not: {order.note || 'Yok'}</p>
          <p>Toplam Fiyat: {order.totalPrice.toFixed(2)}₺</p>
        </OrderDetails>
        <ThankYouMessage>TEBRİKLER!<br />SİPARİŞİNİZ ALINDI!</ThankYouMessage>
        <BackButton onClick={() => history.push('/')}>Anasayfaya Dön</BackButton>
      </ConfirmationContainer>
    </PageContainer>
  );
}

export default SiparisOnayi;
