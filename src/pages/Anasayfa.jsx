import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 20px;
  background-color: #CE2829;
  background-image: url("Assets/Iteration-1-assets/home-banner.png"); 
  background-position: bottom; 
  background-repeat: no-repeat; 
  background-size: contain; 
  padding-bottom: 300px;
`;

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: white;
  margin: 100px 0;
`;
const Title2 = styled.h2`
  font-size: 3.5em;
  text-align: center;
  color: white;
  margin: 0;
  font-weight: 100;
  
`;

const Button = styled.button`
  background-color: #FDC913;
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #FDC913;
  border-radius: 3px;
  
`;
function Anasayfa() {
  const history = useHistory(); 

  const handleClick = () => {
    history.push('/siparisformu'); 
  };

  return (
    <MainPage>
      <Title>
        Teknolojik Yemekler
      </Title>
      <Title2>
        KOD ACIKTIRIR
      </Title2>
      <Title2>
        PİZZA, DOYURUR
      </Title2>
      <Button onClick={handleClick}>
        ACIKTIM
      </Button>
      <Title>
      </Title>
    </MainPage>
  )
}

export default Anasayfa;