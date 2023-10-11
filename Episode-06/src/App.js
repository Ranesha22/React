// react is the package inside node-modules
import React from "react"
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

/**
 * components
 * header
 * - logo
 * - nav items
 * body
 * - search 
 * - card/Resturant container
 *      - resturant card
 *      - img
 *      - name of res, start rating, eta
 * - resturant card
 * footer 
 * - copyright
 * -links
 * - contact/address
 */

// not using keys <<<<< index as keys <<<< unique id as keys


const AppLayout = () => {
    return (<div className="app">
        <Header />
        <Body />
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<AppLayout />)