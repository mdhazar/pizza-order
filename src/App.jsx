import Anasayfa from './pages/Anasayfa';
import SiparisFormu from './pages/SiparisFormu';
import SiparisOnayi from './pages/SiparisOnayi';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';

function App() {
  const [order, setOrder] = useState(null);

  const handleOrderSubmit = (orderData) => {
    setOrder(orderData);
  };

  return (
    <>
      <Switch>
        <Route exact path="/" component={Anasayfa} />
        <Route 
          path="/siparisformu" 
          render={(props) => <SiparisFormu {...props} onOrderSubmit={handleOrderSubmit} />} 
        />
        <Route 
          path="/siparisonayi" 
          render={(props) => <SiparisOnayi {...props} order={order} />} 
        />
      </Switch>
    </>
  );
}
export default App;
