import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

    let buttonName = 'Login'
    const [btnName,setbtnName] = useState(buttonName)

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{if(btnName==="Login")
                    setbtnName("Logout")
                    else
                    setbtnName("Login")}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;