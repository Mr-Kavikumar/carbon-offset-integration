import './App.css';
// import { UploadPage } from "../src/Component/UploadPage"
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SignIn from "./Component/SignIn";
import SignUp from "./Component/SignUp";

function App() {
  return (
    <div className="App">
      <UploadPage/>
       
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Add a catch-all route */}
          <Route path="*" element={<Navigate to="/signin" replace />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
