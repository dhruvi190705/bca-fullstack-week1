import { useState } from "react";

function OrderTest() {
  const [message, setMessage] = useState("");

  const placeOrder = async () => {
    const order = {
      customerName: "Dhruvi",
      items: [
        {
          name: "Cheese Burger",
          quantity: 2,
          price: 120,
        },
        {
          name: "French Fries",
          quantity: 1,
          price: 80,
        },
      ],
      total: 320,
    };

    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      const data = await response.json();

      setMessage(data.message);
    } catch (error) {
      setMessage("Order failed!");
    }
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Place Order</h2>

      <button onClick={placeOrder}>
        Place Test Order
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default OrderTest;