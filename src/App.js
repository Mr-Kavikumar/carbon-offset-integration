import './App.css';
import { UploadPage } from "../src/Component/UploadPage"
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SignIn from "./Component/SignIn";
import SignUp from "./Component/SignUp";

function App() {
  return (
    <div className="App">
       <h1>Uploading files in React</h1>
       <input onChange={ (e) => {setFile (e.target.files[0])}}type="file">
       <button onClick={ handleupload }>
        Upload
       </button>
       </input>
    </div>
  );
}

export default App;
