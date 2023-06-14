import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <h1>The Job Board</h1>

      <div className="jobBoard">
        <div className="edges">
          <div className="edgeOne">
            <h2 className="titleOne">
              Full Time Sales Associate - Sydney Boutique
            </h2>
            <span>CDI - Australie - Sydney</span>
          </div>

          <div className="edgeTwo">
            <h2 className="titleTwo">Agent de sécurité - Pantin</h2>
            <span>CDI - France - Pantin</span>
          </div>

          <div className="edgeThree">
            <h2 className="titleThree">Responsable d'Atelier (H/F)</h2>
            <span>CDD - France - Paris </span>
          </div>
        </div>

        <div className="edgesTwo">
          <div className="edgeFour">
            <h2 className="titleFour">Chef de projets</h2>
            <span>CDD - France - Paris</span>
          </div>

          <div className="edgeFive">
            <h2 className="titleFive">Développeur React.js </h2>
            <span>CDI - France - Paris</span>
          </div>

          <div className="edgeSix">
            <h2 className="titleSix">Sales Associate Stockholm </h2>
            <span>CDI - Suède - Stockholm</span>
          </div>
        </div>
      </div>
      <footer>Made by Henri</footer>
    </>
  );
}

export default App;
