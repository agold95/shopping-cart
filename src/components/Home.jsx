import { Link } from "react-router-dom";
import ShoppingCart from '../styles/assets/shopping-cart.png';

const Home = () => {
    return (
        <div className="home">
            <header className="home-header">
                <h1>STUFF</h1>
                <h3>Everyone needs STUFF</h3>
            </header>
            <div className="cart-image">
                <img src={ShoppingCart} alt="shopping-cart" />
            </div>
            <main className="home-content">
                    <div>
                        <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i></p>
                    </div>
                    <div>
                        <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i></p>
                    </div>
            </main>
            <div className="shop-button-container">
                <Link to="/products">
                    <button>Shop Now</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;