import React,{ReactNode} from "react";
import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill
    ,BsListCheck, BsMenuButtonWideFill, BsFillGearFill} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa';
import { NavLink} from "react-router-dom";

interface MenuItem{
    path:string;
    name:string;
    icon:ReactNode;
}
interface SidebarProps{
    children:ReactNode;
}
const Sidebar = ({children}:SidebarProps) =>{
    const menuItem: MenuItem[] = [
        {
            path: "/",
            name: "dashboard",
            icon:<BsCart3/>
        },
        {
            path: "/",
            name: "products",
            icon:<BsFillArchiveFill/>
        },
        {
            path: "/",
            name: "categories",
            icon:<BsFillGrid3X3GapFill/>
        },
        {
            path: "/",
            name: "order",
            icon:<BsCart3/>
        },
        {
            path: "/",
            name: "transaction",
            icon:<BsPeopleFill/>
        },
        {
            path: "/",
            name: "inventory",
            icon:<BsListCheck/>
        }
    ]
    return (
        <div className="container">
            <div className="sidebar">
                <div className="top_section">
                    <h1 className="logo">Menu</h1>
                    <div className="bars">
                        <FaBars/>
                    </div>
                </div>
                {
                    menuItem.map((item, index) =>(
                        <NavLink to={item.path} key={index} className="link">
                            <div className="icon">{item.icon}</div>
                            <div className="lick_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    )
}

export default Sidebar