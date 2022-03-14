import React, { useState, useEffect } from "react";
import "./App.css";
import getGifs from "./services/GetGifs";
import Gif from "./components/Gif";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    console.log("render");
    getGifs({ keyword: "programming" }).then((gifs) => setGifs(gifs));
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        <div>
          {gifs.map(({ title, id, url }) => (
            <Gif title={title} key={id} url={url} id={id}></Gif>
          ))}
        </div>
      </section>
      <button
        onClick={() => {
          // setGifs(GIFS_ALTERNATIVE);
          console.log("swap GIFS");
        }}
      >
        Swap GIFS
      </button>
      <footer>
        <div>
          Created Following :
          <a href="https://www.youtube.com/watch?v=QBLbXgeXMU8&list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC&index=2&ab_channel=midudev">
            📽
          </a>
          To continue... from minute 54:46
        </div>
      </footer>
    </div>
  );
}

export default App;
