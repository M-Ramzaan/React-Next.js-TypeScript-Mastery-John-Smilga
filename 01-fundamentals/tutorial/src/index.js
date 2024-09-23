//Import the required things
import React from "react";
import ReactDOM from "react-dom/client";

// Creating our first component

function Greeting() {
  return <h1>My First component</h1>;
}

export default Greeting;

//We can also do this via arrow function

// const Greetings = ()=>{
//     return(
//         <h1>My First component</h1>
//     )
// }

// export default Greetings

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);

/*Components rules
- starts with capital letter
- must return JSX (html)
- always close tag <Greeting/>
*/
