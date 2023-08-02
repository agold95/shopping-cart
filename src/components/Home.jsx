import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <header className="home-header">
                <h1>STUFF</h1>
                <h3>Everyone needs STUFF</h3>
            </header>
            <main className="home-content">
                    <div>
                        <p>Here at STUFF you can find stuff that you don't need for prices way above whatever you're willing to pay for.</p>
                    </div>
                    <div>
                        <p>Check out our shop for products you'll never want or need, all attainable with an easy click of a button.</p>
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