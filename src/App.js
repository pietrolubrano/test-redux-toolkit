import CustomNavbar from './Components/CustomNavbar'
import { Shop } from './Components/Shop'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {

  return (
    <div className="App">

      <Router>

        <CustomNavbar></CustomNavbar>

        <Route path="/" component={Shop} />

      </Router>
      
    </div>
  );
}

export default App;
