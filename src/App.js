import React from "react";
import axios from "axios";
import Burger from "./Burger"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      burgers: [],
      thisBurger: null,
      
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3001/burgers").then(response => this.setState({ burgers: response.data}));
  }

  selectBurger = (id) => {
    axios.get("http://localhost:3001/burgers/" + id).then(response => this.setState({ thisBurger: response.data }));
  }

  leaveBurger = () => {
    this.setState({ thisBurger: null});
  }

  render() {
    return (

      <div className="container"> 
      
        {this.state.thisBurger
          ? <Burger burger={this.state.thisBurger} onClick={this.leaveBurger} />
          : this.state.burgers.map(burger => <Burger burger={burger} key={burger.id} onClick={() => this.selectBurger(burger.id)} />)} 

      </div>      
    );
  }
}

export default App;
