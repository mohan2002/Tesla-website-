import React, { useEffect } from 'react'
import './Styles/CarHome.css'
import ModelS from '../Images/0x0-ModelS_02.jpg'
import Navigation from '../NavigationPart/Navigation'
import TopHeader from '../NavigationPart/TopHeader'
import AOS from 'aos';
import 'aos/dist/aos.css';
function CarHome({item}) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
      const condition = item.btn2 ? true : false;
    return (
        <div className={condition ? "carcontainer" : "carcontainer2"} style={{"backgroundImage":`url(${item.img})`}}>
            <div className="topcontent">
                
                    <TopHeader/>
                    <div className="navpart"> 
                        <Navigation/>
                    </div>
            </div>
            

            <div className="carcontent">
                <div className="topone" data-aos="fade-down">
                    <li className="model">{item.name}</li>
                    <li className="order">{item.text}<span className="order-ul">{item.touchless}</span></li>
                </div>

                <div className="bottomone" data-aos="fade-up">
                    <button className="custom" >{item.btn1}</button>
                    {
                        item.btn2 && <button className="custom">{item.btn2}</button>
                    }
                </div>

                <div className={condition ? "arrow bounce" : "hide"}>
                    <i class="fas fa-chevron-down"></i>
                </div>
            </div>

        </div>
    )
}

export default CarHome

