import React, {useEffect, useState} from 'react';
import styles from './index.module.css';
import {Link, useNavigate, useParams, useSearchParams} from "react-router-dom";
import {Input} from "antd";

const Products = () => {
    const {category} = useParams();
    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    let query = searchParams.get('query');
    const navigate = useNavigate();

    useEffect(() => {
        if (query) {
            fetch(`https://dummyjson.com/products/search?q=${query}`)
                .then((response) => response.json())
                .then((data) => setProducts(data.products));
        } else {
            fetch(`https://dummyjson.com/products/category/${category}`)
                .then((response) => response.json())
                .then((data) => setProducts(data.products));
        }
    }, [query, category]);

    const handleChange = event => {
        setSearchParams({query: event.target.value});
    };

    return (
        <>
            <Input placeholder="Search"
                   onClick={() => navigate('/products/search')}
                   onChange={handleChange}
                   style={{marginBottom: 50}}
            />
            <div className={styles.cards}>
                {products.map(product =>
                    <Link key={product.id} to={`/product/${product.id}`}>
                        <div className={styles.card}>
                            <div className={styles.card}>
                                <img src={product.thumbnail} alt=""/>
                                <p>{product.title}</p>
                                <p>{product.price}$</p>
                            </div>
                        </div>
                    </Link>)
                }
            </div>
        </>
    );
};
export default Products