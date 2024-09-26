import React from "react";
import ReactDOM from "react-dom/client";

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/71wyLqCorxL._AC_UL600_SR600,400_.jpg"
    alt="Truths"
  />
);
const Title = () => <h2>Truths</h2>;
const Author = () => {
  return <h4>Vivek Ramaswamy</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
