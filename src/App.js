import React from "react";
import Styles from "styled-components";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./Pages/Home";
import Sidebar from "./Pages/Sidebar";
import Header from "./Pages/Header";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <AppBody>
          <Sidebar />
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </AppBody>
      </>
    </BrowserRouter>
  );
}

export default App;

const AppBody = Styles.div`
      display: flex;
       height: 100vh;
`;
