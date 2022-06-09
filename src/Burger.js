import React from "react";

class Burger extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div key={this.props.burger.id} className="burger col-6 card rounded d-flex flex-row justify-content-between p-3 mx-auto my-1">
                
                        <div className="d-flex flex-row">
                        <div className="picture">
                            <img src={this.props.burger.picture} className="rounded"/>
                        </div>
                
                        <div className="info d-flex flex-column justify-content-start p-2">
                            <h2>{this.props.burger.name}</h2>
                            <p>{this.props.burger.info}</p>
                            <button className="btn btn-warning text-light">Voir</button>
                        </div>
                        </div>
                
                        <div className="price d-flex justify-content-end align-items-center">
                        <span className="displayPrice">{this.props.burger.price}</span>
                        </div>
                
                    </div>
                </div>
            </div>


        )
    }
}

export default Burger;