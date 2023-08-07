import './App.css';
import { Profile } from './components/Profile';
// import { Product } from './components/Product';
// import { Cart } from './components/Cart';
import { NavBar } from './components/NavBar';
import { Homepage } from './components/Homepage';
import { ViewProduct } from './components/ViewProduct';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Company from './components/Company';
import Address from './components/Address';
import {Cart} from './components/Cart';
// import NotFound from './components/NotFound404';
// import AddProduct from './components/AddProduct';



function App() {
    return (
        <div className="App">
            <Router>
                <NavBar/>
                <Routes>
                    {/* 1. Homepage */}
                    <Route path='/' element={<Homepage/>}/>

                    {/* 2. Profile */}
                    <Route path='/profile' element={
                       <Profile
                            name="John Doe"
                            username="johndoe"
                            email="john@doe.mail"
                            phone="+12 3456 7890"
                        />
                    }/>
                    
                    {/* 3. Company */}
                    <Route path='/company' element={
                       <Company
                            companyName="Acme Inc."
                            catchPhrase="We make everything"
                            motto="Making the world a better place since 1903"
                        />
                    }/>

                    {/* 4. Address */}
                    <Route path='/address' element={
                       <Address
                            street="123 Main St."
                            suite="Suite 101"
                            city="NY"
                            zipcode="12345"
                        />
                    }/>

                    {/* View product */}
                    <Route path="/viewProduct" element={
                        <ViewProduct
                            name="Test product"
                            cost="123"
                            description="This product is for testing"
                            buys="159"
                            rating="3.5"/>
                    }/>
                    {/* View product */}
                    <Route path="/cart" element={
                        <Cart />
                    }/>

                </Routes>
            </Router>
        </div>
    );  
}

export default App;
