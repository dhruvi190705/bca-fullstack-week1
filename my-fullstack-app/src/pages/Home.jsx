import Header from '../components/Header';
import Card from '../components/Card';
import Counter from '../components/Counter';
import NameInput from '../components/NameInput';
import Clock from '../components/Clock';
import WindowSize from '../components/WindowSize';
import FocusInput from '../components/FocusInput';
import ThemeDisplay from '../components/ThemeDisplay';
import SquareCalculator from '../components/SquareCalculator';

function Home() {
  return (
    <div>
      <Header />
      <Counter />
      <NameInput />
      <Clock />
      <WindowSize />
      <FocusInput />
      <ThemeDisplay />
      <SquareCalculator />
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <Card title="React" description="A JavaScript library for building UI" />
        <Card title="Node.js" description="A backend runtime environment" />
        <Card title="MongoDB" description="A NoSQL database" />
        <Card title="Express.js" description="A backend web framework for Node.js" />
      </div>
      <h2 style={{ textAlign: "center" }}>Welcome to the Home Page</h2>
      <p style={{ textAlign: "center" }}>This is my Full Stack Development project.</p>
    </div>
  );
}

export default Home;