import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/orders"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data = await response.json();

        console.log("Orders Response:", data);

        setOrders(data.orders || []);
      } catch (error) {
        console.error("Orders Error:", error);

        setError(
          "Cannot connect to backend. Please make sure server is running."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div style={styles.container}>
        <h2>📦 Customer Orders</h2>
        <p>Loading orders...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.container}>
        <h2>📦 Customer Orders</h2>
        <p style={styles.error}>{error}</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        📦 Customer Orders
      </h1>

      <p style={styles.subtitle}>
        Orders saved in MongoDB
      </p>

      {orders.length === 0 ? (
        <div style={styles.empty}>
          <h2>📭 No Orders Found</h2>
          <p>No customer orders are available yet.</p>
        </div>
      ) : (
        <div style={styles.orderGrid}>
          {orders.map((order) => (
            <div
              key={order._id}
              style={styles.orderCard}
            >
              <div style={styles.header}>
                <h2>
                  👤 {order.customerName}
                </h2>

                <span style={styles.status}>
                  Confirmed
                </span>
              </div>

              <p style={styles.info}>
                📱 <strong>Mobile:</strong>{" "}
                {order.mobile}
              </p>

              <p style={styles.info}>
                🆔 <strong>Order ID:</strong>{" "}
                {order._id}
              </p>

              {order.createdAt && (
                <p style={styles.info}>
                  📅 <strong>Date:</strong>{" "}
                  {new Date(
                    order.createdAt
                  ).toLocaleString()}
                </p>
              )}

              <div style={styles.itemsBox}>
                <h3>🍔 Ordered Items</h3>

                {order.items?.map(
                  (item, index) => (
                    <div
                      key={index}
                      style={styles.item}
                    >
                      <span>
                        {item.name}
                      </span>

                      <span>
                        ₹{item.price} ×{" "}
                        {item.quantity}
                      </span>
                    </div>
                  )
                )}
              </div>

              <div style={styles.totalBox}>
                <span>Total Amount</span>

                <strong>
                  ₹{order.total}
                </strong>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "25px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9fafb",
    minHeight: "100vh",
  },

  heading: {
    color: "#e85d04",
    marginBottom: "5px",
  },

  subtitle: {
    color: "#666",
    marginBottom: "25px",
  },

  orderGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "20px",
  },

  orderCard: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "14px",
    border: "1px solid #eee",
    boxShadow:
      "0 4px 12px rgba(0,0,0,0.08)",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    marginBottom: "15px",
  },

  status: {
    backgroundColor: "#dcfce7",
    color: "#15803d",
    padding: "5px 10px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "bold",
  },

  info: {
    color: "#555",
    fontSize: "14px",
    margin: "8px 0",
    wordBreak: "break-word",
  },

  itemsBox: {
    marginTop: "20px",
    padding: "15px",
    backgroundColor: "#fff7ed",
    borderRadius: "10px",
  },

  item: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    padding: "10px 0",
    borderBottom:
      "1px solid #fed7aa",
    fontSize: "14px",
  },

  totalBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
    paddingTop: "15px",
    borderTop: "2px solid #eee",
    fontSize: "18px",
    color: "#15803d",
  },

  empty: {
    textAlign: "center",
    backgroundColor: "white",
    padding: "50px 20px",
    borderRadius: "14px",
    color: "#666",
  },

  error: {
    color: "#dc2626",
    backgroundColor: "#fee2e2",
    padding: "15px",
    borderRadius: "8px",
  },
};

export default Orders;