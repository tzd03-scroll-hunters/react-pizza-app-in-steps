import './App.css'

function App() {


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
          {/* PIZZA CARD */}
          <div className="card">
            <img src="https://media.istockphoto.com/photos/slices-of-pizza-hawaiian-toppings-with-pineapple-ham-and-cheese-picture-id1160976666?b=1&k=6&m=1160976666&s=170667a&w=0&h=5m4uLBuT7oJ3UkX4s0xybkEV7gsZWOpgjYC1WDns_7E=" />
            <div className="card-body">
              <div>Hawaii</div>
              <div>Lorem ipsum dolor sit amet</div>
              <div>
                <span>5.99 €</span>
                <button>BUY NOW</button>
              </div>
            </div>
          </div>
          {/* PIZZA CARD */}
          <div className="card">
            <img src="https://cdn.pixabay.com/photo/2017/12/05/20/09/pizza-3000274__340.jpg" />
            <div className="card-body">
              <div>Funghi</div>
              <div>Lorem ipsum dolor sit amet</div>
              <div>
                <span>5.99 €</span>
                <button>BUY NOW</button>
              </div>
            </div>
          </div>
          {/* PIZZA CARD */}
          <div className="card">
            <img
              src="https://cdn.pixabay.com/photo/2017/01/22/19/20/pizza-2000614__340.jpg"
              alt=""
            />
            <div className="card-body">
              <div>Nutella</div>
              <div>Mit Erdbeere und Pistazien</div>
              <div>
                <span>5.99 €</span>
                <button>BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App
