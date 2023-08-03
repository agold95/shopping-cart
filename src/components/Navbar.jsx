import { Link, Outlet } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';
import { useEffect, useState } from "react";

const Navbar = ({ cartItems }) => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        setCartCount(cartItems.length);
    }, [cartItems]);

    return (
        <div className="navbar">
            <nav>
                <div className="nav-title">
                    <h2>STUFF</h2>
                </div>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/cart">
                        <Icon path={mdiCart} size={1} />
                    </Link>
                    {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                </div>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Navbar;