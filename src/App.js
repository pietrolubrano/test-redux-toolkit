/* import { Counter } from './features/counter/Counter' */
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CustomNavbar from './Components/CustomNavbar'
import { ProductCard } from './Components/ProductCard';
import { selectInventory } from './features/inventory/inventorySlice';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from './features/inventory/inventorySlice'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch()
  const inventory = useSelector(selectInventory);

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  
  useEffect(() => {

  }, [inventory.list])

  return (
    <div className="App">
      <CustomNavbar></CustomNavbar>
      <Container>
        <Row xs={1} sm={2} md={3} lg={4}>
          {
            inventory.list ? 
            inventory.list.map( product =>
              <ProductCard product={product} key={product.id}></ProductCard>
            ) : null
          }
          </Row>
      </Container>
    </div>
  );
}

export default App;
