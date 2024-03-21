import './App.css';
// import { UploadPage } from "../src/Component/UploadPage"
import React from "react";

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
