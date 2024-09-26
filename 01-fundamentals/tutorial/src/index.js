//Import the required things
import React from "react";
import ReactDOM from "react-dom/client";

//First Component in Detail-Topic 01

// Creating our first component

// function Greeting() {
//   return (
//     <div>
//       <h1>My First component</h1>
//     </div>
//   );
// }

// export default Greeting;

//We can also do this via arrow function

// const Greeting = () => {
//   return <h1>My First component</h1>;
// };

// export default Greeting;

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Greeting />);

/*Components rules
- starts with capital letter
- must return JSX (html)
- always close tag <Greeting/>
*/

//There is another way we can create element function
//First Way

// function Greeting() {
//   return React.createElement("h2", {}, "Hello World");
// }

//Second Way

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h2", {}, "Hello World")
//   );
// };

// export default Greeting;

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Greeting />);

//JSX Rules-Topic 02

//We have one parent element in the react component. For examples as following
//1-<div></div>
//2-<section></section>
//3-<React.fragment></React.fragment>
//4-<></>

//Note: Take care of one thing always use parenthesis after return if you don't use it then make sure the opening tag is in front of return means it is in the same line where return is.

// function Greeting() {
//   return (
//     <section>
//       <h3>Hello People</h3>
//       <ul>
//         <li>
//           <a href="#">Hello World</a>
//         </li>
//       </ul>
//       <h2>Hello World</h2>
//     </section>
//   );
// }

// export default Greeting;

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Greeting />);

//We use camelCase names in naming conventions
//We use html tags attributes here as in camelCase naming convention not same as we use in html for example below tags,

/*In jsx we use like below,
return (
  <div tabIndex={1}>
    <button onClick={myFunction}>click me</button>
    <label htmlFor='name'>Name</label>
    <input readOnly={true} id='name' />
  </div>
)
*/

/*
// in html
<div tabindex="1">
    <button onclick="myFunction()">click me</button>
    <label for='name'>Name</label>
    <input readonly id='name' />
</div>
*/

//Nest Components-Topic 03

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}
export default Greeting;

//We make the component separately and then use these components inside the main components.

const Person = () => <h2>Muhammad Ramzan</h2>;
const Message = () => {
  return <p>I am learning React</p>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
