import Container from 'react-bootstrap/Container';
import { useEffect } from 'react';
import { getProducts, selectInventory } from '../features/inventory/inventorySlice';
import { useSelector, useDispatch } from 'react-redux';
import { ProductCard } from './ProductCard';
import CardDeck from 'react-bootstrap/CardDeck'

export default function Shop() {
    const dispatch = useDispatch()
    const inventory = useSelector(selectInventory);
  
    useEffect(() => {
      dispatch(getProducts())
    }, [dispatch])

    return(
        <Container>
          <CardDeck>
            {
              inventory.list ? 
              inventory.list.map( product =>
                <ProductCard product={product} key={product.id}></ProductCard>
              ) : null
            }
            </CardDeck>
        </Container>
    )
    
}