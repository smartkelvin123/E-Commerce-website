import React, { useState, useEffect } from "react";
import Category from "./component/Category";

function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResults(data);
      });
  }, []);

  const renderCategory = () => {
    return results.map((result) => {
      return <Category key={result.id} title={result.title} />;
    });
  };

  // using for loop rather than a map function
  // const renderCategory = () => {
  //   const categories = [];
  //   for (let i = 0; i < results.length; i++) {
  //     categories.push(<Category key={results.id} title={results[i].title} />);
  //   }
  //   return categories;
  // };

  return (
    <>
      <header>My Store</header>
      <section>
        <nav>
          <ul>{results && renderCategory()}</ul>
        </nav>
        <article>Main Area</article>
      </section>
      <footer>
        <p>footer</p>
      </footer>
    </>
  );
}

export default App;
