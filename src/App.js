

function App() {
  return (
    <div className="App">

    <div className="container d-flex flex-column justify-content-center align-items-center">

      <div className="burger col-6 card rounded d-flex flex-row justify-content-between p-3 mx-auto">

      <div className="d-flex flex-row">
        <div className="picture">
          <img src="https://foodish-api.herokuapp.com/images/burger/burger42.jpg" className="rounded"/>
        </div>

        <div className="info d-flex flex-column justify-content-start p-2">
          <h2>Normal Burger</h2>
          <p>Un bon burger</p>
          <button className="btn btn-warning text-light">Voir</button>
        </div>
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
