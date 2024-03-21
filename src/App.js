import './App.css';
import { UploadPage } from "../src/Component/UploadPage"
import React from "react";

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Add a catch-all route */}
          <Route path="*" element={<Navigate to="/signin" replace />} />

          <Route path="/uploadpage" element={<UploadPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
