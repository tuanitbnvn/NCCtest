import React from 'react';
import './styles.css'

export default function SideBar() {
    return(
        <nav className="sidebar">
            <div className="menuBar">
                <div className="menu">
                    <ul className="menuLinks">
                        <li className="navLink">
                            <a href="#">
                                <span className="text">Home</span>
                            </a>
                        </li>

                        <li className="navLink">
                            <a href="#">
                                <span className="text">Services</span>
                            </a>
                        </li>

                        <li className="navLink">
                            <a href="#">
                                <span className="text">News</span>
                            </a>
                        </li>

                        <li className="navLink">
                            <a href="#">
                                <span className="text">Blog</span>
                            </a>
                        </li>

                        <li className="navLink">
                            <a href="#">
                                <span className="text">Contact</span>
                            </a>
                        </li>

                    </ul>
                </div>s
            </div>
    </nav>
    )
}