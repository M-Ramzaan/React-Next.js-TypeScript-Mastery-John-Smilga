import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function BookList() {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
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
