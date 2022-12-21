import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {List} from "antd";

const Category = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products/categories")
            .then((response) => response.json())
            .then((data) => setCategory(data));
    }, []);

    return (
        <List
            size="large"
            header={<div>Categories</div>}
            bordered
            dataSource={category}
            renderItem={(cat) => <Link to={`/category/${cat}/products`}><List.Item>{cat}</List.Item></Link>}
        />
    );
};

export default Category;