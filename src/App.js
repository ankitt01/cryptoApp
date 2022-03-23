import './App.css';
import { Switch, Route, Link} from "react-router-dom"
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Exchanges from './components/Exchanges';
import News from './components/News';
import Cryptocurrencies from './components/Cryptocurrencies';
import CryptoDetails from './components/CryptoDetails';

function App() {
  return (
    <div className="App flex">
      {/* <button className='nav-toggle absolute text-pink'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button> */}
      <Navbar />
      <div className="main">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/exchanges">
            <Exchanges />
          </Route>
          <Route exact path="/cryptocurrencies">
            <Cryptocurrencies />
          </Route>
          <Route exact path="/crypto/:coinId">
            <CryptoDetails />
          </Route>
          <Route exact path="/news">
            <News />
          </Route>
        </Switch>
      </div>
    </div> 
  );
}

export default App;
