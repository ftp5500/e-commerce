import {Link, useParams} from 'react-router-dom'

import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import Rating from '../components/Rating'

import {useEffect, useState} from "react";
import axios from "axios";

function ProductScreen() {
    const params = useParams();


    const [product, setProduct] = useState([]);


    useEffect(() => {
        async function fetchProducts() {
            const {data} = await axios.get(`/api/products/${params.id}`);
            setProduct(data);

        }

        fetchProducts();

    }, []);


    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>

            <div>
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid/>
                    </Col>


                    <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Rating value={product.rating} text={`${product.numReviews} reviews`}
                                        color={'#f8e825'}/>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                Price: ${product.price}
                            </ListGroup.Item>

                            <ListGroup.Item>
                                Description: {product.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>


                    <Col md={3}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col>
                                            <strong>${product.price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>
                                            {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>


                                <ListGroup.Item>
                                    <Button

                                        className='btn-block'
                                        disabled={product.countInStock === 0}
                                        type='button'>
                                        Add to Cart
                                    </Button>
                                </ListGroup.Item>


                            </ListGroup>
                        </Card>
                    </Col>
                </Row>


            </div>


        </div>
    )
}

export default ProductScreen