const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Price: ₹{item.price.toFixed(2)}</p>
      <p>Quantity: {item.quantity}</p>
      <button>Remove from Cart</button>
    </div>
  );
};

export default CartItem;
// This component represents a single item in the shopping cart.
// It displays the product image, name, price, quantity, and a button to remove the item from the cart.
