import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";

import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import {listProducts} from "../actions/productActions";


function HomeScreen({history}) {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const {error, loading, products} = productList;


    useEffect(() => {
        dispatch(listProducts())

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