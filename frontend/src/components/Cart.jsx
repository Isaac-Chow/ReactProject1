import React from "react";

export class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            products: this.props.products,
            productSum: this.props.productSum,
            shipping: this.props.shipping,
            sum: this.props.sum
        }
        this.checkout=this.checkout.bind(this)
        this.removeItem=this.removeItem.bind(this)
    }
    render(){
        return(
            <div>
                <h1>Stuff</h1>
                <button className="btn btn-success">Checkout</button>
            </div>
        )
    }
    checkout(){
        this.setState({
            products: [],
            productSum: 0,
            shipping: 0,
            sum: 0
        })   
        console.log("Successfully checked out! Cart cleared.")
        alert("Successfully checked out! Cart cleared.")
    }
    removeItem(itemNum){
        this.products.foreach(item=>{
            if(item.itemNum===itemNum){
                this.product.pop(item)
                alert("Item successfully removed")
            }else{
                alert("Item not found!")
            }
        })
    }
}