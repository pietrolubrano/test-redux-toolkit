import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useEffect } from 'react';
import { getProducts,selectInventory } from '../features/inventory/inventorySlice';
import { useSelector, useDispatch } from 'react-redux';
import { ProductCard } from './ProductCard';

export function Shop() {
    const dispatch = useDispatch()
    const inventory = useSelector(selectInventory);
  
    useEffect(() => {
      dispatch(getProducts())
    }, [dispatch])

    return(
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
    )
    
}