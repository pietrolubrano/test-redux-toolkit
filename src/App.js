import CustomNavbar from './Components/CustomNavbar'
import Shop from './Components/Shop'
import ProductPage  from './Components/ProductPage'
import CartPage  from './features/cart/CartPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div className="App">

      <Router>

        <CustomNavbar></CustomNavbar>

        <Switch>

          <Route exact path="/" component={Shop} />

          <Route exact path="/cart" component={CartPage} />

          <Route exact path="/product/:id" component={ProductPage} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
