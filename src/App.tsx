import React from "react";
import './App.css';
import Login from "./Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from "./Signup";
import Home from "./Home";
import Inventory from "./Page/Inventory";
import Order from "./Page/Order";
import Products from "./Page/Products";
import Transaction from "./Page/Transaction";
import Categories from "./Page/Categories";
import Sidebar from "./Components/Sidebar";
import Dashboardsss from "./Dashboardsss";
import Bar from "./Bar";
import Header from "./Header";
import Orders from "./Orders";


function App() {
       return (
              <BrowserRouter>
                     <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/home" element={<Home />} />
                            
                           
                            <Route path="/dashboard" element={<DashBoard />} />
                            <Route path="/orders" element={<Orders />} />
                           
                     </Routes>


              </BrowserRouter>

              /*  <div>
               
                   <Sidebar>
                       <Routes>
                              <Route path ="/" element={<DashBoard/>}/>
                              <Route path ="/products" element={<Products/>}/>
                              <Route path ="/categories" element={<Categories/>}/>
                              <Route path ="/order" element={<Order/>}/>
                              <Route path ="/transaction" element={<Transaction/>}/>
                              <Route path ="/inventory" element={<Inventory/>}/>
                                                   
                       </Routes>
  
                       </Sidebar>//
               
                </div>*/
       )
}
function DashBoard() {
       return (
           <div>Dasboard</div>
       )
   }
export default App