import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      burgers: [
        {id: 1, picture: "https://foodish-api.herokuapp.com/images/burger/burger42.jpg", name: "Normal Burger", info: "Un bon burger", price: "8€"},
        {id: 2, picture: "https://foodish-api.herokuapp.com/images/burger/burger19.jpg", name: "King Burger", info: "Un burger de roi", price: "10€"},
        {id: 3, picture: "https://foodish-api.herokuapp.com/images/burger/burger18.jpg", name: "Double Burger", info: "Un burger pour les grandes faims", price: "12€"},
      ]
    }
  }

  render() {
    return (

      <div>        
        <div  className="container d-flex flex-column justify-content-center align-items-center">
          {this.state.burgers.map(burger =>
            <div key={burger.id} className="burger col-6 card rounded d-flex flex-row justify-content-between p-3 mx-auto my-1">
      
              <div className="d-flex flex-row">
                <div className="picture">
                  <img src="https://foodish-api.herokuapp.com/images/burger/burger42.jpg" className="rounded"/>
                </div>
        
                <div className="info d-flex flex-column justify-content-start p-2">
                  <h2>{burger.name}</h2>
                  <p>Un bon burger</p>
                  <button className="btn btn-warning text-light">Voir</button>
                </div>
              </div>
        
              <div className="price d-flex justify-content-end align-items-center">
                <span className="displayPrice">8 €</span>
              </div>
        
              </div>
          )} 
        </div>
      
        
      </div>      
    );
  }
}

export default App;
