import React from "react";
import {useState} from 'react'
import './App.css'
import Bar from "./Bar";
import Dashboardsss from "./Dashboardsss";
import { BrowserRouter,Route,Routes, useNavigate } from "react-router-dom";
import DashBoard from "./Page/Dashboard";
import Inventory from "./Page/Inventory";
import Order from "./Page/Order";
import Products from "./Page/Products";
import Transaction from "./Page/Transaction";
import Categories from "./Page/Categories";
import Header from "./Header";
import {Menu} from "antd";
import 'antd/dist/antd.css'
import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill
    ,BsListCheck, BsMenuButtonWideFill, BsFillGearFill} from 'react-icons/bs'


function Home(){
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    return(
       <div className="grid-container">
        <Header OpenSidebar={OpenSidebar}/>
        <Bar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <Dashboardsss/>
       </div>
    )

}
export default Home