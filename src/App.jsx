import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Card from "./components/Card.jsx";
import data from "./data.js";
import "./App.css";

function App() {
  const cards = data.map((item) => <Card key={item.id} {...item} />);

  return (
    <>
      <Header />
      <Hero />

      <section className="card__list">{cards}</section>
    </>
  );
}

export default App;
