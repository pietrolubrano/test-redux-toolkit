import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CartIconAdd from '../features/cart/icon/cart-plus-solid.svg'
import { useDispatch } from 'react-redux';
import {
  addproduct,
  removeproduct,
} from '../features/cart/cartSlice';
import { removeProductFromInventory } from '../features/inventory/inventorySlice';
import infoIcon from './icon/info-solid.svg'
/* import { selectInventory } from '../features/cart/cartSlice'; */

export function ProductCard({product}) {
    /* const availableQuantity = useSelector(selectInventory); */
    const dispatch = useDispatch();
    const addToCartAndRemoveFromInventory = (product) => {
        dispatch(addproduct(product))
        dispatch(removeProductFromInventory(product))
    }

    return (
        <Col className="pb-3">
            <Card>
                <Card.Img variant="top" src="https://picsum.photos/300/200" />
                <Card.Body>
                    <Card.Title className="font-weight-bold text-capitalize">{product.label}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
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
                                    onClick={() => addToCartAndRemoveFromInventory({product})}
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