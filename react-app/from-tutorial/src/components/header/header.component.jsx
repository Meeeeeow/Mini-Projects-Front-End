import React from "react";
import './header.styles.css';
import logo from '../../images/logo.svg';
import reactLogo from '../../images/react.svg';
export const Header = () =>(
    <div className="container react" id="header">
       <div className="icons">
            <img src={reactLogo} alt="react icon" className="logo" />
                <div className="text-right">
                    <img src={logo} alt="react logos" className="react-logo" />
                    <strong>React</strong>
                </div>
       </div>
       
        
    </div>
    
)
