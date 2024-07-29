import {Route,Switch} from 'react-router-dom'
import Home from './components/Home/home'
import './App.css';
import Transactions from './components/Transactions/transactions';
import NavBar from './components/Navbar/navbar';

function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/addtransaction' component={Transactions}/>
      </Switch>
    </>
  );
}

export default App;