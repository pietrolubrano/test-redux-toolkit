import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import styles from './Cart.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { removeProductFromCart, selectCart } from './cartSlice';
import { useState, useEffect } from 'react';

export default function Cart() {

    const dispatch = useDispatch();
    const cart = useSelector(selectCart);
    const [totalPrice, setTotalPrice] = useState(0)

    const calculateTotalPrice = () => {
        var totalPriceCalculator = 0;
        cart.map( item => 
            totalPriceCalculator = totalPriceCalculator + (item.price * item.quantity)
        )
        return totalPriceCalculator.toFixed(2)
    }

    useEffect (() => {
        setTotalPrice(calculateTotalPrice())
    }, [cart]);

  return (
        <Container>
            <Row>
                <Col>
                    {cart.length > 0 ? <>
                        <Table striped hover className="mt-4 border-none">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>TITLE</th>
                                    <th>QUANTITA'</th>
                                    <th>PREZZO</th>
                                    <th>X</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map( product => 
                                    <tr key={product.id}>
                                        <td>
                                            {product.id}
                                        </td>
                                        <td>
                                            {product.title}
                                        </td>
                                        <td>
                                            {product.quantity}
                                        </td>
                                        <td>
                                            {product.price}
                                        </td>
                                        <td>
                                            <Button variant="danger" onClick={() => dispatch(removeProductFromCart(product))} > X </Button>
                                        </td>
                                    </tr>
                                )}
                                    <tr key="total price" className={styles.priceRow }>
                                        <td>

                                        </td>
                                        <td>

                                        </td>
                                        <td className="font-weight-bold">
                                            TOT:
                                        </td>
                                        <td className="font-weight-bold">
                                            {totalPrice}
                                        </td>
                                        <td>
                                            
                                        </td>
                                    </tr>
                            </tbody>
                        </Table>

                        </> :
                        <p>Non ci sono oggetti nel carrello</p>
                    }
                </Col>
            </Row>
        </Container>
  );
}