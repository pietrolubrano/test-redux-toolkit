import CustomNavbar from './Components/CustomNavbar'
import { Shop } from './Components/Shop'
import { ProductPage } from './Components/ProductPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <div className="App">

      <CustomNavbar></CustomNavbar>

      <Router>
       {/*  <Link to="/">Public Page</Link> */}
        <Switch>

        <Route exact path="/" component={Shop} />

        <Route exact path="/product/:id" component={ProductPage} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
