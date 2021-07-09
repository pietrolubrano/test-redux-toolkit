import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import CartIconAdd from '../features/cart/icon/cart-plus-solid.svg'
import infoIcon from './icon/info-solid.svg'
import { getProducts, selectInventory, removeProductFromInventory } from '../features/inventory/inventorySlice';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { addProduct } from '../features/cart/cartSlice';

export function ProductPage() {
    const inventory = useSelector(selectInventory);
    const dispatch = useDispatch()
    const [productId, setproductId] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const { id } = useParams()
    const addToCartAndRemoveFromInventory = (product) => {
        dispatch(addProduct(product))
        dispatch(removeProductFromInventory(product))
    }

    useEffect (() => {
        if(inventory.status === null){
            dispatch(getProducts())
        }
    }, []);

    useEffect (() => {
        setproductId(inventory.list.findIndex( item =>
            item.id === parseInt(id)
        ))
    }, [inventory]);

    const product = inventory.list[productId]

    return(
        <Container className="mt-4">
            {product ? <>
                <Row>
                    <Col className="pt-3 d-flex justify-content-center" sm={12} md={6} style={{ maxHeight: "80vh" }}>
                        <img className="img-fluid" src={product.image} alt={product.title} style={{ maxHeight: "80vh" }} />
                    </Col>
                    <Col className="pt-5 pt-md-3 d-flex flex-column" sm={12} md={6}>
                        <h3 className="mb-5">{product.title}</h3>
                        <p>{product.description}</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-12 col-md-6 offset-md-6 mt-3 mb-5 d-flex align-items-center">
                        <span className="font-weight-bold">{product.price} €</span>
                        {
                            product.stock > 0 ? <>
                            <Button variant="info" className="h-100 ml-auto" onClick={() => setQuantity(quantity - 1)}>-</Button>
                            <input className="h-100" type="number" value={quantity} min="1" max={product.stock} disabled />
                            <Button variant="info" className="h-100" onClick={() => setQuantity(quantity + 1)}>+</Button>
                            <Button 
                                variant="info"
                                onClick={() => addToCartAndRemoveFromInventory(product)}>
                                    <img src={CartIconAdd} alt="cart-icon-add" style={{ height: "1.5em" }} />
                             </Button> </>
                            :
                            <Button 
                                variant="info"
                                className="ml-auto">
                                    <img src={infoIcon} alt="cart-icon-add" style={{ height: "1.5em" }} />
                                </Button>
                            }
                    </Col>
                </Row>
            </>: null}
            
        </Container>
    )
}