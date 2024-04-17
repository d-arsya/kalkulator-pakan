import Main from "./pages/Main";
import Ternak from "./pages/Ternak";
import Bahan from "./pages/Bahan";
import { useState } from "react";

function App() {
  const [halaman, setHalaman] = useState("Main");
  function onLink(e) {
    switch (e.target.innerHTML) {
      case "Home":
        setHalaman("Main");
        break;
      case "Bahan":
        setHalaman("Bahan");
        break;
      case "Ternak":
        setHalaman("Ternak");
        break;
    }
  }
  return (
    <div>
        <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link" aria-current="page" onClick={(e)=>onLink(e)}>Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" onClick={(e)=>onLink(e)}>Bahan</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" onClick={(e)=>onLink(e)}>Ternak</a>
  </li>
</ul>
      {halaman == "Main" && <Main></Main>}
      {halaman == "Bahan" && <Bahan></Bahan>}
      {halaman == "Ternak" && <Ternak></Ternak>}
    </div>
  );
}

export default App;
