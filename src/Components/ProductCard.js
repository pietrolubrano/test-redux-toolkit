import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CartIconAdd from '../features/cart/icon/cart-plus-solid.svg'
import { useDispatch } from 'react-redux';
import {
  addProduct
} from '../features/cart/cartSlice';
import { removeProductFromInventory } from '../features/inventory/inventorySlice';
import infoIcon from './icon/info-solid.svg'
/* import { selectInventory } from '../features/cart/cartSlice'; */

export function ProductCard({product}) {
    /* const availableQuantity = useSelector(selectInventory); */
    const dispatch = useDispatch();
    const addToCartAndRemoveFromInventory = (product) => {
        dispatch(addProduct(product))
        dispatch(removeProductFromInventory(product))
    }

    return (
        <Col className="pb-3">
            <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title className="font-weight-bold text-capitalize">{product.title}</Card.Title>
                    <Card.Text>
                    {product.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Row className="text-center">
                        
                        {product.stock > 0 ? 
                        <Col><span className="text-muted">disponibilità: </span> {product.stock}</Col>
                        :
                        <Col><span className="text-muted">non disponibile</span></Col>
                        }
                        
                    </Row>
                    <Row>
                        <Col className="d-flex align-items-center font-weight-bold">
                            {product.price} €
                            <span className="ml-auto">
                                {product.stock > 0 ? 

                                    <Button variant="info"
                                    aria-label="Add product"
                                    onClick={() => addToCartAndRemoveFromInventory(product)}
                                    >
                                    <img src={CartIconAdd} alt="cart-icon-add" style={{ height: "1.5em" }} />
                                    </Button>

                                :

                                    <Button variant="info"
                                    aria-label="Info product"
                                    >
                                    <img src={infoIcon} alt="cart-icon-add" style={{ height: "1.5em" }} />
                                    </Button>

                                }
                                
                            </span>
                        </Col>
                    </Row>
                    
                </Card.Footer>
            </Card>
        </Col>
    )
}