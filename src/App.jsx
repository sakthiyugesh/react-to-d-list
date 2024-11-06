import { useState } from "react";
import "./App.css";
import Homelist from "./pages/Homelist";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <>
      <div className="container-lg position-relative top-50">
        <Homelist />
      </div>
    </>
  );
}

export default App;
