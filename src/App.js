/* import logo from './logo.svg'; */
/* import { Counter } from './features/counter/Counter' */
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CustomNavbar from './Components/CustomNavbar'
import { ProductCard } from './Components/ProductCard';
import { selectInventory } from './features/inventory/inventorySlice';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const inventory = useSelector(selectInventory);
  return (
    <div className="App">
      <CustomNavbar></CustomNavbar>
      <Container>
        <Row xs={1} sm={2} lg={3}>
          {
            inventory.map( product =>
              <ProductCard product={product} key={product.id}></ProductCard>
            )
          }
          </Row>
      </Container>
    </div>
  );
}

export default App;
