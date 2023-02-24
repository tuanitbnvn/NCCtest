import logo from '../assets/logoNCC_1.png';
import './styles.css';
import React from 'react';
import {data} from '../mockData/index'
export default function Page() {
  
    return (
        
      <div className='containerContent'>
        <div className="logoBox"> 
            <img src={logo} alt="Logo" />
        </div>
        <div className="boxTitle">
            <div className="box">
                <div className="title"> 
                    <span>  Lorem ipsum dolor sit asmet?</span>
                </div>
                <div className="description"> 
                    <span>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</span>
                </div>
            </div>
        </div>
        <div className='containerItem'>
        {data.map(el => (
        <div className="boxItem" key={el.id}>
        <span className='boxItemTitle'>{el.titleItem}</span>
        <div className='boxItemContent'>
            <img src={el.img} className='boxItemImg'/>
            <span className='boxItemDesShort'>  {el.desc1}</span>
        </div>
        <span className='boxItemDes'> {el.desc2}</span>
    </div>
        ))}
        </div>

        
      </div>
    );
  }