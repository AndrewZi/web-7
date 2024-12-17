import React, { useState } from "react";
import ReactDOMClient from "react-dom/client";
import "./main.css"

import Open1 from "./1_hello";
import Open2 from "./2_query";
import Open3 from "./3_count";

function App() {
  const [currentComponent, setCurrentComponent] = useState(null);

  const renderComponent = () => {
    switch (currentComponent) {
      case 'open_1':
        return <Open1 />;
      case 'open_2':
        return <Open2 />;
      case 'open_3':
        return <Open3 />;
      default:
        return null;
    }
  };

  return (
    <div>
      <header className="base_container">
        <button className="style" onClick={() => setCurrentComponent('open_1')}>1_hello</button>
        <button className="style" onClick={() => setCurrentComponent('open_2')}>2_query</button>
        <button className="style" onClick={() => setCurrentComponent('open_3')}>3_count</button>
      </header>
      <div id="mode">{renderComponent()}</div>
    </div>
  );
}

const app = ReactDOMClient.createRoot(document.getElementById("root"));

app.render(<App/>)