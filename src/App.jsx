
import Anasayfa from './pages/Anasayfa';
import SiparisFormu from './pages/SiparisFormu';
import SiparisOnayi from './pages/SiparisOnayi';
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route path="/anasayfa">
          <Anasayfa/>
        </Route>
        <Route path="/siparisformu">
          <SiparisFormu/>
        </Route>
        <Route path="/siparisonayi">
          <SiparisOnayi/>
        </Route>

      </Switch>

    </>
  )
}

export default App
