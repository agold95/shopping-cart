import { useEffect, useState } from "react";

const Products = ({ addToCart }) => {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if (!response.ok) {
                    throw new Error("Error fetching products");
                }
                const data = await response.json();
                const items = data.filter((product) => 
                    product.category === "men's clothing" ||
                    product.category === "women's clothing"
                );
                const itemQuantity = items.map((product) => (
                    { ...product, quantity: 1 }
                ));
                setItems(itemQuantity);
                setLoading(false)
            } catch (error) {
                console.log("Error fetching products", error);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const handleAddToCart = (product) => {
        const itemIndex = cartItems.findIndex((item) => item.id === product.id);
        if (itemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[itemIndex] =
                { ...updatedCartItems[itemIndex], quantity: updatedCartItems[itemIndex].quantity + 1 };
            setCartItems(updatedCartItems);
        } else {
            setCartItems((previousCartItems) => [...previousCartItems, { ...product, quantity: 1 }]);
        }
        addToCart(product);
    };

    if (loading) {
        return (
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div className="products-container">
            <h2>Products</h2>
            <div className="products-grid">
                {items.map((product) => (
                    <div key={product.id} className="product">
                        <div className="image-container">
                            <img src={product.image} alt={product.title} />
                        </div>
                        <div className="product-content-container">
                            <h3>{product.title}</h3>
                            <h5>${product.price}</h5>
                            <p>{product.category}</p>
                            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;