import React from "react";
import {Link} from "react-router-dom"

export class NavBar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <div className="d-flex justify-content-between me-auto mb-2 mb-lg-0">
                        {/* 1. Homepage */}
                        <span className="nav-item">
                            <Link to="/" className="btn btn-dark">Home</Link>
                        </span>

                        {/* 2. Company */}
                        <span className="nav-item">
                            <Link to="company" className="btn btn-dark">Company</Link>
                        </span>

                        {/* 3. Address */}
                        <span className="nav-item">
                            <Link to="address" className="btn btn-dark">Address</Link>
                        </span>

                        {/* 4. Add product */}
                        <span className="nav-item">
                            <Link to="product/addproduct" className="btn btn-dark">Add product</Link>
                        </span>
                        
                        {/* 5. Cart  */}
                        <span className="nav-item">
                            <Link to="cart" className="btn btn-dark">Cart</Link>
                        </span>

                        {/* 6. ViewProduct */}
                        <span className="nav-item">
                            <Link to="ViewProducts" className="btn btn-dark">View Product</Link>
                        </span>
                    </div>
                </div>
            </nav>
        )
    }
}