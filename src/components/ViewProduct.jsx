import React from "react";

export class ViewProduct extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            cost: this.props.cost,
            description: this.props.description,
            //numberOfPurchases
            buys: this.props.buys,
            rating: this.props.rating
        }
    }
    render(){
        return(
            <div>
                <span>
                    <span>
                        <img src="" alt=""/>
                        <div>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                        </div>
                    </span>
                    <div>
                        <h1>{this.state.name}</h1>
                        <h3>${this.state.cost}</h3>
                        <p>{this.state.description}</p>
                        <p>Number of purchases: {this.state.buys}</p>
                        <span>
                            <input type="number"></input>
                            <button className="btn btn-success">Add to cart</button>
                            <button className="btn btn-success">Buy now</button>
                        </span>
                    </div>
                </span>
            </div>
        )
    }
}

