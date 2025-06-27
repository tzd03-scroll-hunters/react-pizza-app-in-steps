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
      <input type="text" placeholder='Search term...' />

      {/* Component 4: Pizza List Container */}
      <main>

        {/* Component 5: Pizza Card */}
        <div className="pizza-list" style={{ 
          display: "flex", 
          gap: "1em",
          padding: "2em",
          flexDirection: "column"
          }}>
          <div className="card">Pizza 1</div>
          <div className="card">Pizza 2</div>
          <div className="card">Pizza 3</div>
        </div>

      </main>
    </>
  )
}

export default App
