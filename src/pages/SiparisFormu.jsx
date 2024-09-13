import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

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
  left: 435px;
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


const OrderButton = styled.button`
  background-color: #FDB913;
  color: #000;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  font-size: 1.2em;
  cursor: pointer;
`;
const PriceRatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const Price = styled.div`
  font-size: 2em;
  font-weight: bold;
  color: #000;
`;
const Rating = styled.span`
  font-size: 1em;
  color: #666;
`;

const SizeAndDoughContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const SizeSelection = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const DoughSelection = styled.div`
  flex: 1;
`;
const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioLabel = styled.label`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;

const RadioInput = styled.input`
  margin-right: 5px;
`;
const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 500px;
`;

const CounterButton = styled.button`
  background-color: #FDB913;
  color: #000;
  padding: 40px;
  border: none;
  border-radius: 4px;
  font-size: 2em;
  cursor: pointer;
  padding: 5px 10px;
`;

const CounterValue = styled.span`
  font-size: 2em;
  margin: 0 10px;
`;

const OrderSummary = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const TotalPrice = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 10px;

`;
const OrderSection = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  
  width: 100%; 
`;


const sizes = [
  { value: "küçük", label: "Küçük" },
  { value: "orta", label: "Orta" },
  { value: "büyük", label: "Büyük" }
];

const doughTypes = [
  { value: "ince", label: "İnce" },
  { value: "kalın", label: "Kalın" }
];

const toppings = [
  'Pepperoni', 'Sosis', 'Kanada Jambonu', 'Tavuk Izgara', 'Soğan', 
  'Domates', 'Mısır', 'Sucuk', 'Jalepeno', 'Sarımsak', 'Biber', 'Ananas', 'Kabak'
];

function SiparisFormu({ onOrderSubmit }) {
  const [size, setSize] = useState('');
  const [dough, setDough] = useState('');
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [note, setNote] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(85.50);
  const [errors, setErrors] = useState({});

  const basePrice = 85.50;
  const toppingPrice = 5;

  const history = useHistory();

  useEffect(() => {
    const newTotal = (basePrice + selectedToppings.length * toppingPrice) * quantity;
    setTotalPrice(newTotal);
  }, [quantity, selectedToppings]);

  const handleSizeChange = (e) => {
    setSize(e.target.value);
    setErrors(prev => ({ ...prev, size: '' })); 
  };
  
  const handleDoughChange = (e) => {
    setDough(e.target.value);
    setErrors(prev => ({ ...prev, dough: '' }));
  };
  

  const handleToppingsChange = (e) => {
    const value = e.target.value;
    setSelectedToppings(prev => 
      prev.includes(value) ? prev.filter(t => t !== value) : [...prev, value]
    );
  };

  const handleNoteChange = (e) => setNote(e.target.value);

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);
  
  const validateForm = () => {
    let formErrors = {};
    if (!size) formErrors.size = 'Lütfen bir boyut seçin';
    if (!dough) formErrors.dough = 'Lütfen bir hamur tipi seçin';
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmitOrder = () => {
    const isFormValid = validateForm();
    if (isFormValid) {
      const orderData = {
        size,
        dough,
        toppings: selectedToppings,
        note,
        quantity,
        totalPrice
      };
      
      history.push({
        pathname: '/siparisonayi',
        state: { order: orderData }  
      });
    }
  };
  
  

  return (
    <div>
      <Header>
        <Title>Teknolojik Yemekler</Title>
        <Paragraf>Anasayfa - Sipariş Oluştur</Paragraf>
      </Header>
      
      <FormContainer>
        <FormTitle>Position Absolute Acı Pizza</FormTitle>
        <PriceRatingContainer>
          <Price>85.50₺</Price>
          <Rating>4.9 (200)</Rating>
        </PriceRatingContainer>
        <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
        
        <SizeAndDoughContainer>
          <SizeSelection>
            <Label>Boyut Seç *</Label>
            <RadioGroup>
              {sizes.map(({ value, label }) => (
                <RadioLabel key={value}>
                  <RadioInput
                    type="radio"
                    name="size"
                    value={value}
                    checked={size === value}
                    onChange={handleSizeChange}
                  />
                  {label}
                </RadioLabel>
              ))}
            </RadioGroup>
            {errors.size && <ErrorMessage>{errors.size}</ErrorMessage>}
          </SizeSelection>

          <DoughSelection>
            <Label>Hamur Seç *</Label>
            <Select value={dough} onChange={handleDoughChange}>
              <option value="">Seçiniz</option>
              {doughTypes.map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </Select>
            {errors.dough && <ErrorMessage>{errors.dough}</ErrorMessage>}
          </DoughSelection>

        </SizeAndDoughContainer>

        <FormField>
          <Label>Ek Malzemeler (5₺ ek ücret)</Label>
          <CheckboxContainer>
            {toppings.map(topping => (
              <div key={topping}>
                <input 
                  type="checkbox" 
                  value={topping} 
                  checked={selectedToppings.includes(topping)}
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
            
        <OrderSection>
          <CounterContainer>
            <CounterButton onClick={decrementQuantity}>-</CounterButton>
            <CounterValue>{quantity}</CounterValue>
            <CounterButton onClick={incrementQuantity}>+</CounterButton>
          </CounterContainer>
          <OrderSummary>
            <TotalPrice>Toplam: {totalPrice.toFixed(2)}₺</TotalPrice>
            <OrderButton onClick={handleSubmitOrder}>SİPARİŞ VER</OrderButton>
          </OrderSummary>
        </OrderSection>
      </FormContainer>
    </div>
  );
}

  

export default SiparisFormu;