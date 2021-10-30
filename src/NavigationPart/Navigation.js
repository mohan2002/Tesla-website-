import React, { useEffect, useState } from 'react'
import './Styles/Navigation.css'
import logo from '../Images/logo.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Navigation() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    
    const cars = [
        "Model S",
        "Model 3",
        "Model X",
        "Model Y",
        "Solar Roof",
        "Solar Panels",
    ]

    const sidebarcontents = [
        "Existing Inventory",
        "Used Inventory",
        "Trade-In",
        "Test Drive",
        "Cybertruck",
        "Roadster",
        "Semi",
        "Charging",
        "Powerwall",
        "Commercial Energy",
        "Utilities",
        "Find Us",
        "Support",
        "Investor Relations"        
    ]
    const[open,setopen] = useState(false);

  
    return (
        <div>
            <div className="NavigationContainer">
                <div className="Navcontainer">
                        <div className="logocontainer">
                            <img src={logo} className="logostyle"/>
                        </div>

                        <div className="carscontainer">
                            {
                                cars.map(car => (
                                    <p className="shop">{car}</p>
                                ))
                            }
                        </div>

                        <div className="settingscontainer">
                            <p className="shop sp">Shop</p>
                            <p className="shop sp">Account</p>
                            <p className="shop" onClick={() => (
                                setopen(!open)
                            )}>Menu</p>
                        </div>
                </div>

                
            </div>
            {
                open && 
                <div className="menubar" data-aos="fade-down" data-aos-duration="6000">
                    <div>
                    <div className="cross"  onClick={() => (
                    setopen(!open)
                )}>
                        <i class="fas fa-times"></i>
                    </div>
                    
                    <div className="menuitems">
                        {
                            cars.map(car => (
                                <li className="menucontent">{car}</li>
                            ))
                        }
                        {
                            sidebarcontents.map(sidebarcontent => (
                                <li className="menucontent">{sidebarcontent}</li>
                            ))
                        }
                    </div>
                    </div>
                </div>
                
            }
        </div>
    )
}

export default Navigation
