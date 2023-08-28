import React from "react"
import { Product } from "./Product"

export class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){

        // Create a product object list of products with dummy data
        const products = [
            {
                "name": "Flower Vase",
                "category": "Home Decor",
                "description": "This is a description of the product",
                "imageUrl": "https://cdn.pixabay.com/photo/2018/04/05/14/09/sunflowers-3292932_1280.jpg",
                "price": 60.50,
                "quantity": 10
            },
            {
                "name": "Chair",
                "category": "Furniture",
                "description": "This is a description of the product",
                "imageUrl": "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
                "price": 120.00,
                "quantity": 5
            },
            {
                "name": "Table",
                "category": "Furniture",
                "description": "This is a description of the product",
                "imageUrl": "https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_1280.jpg",
                "price": 240.00,
                "quantity": 2
            },
            {
                "name": "Lamp",
                "category": "Home Decor",
                "description": "This is a description of the product",
                "imageUrl": "https://cdn.pixabay.com/photo/2015/05/15/14/55/lamp-768526_1280.jpg",
                "price": 45.00,
                "quantity": 20
            },
            {
                "name": "Pillow",
                "category": "Home Decor",
                "description": "This is a description of the product",
                "imageUrl": "https://cdn.pixabay.com/photo/2016/11/29/05/08/astronomy-1867616_1280.jpg",
                "price": 20.00,
                "quantity": 30
            },
            {
                "name": "Curtains",
                "category": "Home Decor",
                "description": "This is a description of the product",
                "imageUrl": "https://cdn.pixabay.com/photo/2016/11/18/17/20/bed-1835951_1280.jpg",
                "price": 120.00,
                "quantity": 5
            },
            {
                "name": "Sofa",
                "category": "Furniture",
                "description": "This is a description of the product",
                "imageUrl": "https://cdn.pixabay.com/photo/2016/11/19/13/06/bedroom-1839183_1280.jpg",
                "price": 450.00,
                "quantity": 3
            },
            {
                "name": "Cupboard",
                "category": "Furniture",
                "description": "This is a description of the product",
                "imageUrl": "https://cdn.pixabay.com/photo/2017/03/19/01/43/living-room-2155376_1280.jpg",
                "price": 350.00,
                "quantity": 4
            },
        
        ]
        console.log("You're inside the render function") ;
        
        return(
            <div className="container py-3">
                <div className="container-fluid">
                    { console.log("You're inside the render function") } 
                    <div className="d-flex justify-content-center col-12">
                        <div className="row">
                            {/* Map through the products array and create a Product component for each product */}
                            {products.map((product,index)=>(
                                <Product
                                    key={index}
                                    name={product.name}
                                    category={product.category}
                                    description={product.description}
                                    imageUrl={product.imageUrl}
                                    price={product.price}
                                    quantity={product.quantity}
                                />
                            ))
                            }
                        </div>
                    </div>
                    
                </div>
            </div>

        )
            
    }
}