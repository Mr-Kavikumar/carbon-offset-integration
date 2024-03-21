import './App.css';
import { UploadPage } from "../src/Component/UploadPage"
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SignIn from "./Component/SignIn";
import SignUp from "./Component/SignUp";

function App() {
  return (
    <div className="App">
      <UploadPage/>
    </div>
  );
}

export default App;
