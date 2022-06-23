import React, {useState, useEffect} from 'react'

import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'


function HomeScreen({history}) {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        async function fetchProducts() {
            const {data} = await axios.get("api/products/");
            setProducts(data);

        }

        fetchProducts();

    }, []);

    return (
        <div>
            <div>
                <Row>
                    {products.map(product => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product}/>
                        </Col>
                    ))}
                </Row>

            </div>

        </div>
    )
}

export default HomeScreen