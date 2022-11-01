import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    const getProducts = async() => {
        let searchQuery = query.get('q') || "";
        console.log("searchQuery",searchQuery);
        let url = `https://my-json-server.typicode.com/kaaaaaang/hnm-react-router/products?q=${searchQuery}`;
        let res = await fetch(url);
        let data = await res.json();
        setProductList(data);
    };

    useEffect(()=>{
        getProducts();
    },[query]);

    return (
        <div>
            <Container>
                <Row>
                    {productList.map((item) => (
                        <Col lg={3} key={item.id}>
                            <ProductCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )

}

export default ProductAll;
