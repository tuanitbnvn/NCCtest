import React from 'react';
import './styles.css'
import SideBar from './Sidebar';
import Page from '../pages';
import Footer from './Footer';
export default function Layouts() {
    return(
       <div className='container'>
        <div className='boxSidebar'>
            <SideBar />
        </div>
        <div className='boxContent'>
             <div className='boxPage'>
                 <Page/>
            </div>
            <div className='boxFooter'>
                 <Footer />
            </div>
        </div>
       </div>
    )
}