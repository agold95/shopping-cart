import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import "./styles/styles.css"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Cart from "./components/Cart";
import Products from "./components/Products";

const Router = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const itemIndex = cartItems.findIndex((item) => item.id === product.id);
        if (itemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[itemIndex] =
                { ...updatedCartItems[itemIndex], quantity: updatedCartItems[itemIndex].quantity + 1 };
            setCartItems(updatedCartItems);
        } else {
            setCartItems((previousCartItems) => [...previousCartItems, { ...product, quantity: 1 }]);
        }
    };

    const router = createBrowserRouter([
        {
            element: <Navbar cartItems={cartItems} setCartItems={setCartItems} />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                    errorElement: <ErrorPage />,
                },
                {
                    path: "/products",
                    element: <Products addToCart={addToCart} />,
                    errorElement: <ErrorPage />,
                },
                {
                    path: "/cart",
                    element: <Cart cartItems={cartItems} setCartItems={setCartItems} />,
                    errorElement: <ErrorPage />,
                },
            ],
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
};

export default Router;