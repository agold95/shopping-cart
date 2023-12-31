const Cart = ({ cartItems, setCartItems }) => {
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity, 0,
    );

    const removeFromCart = (productID) => {
        setCartItems((previousCartItems) =>
            previousCartItems.filter((item) => item.id !== productID)
        );
    };

    const increaseCartQuantity = (productID) => {
        setCartItems((previousCartItems) =>
            previousCartItems.map((item) =>
                item.id === productID ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseCartQuantity = (productID) => {
        setCartItems((previousCartItems) =>
            previousCartItems.map((item) =>
                item.id === productID ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item
            )
        );
    };

    const purchaseButton = () => {
        alert("This will eventually connect to the backend for purchase confirmation");
    }
    
    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p className="empty-cart">Your cart is empty.</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title} />
                                <div className="item-content">
                                    <h3>{item.title}</h3>
                                    <p>${item.price}</p>
                                    <div className="quantity-button-container">
                                        <button className="minus-button" onClick={() => decreaseCartQuantity(item.id)}>-</button>
                                        <p>{item.quantity}</p>
                                        <button className="plus-button" onClick={() => increaseCartQuantity(item.id)}>+</button>
                                    </div>
                                </div>
                                <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                        ))}
                    </div>
                    <div className="cart-total">
                            <div>
                                <p>Total: ${totalPrice.toFixed(2)}</p>
                            </div>
                            <div>
                                <button className="confirm-button" onClick={() => purchaseButton()}>Confirm Purchase</button>
                            </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;