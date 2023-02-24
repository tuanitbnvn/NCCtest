import React from 'react';
import './styles.css'

export default function SideBar() {
    return(
        <nav className="sidebar ">
        <div className="menu-bar">
            <div className="menu">
                <ul className="menu-links">
                    <li className="nav-link">
                        <a href="#">
                            {/* <i className='bx bx-home-alt icon' ></i> */}
                            <span className="text nav-text">Home</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            {/* <i className='bx bx-bar-chart-alt-2 icon' ></i> */}
                            <span className="text nav-text">Services</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            {/* <i className='bx bx-bell icon'></i> */}
                            <span className="text nav-text">News</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            {/* <i className='bx bx-pie-chart-alt icon' ></i> */}
                            <span className="text nav-text">Blog</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            {/* <i className='bx bx-wallet icon' ></i> */}
                            <span className="text nav-text">Contacts</span>
                        </a>
                    </li>

                </ul>
            </div>

   
        </div>

    </nav>
    )
}