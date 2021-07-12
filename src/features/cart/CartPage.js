import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useSelector } from 'react-redux';
import { selectCart } from './cartSlice';
import Table from 'react-bootstrap/Table'

export default function Cart() {

  const cart = useSelector(selectCart);
  
  return (
        <Container>
            <Row>
                <Col>
                    {cart.length > 0 ?
                        <Table striped bordered hover className="mt-4">
                            <thead>
                                <th>ID</th>
                                <th>TITLE</th>
                                <th>QUANTITA'</th>
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
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    :
                        <p>Non ci sono oggetti nel carrello</p>
                    }
                </Col>
            </Row>
        </Container>
  );
}