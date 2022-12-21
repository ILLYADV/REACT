import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Category from "./components/Category";
import Products from "./components/Products";
import Product from "./components/Product";

function App() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<AppLayout/>}>
            <Route path="/" element={<Category/>}></Route>
            <Route path="/category/:category/products" element={<Products/>}></Route>
            <Route path="/products/search" element={<Products/>}></Route>
            <Route path="/product/:id" element={<Product/>}></Route>
        </Route>
    ));

    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
