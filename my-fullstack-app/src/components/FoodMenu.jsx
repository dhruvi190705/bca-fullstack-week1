import { useState } from 'react';

function FoodMenu() {
  // Food Items
  const [foods] = useState([
    {
      id: 1,
      name: 'Cheese Burger',
      price: 120,
      category: 'Burger',
      description: 'Delicious burger with cheese and fresh vegetables',
    },
    {
      id: 2,
      name: 'Margherita Pizza',
      price: 199,
      category: 'Pizza',
      description: 'Classic pizza with cheese and tomato sauce',
    },
    {
      id: 3,
      name: 'Veg Sandwich',
      price: 90,
      category: 'Sandwich',
      description: 'Fresh vegetable sandwich with tasty sauce',
    },
    {
      id: 4,
      name: 'French Fries',
      price: 80,
      category: 'Snacks',
      description: 'Crispy and golden potato fries',
    },
    {
      id: 5,
      name: 'Cold Coffee',
      price: 100,
      category: 'Drinks',
      description: 'Refreshing chilled coffee',
    },
    {
      id: 6,
      name: 'Veg Cheese Pizza',
      price: 249,
      category: 'Pizza',
      description: 'Cheesy pizza topped with fresh vegetables',
    },
  ]);

  // Cart State
  const [cart, setCart] = useState([]);

  // Add Food to Cart
  const addToCart = (food) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === food.id
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...food, quantity: 1 }];
    });
  };

  // Remove Food from Cart
  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  // Increase or Decrease Quantity
  const updateQuantity = (id, change) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + change),
            }
          : item
      )
    );
  };

  // Total Items in Cart
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Total Cart Price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={styles.container}>

      {/* Header */}
      <h1 style={styles.heading}>
        🍔 QuickBite
      </h1>

      <p style={styles.subtitle}>
        Delicious food, delivered with love!
      </p>

      {/* Food Menu */}
      <h2 style={styles.sectionHeading}>
        🍕 Our Food Menu
      </h2>

      <div style={styles.grid}>
        {foods.map((food) => (
          <div key={food.id} style={styles.card}>

            <div style={styles.foodIcon}>
              {food.category === 'Burger' && '🍔'}
              {food.category === 'Pizza' && '🍕'}
              {food.category === 'Sandwich' && '🥪'}
              {food.category === 'Snacks' && '🍟'}
              {food.category === 'Drinks' && '🥤'}
            </div>

            <h3 style={styles.foodName}>
              {food.name}
            </h3>

            <span style={styles.category}>
              {food.category}
            </span>

            <p style={styles.description}>
              {food.description}
            </p>

            <h3 style={styles.price}>
              ₹{food.price}
            </h3>

            <button
              style={styles.button}
              onClick={() => addToCart(food)}
            >
              + Add to Cart
            </button>

          </div>
        ))}
      </div>

      {/* Shopping Cart */}
      <div style={styles.cart}>

        <h2 style={styles.cartHeading}>
          🛒 Your Cart ({totalItems} Items)
        </h2>

        {cart.length === 0 ? (
          <p style={styles.emptyCart}>
            Your cart is empty.
            Add some delicious food!
          </p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} style={styles.cartItem}>

                <div style={styles.cartInfo}>
                  <h3>{item.name}</h3>

                  <p>
                    ₹{item.price} × {item.quantity} = ₹
                    {item.price * item.quantity}
                  </p>

                  {/* Quantity Controls */}
                  <div style={styles.quantityControls}>

                    <button
                      style={styles.quantityButton}
                      onClick={() =>
                        updateQuantity(item.id, -1)
                      }
                    >
                      −
                    </button>

                    <strong>{item.quantity}</strong>

                    <button
                      style={styles.quantityButton}
                      onClick={() =>
                        updateQuantity(item.id, 1)
                      }
                    >
                      +
                    </button>

                  </div>
                </div>

                {/* Remove Button */}
                <button
                  style={styles.removeButton}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>

              </div>
            ))}

            {/* Cart Total */}
            <div style={styles.totalSection}>
              <h3>Total Items: {totalItems}</h3>

              <h2>
                Total Amount: ₹{totalPrice}
              </h2>
            </div>

          </>
        )}

      </div>

    </div>
  );
}

// CSS Styles
const styles = {
  container: {
    padding: '25px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9fafb',
  },

  heading: {
    textAlign: 'center',
    color: '#e85d04',
    fontSize: '36px',
    marginBottom: '5px',
  },

  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: '35px',
  },

  sectionHeading: {
    color: '#222',
    marginBottom: '20px',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
    gap: '20px',
  },

  card: {
    padding: '22px',
    borderRadius: '14px',
    backgroundColor: '#fff',
    border: '1px solid #eee',
    boxShadow: '0 4px 12px rgba(0,0,0,0.07)',
  },

  foodIcon: {
    fontSize: '45px',
    textAlign: 'center',
    marginBottom: '10px',
  },

  foodName: {
    color: '#222',
    marginBottom: '8px',
  },

  category: {
    display: 'inline-block',
    backgroundColor: '#ffedd5',
    color: '#c2410c',
    padding: '5px 10px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 'bold',
  },

  description: {
    color: '#666',
    fontSize: '14px',
    minHeight: '40px',
    lineHeight: '1.5',
  },

  price: {
    color: '#16a34a',
    fontSize: '22px',
  },

  button: {
    width: '100%',
    backgroundColor: '#e85d04',
    color: 'white',
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '14px',
  },

  cart: {
    marginTop: '40px',
    padding: '25px',
    backgroundColor: '#fff7ed',
    borderRadius: '14px',
    border: '1px solid #fed7aa',
  },

  cartHeading: {
    color: '#9a3412',
    marginBottom: '20px',
  },

  emptyCart: {
    color: '#666',
    textAlign: 'center',
    padding: '20px',
  },

  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '15px',
    flexWrap: 'wrap',
    borderBottom: '1px solid #fed7aa',
    padding: '15px 0',
  },

  cartInfo: {
    flex: 1,
  },

  quantityControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginTop: '10px',
  },

  quantityButton: {
    backgroundColor: '#e85d04',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    width: '32px',
    height: '32px',
    fontSize: '20px',
    cursor: 'pointer',
  },

  removeButton: {
    backgroundColor: '#dc2626',
    color: 'white',
    border: 'none',
    padding: '9px 14px',
    borderRadius: '6px',
    cursor: 'pointer',
  },

  totalSection: {
    textAlign: 'right',
    marginTop: '20px',
    color: '#15803d',
  },
};

export default FoodMenu;