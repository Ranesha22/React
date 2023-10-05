// react is the package inside node-modules
import React from "react"
import ReactDOM from "react-dom/client";
/**
 * <div id=parent>
 *      <div id=child>
 *          <h1></h1>
 *          <h2></h2>
 *      </div>
 * </div>
 * 
 */


// parent is an object
const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!")

const jsxHeading = <h1 id="heading">Namates React using jsx</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(parent)

const HeadingComponent = () => {
    return <h1>Namaster react using functional comp</h1>
}

// render converts object into html
root.render(<HeadingComponent/> )