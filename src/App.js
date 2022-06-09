

function App() {
  return (
    <div className="App">

    <div className="container">

      <div className="burger col-6 card border-dark rounded d-flex flex-row justify-content-around p-3 mx-auto">

      <div className="picture">
        <img src="https://foodish-api.herokuapp.com/images/burger/burger42.jpg" className="rounded"/>
      </div>

      <div className="info">
        <h2>Normal Burger</h2>
        <p>Un bon burger</p>
        <button className="btn btn-warning btn-outline-dark">Voir</button>
      </div>

      <div className="price d-flex justify-content-end align-items-center">
        <span className="displayPrice">8 €</span>
      </div>

      </div>

    </div>

    </div>
  );
}

export default App;
