import React from "react";
import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill
,BsListCheck, BsMenuButtonWideFill, BsFillGearFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

interface BarProps{
    openSidebarToggle:boolean;
    OpenSidebar:() => void;
}
function Bar({openSidebarToggle,OpenSidebar }:BarProps){
    return(
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive":""}>
             <div className="sidebar-title">
                <div className="sidebar-brand">
                    <BsCart3 className='icon_header'/>SHOP
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
             </div>
             <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <Link to="/Orders">
                        <span><BsGrid1X2Fill className='icon'/> DashBoard</span>
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/Orders">
                        <BsFillArchiveFill className='icon'/> Products
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillGrid3X3GapFill className='icon'/> Categories
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsCart3 className='icon'/> Customers
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsPeopleFill className='icon'/> Transaction History
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsListCheck className='icon'/> Inventory
                    </a>
                </li>
                
             </ul>
        </aside>
       
    )
}

export default Bar