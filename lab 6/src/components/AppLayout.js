import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";
import styled from "styled-components";
import {Breadcrumb, Layout} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";

const Logo = styled.span`
  font-size: 2rem;
  text-align: center;
  text-decoration: none;
  color: cyan;
`;

const FooterText = styled.p`
  text-decoration: none;
  color: cyan;
  text-align: center;
  font-size: 1.5rem;
`;

const AppLayout = () => {
    const {category, id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }, [id]);

    return (
        <Layout>
            <Header style={{position: 'sticky', top: 0, zIndex: 1, width: '100%'}}>
                <Logo><Link to="/">Lab06</Link></Logo>
            </Header>
            <Content className="site-layout" style={{padding: '0 50px'}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    {
                        category && <Breadcrumb.Item>{category}</Breadcrumb.Item>
                    }
                    {
                        id && <>
                            <Breadcrumb.Item><Link
                                to={`/category/${product.category}/products`}>{product.category}</Link></Breadcrumb.Item>
                            <Breadcrumb.Item>{product.title}</Breadcrumb.Item></>
                    }
                </Breadcrumb>
                <Outlet/>
            </Content>
            <Footer style={{backgroundColor: "gray"}}><FooterText>Lab06</FooterText></Footer>
        </Layout>
    );
};

export default AppLayout;