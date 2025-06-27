import { useState } from "react";
import "./App.css";

// Ein Pizza Layout für meine Pizza Card
// DATEN werden von außen INJECTED als PROP
// bei Cards mit mehreren Infos wird meist ein OBJECT 
// mit allen Infos als Prop injected
const PizzaCard = ({ pizza  }) => {

  return (
    <div className="card">
      <img src={pizza.img} />
      <div className="card-body">
        <div>{pizza.title}</div>
        <div>{pizza.description}</div>
        <div>
          <span>{pizza.price} €</span>
          <button>BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

function App() {
  // DATEN
  const [pizzas, _setPizzas] = useState([
    {
      img: "https://media.istockphoto.com/photos/slices-of-pizza-hawaiian-toppings-with-pineapple-ham-and-cheese-picture-id1160976666?b=1&k=6&m=1160976666&s=170667a&w=0&h=5m4uLBuT7oJ3UkX4s0xybkEV7gsZWOpgjYC1WDns_7E=",
      title: "Hawaii",
      description: "Lorem ipsum dolor sit amet",
      price: 5.99,
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/12/05/20/09/pizza-3000274__340.jpg",
      title: "Funghi",
      description: "Lorem ipsum dolor sit amet",
      price: 7.99,
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/01/22/19/20/pizza-2000614__340.jpg",
      title: "Nutella",
      description: "Mit Erdbeere und Pistazien",
      price: 9.99,
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/01/22/19/20/pizza-2000614__340.jpg",
      title: "Diavolo",
      description: "Mit Chilli und Cayenne",
      price: 88.99,
    },
  ]);


  // konvertiere Array von Pizzas in Pizza Cards (HTML)
  const htmlPizzas = pizzas.map(pizza => {
    return <PizzaCard pizza={pizza} />
  })


  // LAYOUT
  // STARTEN wir nur mit DUMMY Content
  // nur HTML / Layout CSS / keine Detail Stylings
  // keine Logik (keine Click Listener, kein State, etc)
  return (
    <>
      {/* Component 1: Header */}
      <h1>Pizza Store</h1>

      {/* Component 2: Nav */}
      <nav style={{ display: "flex", gap: 10, justifyContent: "center" }}>
        <a href="">Pizzas</a>
        <a href="">Cart</a>
      </nav>

      {/* Component 3: Search Box */}
      <input type="text" placeholder="Search term..." />

      {/* Component 4: Pizza List Container */}
      <main>
        {/* Component 5: Pizza Card */}
        <div
          className="pizza-list"
          style={{
            display: "flex",
            gap: "1em",
            padding: "2em",
            flexDirection: "column",
            maxWidth: 500,
          }}
        >

          {/* injecte Daten hardcoded in Component rein */}
          {/* <PizzaCard
            pizza={{
              img: "https://cdn.pixabay.com/photo/2017/12/05/20/09/pizza-3000274__340.jpg",
              title: "Nutella",
              price: 55.55,
              description: "Bla blabla blabla",
            }}
          />
          <PizzaCard
            pizza={{
              img: "https://cdn.pixabay.com/photo/2017/12/05/20/09/pizza-3000274__340.jpg",
              title: "Funghi",
              price: 44.55,
              description: "Bla blabla blabla",
            }}
          />
          <PizzaCard
            pizza={{
              img: "https://cdn.pixabay.com/photo/2017/12/05/20/09/pizza-3000274__340.jpg",
              title: "Whatever",
              price: 10.55,
              description: "Bla blabla blabla",
            }}
          /> */}

          { htmlPizzas }
        </div>
      </main>
    </>
  );
}

export default App;
