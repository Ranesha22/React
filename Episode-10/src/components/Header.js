import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    let buttonName = 'Login'
    const [btnName, setbtnName] = useState(buttonName)

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between mb-2 bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status : {onlineStatus ? '✅':'🔴'}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link></li>
                    <li className="px-4">
                        <Link to="/contact">Contact us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>    
                    <li className="px-4">Cart</li>
                    <button className="login" onClick={() => {
                        if (btnName === "Login")
                            setbtnName("Logout")
                        else
                            setbtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;