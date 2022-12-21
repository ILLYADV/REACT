import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Card} from "antd";
import Meta from "antd/es/card/Meta";

const Product = () => {
    const {id} = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }, [id]);

    return (
        <>
            <Card
                style={{width: 500}}
                cover={<img alt="example" src={product.thumbnail}/>}
            >
                <Meta title={product.title} description={product.description}/>
                <p>{product.price} грн</p>
                <p>{product.brand}</p>
            </Card>
            {product.images?.map(image => <img key={image} src={image} style={{maxWidth: 200}} alt=""/>)}
        </>
    );
};

export default Product;