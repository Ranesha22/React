// react is the package inside node-modules
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Header from "./components/Header";
import ResturantMenu from "./components/ResturantMenu";
// import Grocery from "./components/Grocery";
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

const Grocery = lazy(() => import("./components/Grocery"))
const About = lazy(() => import("./components/About"))
const AppLayout = () => {
    return (<div className="app">
        <Header />
        {/* if path is / then render body */}
        {/* if path is /about then render about */}
        {/* if path is /contact then render contact */}
        <Outlet />
    </div>)
}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading about...</h1>}><About /></Suspense>
            }, {
                path: "/contact",
                element: <Contact />
            }, {
                path: '/grocery',
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            }
            , {
                path: "/resturant/:resId",
                element: <ResturantMenu />
            },
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<RouterProvider router={appRouter}>
    <AppLayout />
</RouterProvider>
)