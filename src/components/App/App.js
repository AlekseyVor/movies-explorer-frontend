import './App.css';
import Promo from '../Promo/Promo';
import Header from '../Header/Header';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';

function App() {
  return (
<div className="page">
<Header/>
<Promo/>
<AboutProject/>
<Techs/>
</div>
  );
}

export default App;
