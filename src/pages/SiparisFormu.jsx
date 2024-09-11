import React, { useState } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  box-sizing: border-box;
  height: 207px;
  background: #CE2829;
  border-bottom: 1px solid #C20608;
  box-shadow: 0px 9px 150px -30px rgba(0, 0, 0, 0.09);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 125px
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: white;
  position: absolute;
  top: 100px;
`;

const Paragraf = styled.p`
  font-size: 1em;
  color: white;
  text-align: center;
  margin-top: 10px;
  position: absolute;
  font-size: 1em;
  color: white;
  left: 225px;
  top: 250px;
`;

const FormContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

const Price = styled.div`
  font-size: 2em;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;
`;

const FormField = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1em;
  margin-bottom: 5px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const CheckboxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 10px;
`;

const NoteField = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const OrderSummary = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OrderButton = styled.button`
  background-color: #FDB913;
  color: #000;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  font-size: 1.2em;
  cursor: pointer;
`;

function SiparisFormu() {
  const [size, setSize] = useState('');
  const [dough, setDough] = useState('');
  const [toppings, setToppings] = useState([]);
  const [note, setNote] = useState('');

  const handleSizeChange = (e) => setSize(e.target.value);
  const handleDoughChange = (e) => setDough(e.target.value);
  const handleToppingsChange = (e) => {
    const value = e.target.value;
    setToppings(prev => 
      prev.includes(value) ? prev.filter(t => t !== value) : [...prev, value]
    );
  };
  const handleNoteChange = (e) => setNote(e.target.value);

  return (
    <div>
      <Header>
        <Title>Teknolojik Yemekler</Title>
        <Paragraf>Anasayfa - Sipariş Oluştur</Paragraf>
      </Header>
      

      <FormContainer>
        <FormTitle>Position Absolute Acı Pizza</FormTitle>
        <Price>85.50₺</Price>
        <p>4.9 (200)</p>
        <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>

        <FormField>
          <Label>Boyut Seç *</Label>
          <Select value={size} onChange={handleSizeChange}>
            <option value="">Seçiniz</option>
            <option value="küçük">Küçük</option>
            <option value="orta">Orta</option>
            <option value="büyük">Büyük</option>
          </Select>
        </FormField>

        <FormField>
          <Label>Hamur Seç *</Label>
          <Select value={dough} onChange={handleDoughChange}>
            <option value="">Seçiniz</option>
            <option value="ince">İnce</option>
            <option value="kalın">Kalın</option>
          </Select>
        </FormField>

        <FormField>
          <Label>Ek Malzemeler (5₺ ek ücret)</Label>
          <CheckboxContainer>
            {['Pepperoni', 'Sosis', 'Kanada Jambonu', 'Tavuk Izgara', 'Soğan', 'Domates', 'Mısır', 'Sucuk', 'Jalepeno', 'Sarımsak', 'Biber', 'Ananas', 'Kabak'].map(topping => (
              <div key={topping}>
                <input 
                  type="checkbox" 
                  value={topping} 
                  checked={toppings.includes(topping)}
                  onChange={handleToppingsChange} 
                />
                <label>{topping}</label>
              </div>
            ))}
          </CheckboxContainer>
        </FormField>

        <FormField>
          <Label>Sipariş Notu</Label>
          <NoteField 
            value={note} 
            onChange={handleNoteChange} 
            placeholder="Siparişine eklemek istediğin bir not var mı?" 
          />
        </FormField>

        <OrderSummary>
          <div>
            <p><strong>Seçimler:</strong> 25.00₺</p>
            <p><strong>Toplam:</strong> 110.50₺</p>
          </div>
          <OrderButton>SİPARİŞ VER</OrderButton>
        </OrderSummary>
      </FormContainer>
    </div>
  );
}

export default SiparisFormu;
