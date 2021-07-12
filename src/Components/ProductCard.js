import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CartIconAdd from '../features/cart/icon/cart-plus-solid.svg'
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../features/cart/cartSlice';
import { removeProductFromInventory } from '../features/inventory/inventorySlice';
import infoIcon from './icon/info-solid.svg'
import { Link } from "react-router-dom";
import './product-card.css'

export function ProductCard({product}) {

    const dispatch = useDispatch();
    const addToCartAndRemoveFromInventory = (product) => {
        const productAndQuantity = {...product};
        productAndQuantity.quantity = 1;
        dispatch(addProductToCart(productAndQuantity))
        dispatch(removeProductFromInventory(productAndQuantity))
    }

    return (
        <Col className="mb-5 card-container">
            <Card className="h-100">
                <Link to={`/product/${product.id}`}>
                    <Card.Img className="px-4 py-3" variant="top" src={product.image} />
                </Link>
                <Card.Body>
                    <Link to={`/product/${product.id}`}>
                        <Card.Title>{product.title}</Card.Title>
                    </Link>
                    <Card.Text className="product-description">
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