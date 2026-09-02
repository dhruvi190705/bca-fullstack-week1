import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <Card title="React" description="A JavaScript library for building UI" />
        <Card title="Node.js" description="A backend runtime environment" />
        <Card title="MongoDB" description="A NoSQL database" />
        <Card title="Express.js" description="A backend web framework for Node.js" />
      </div>
      <Footer />
    </div>
  );
}

export default App;