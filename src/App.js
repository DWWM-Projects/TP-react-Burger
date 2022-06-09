import React from "react";
import Burger from "./Burger"

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

      <div className="container"> 
      
        {this.state.burgers.map(burger => <Burger burger={burger} key={burger.id} /> )} 
  
      </div>      
    );
  }
}

export default App;
