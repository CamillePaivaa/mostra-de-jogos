import React, { useState } from "react";
import "./App.css";
import RoutesApp from "./routes/Routes";
import { CabecalhoContextProvider } from "./contexts/CabecalhoContext";

function App() {
  return (
    <div className="App">
      <CabecalhoContextProvider>
        <RoutesApp />
      </CabecalhoContextProvider>
    </div>
  );
}

export default App;
