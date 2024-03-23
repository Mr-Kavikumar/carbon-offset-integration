import './App.css';
import { UploadPage } from "../src/Component/UploadPage"
import React from "react";
import Dashboard from './Component/DashBoard';
import { BrowserRouter  , Route , Routes , Navigate } from 'react-router-dom';
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';
import Communication from './Component/CommunicationPage';
import Chart from './Component/ChartPage';
import Document from './Component/DocumentPage'

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Add a catch-all route */}
          <Route path="*" element={<Navigate to="/signin" replace />} />
          <Route path="/DashBoard" element={<Dashboard/>} />
          <Route path="/uploadpage" element={<UploadPage />} />
          <Route path="/Communication" element={<Communication />} />
          <Route path="/Chart" element={<Chart />} />
          <Route path="/Document" element={<Document />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
