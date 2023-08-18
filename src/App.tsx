import React from "react";
import "./App.scss";
import { TopNav } from "./components/TopNav";
import { Routes, Route } from "react-router-dom";
import { Screen } from "./components/Screen";

function App() {
  return (
    <>
      <TopNav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Screen />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
