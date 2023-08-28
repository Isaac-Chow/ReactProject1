import React from "react";

export class Product extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: this.props.name,
            cost: this.props.cost,
            description: this.props.description,
            //numberOfPurchases
            buys: this.props.buys,
            rating: this.props.rating
        }
        this.purchase=this.purchase.bind(this)
        this.addToCart=this.addToCart.bind(this)
    }
    
    render(){
        // You can type JS here

        return(
            // You can only type 
            <div>
                
            </div>
        )
    }
    //FIXME:
    purchase(){ 
        let increment = this.buys +1
        this.setState({
            buys: increment
        })   
        console.log("Redirecting to your cart")
        
    }
    addToCart(){
       console.log("Redirecting to your cart")
    }
}