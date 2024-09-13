import Anasayfa from './pages/Anasayfa';
import SiparisFormu from './pages/SiparisFormu';
import SiparisOnayi from './pages/SiparisOnayi';
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Anasayfa} />
        <Route path="/siparisformu" component={SiparisFormu} />
        <Route path="/siparisonayi" component={SiparisOnayi} />
      </Switch>
    </>
  );
}

export default App;
