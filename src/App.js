import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [ file , setFile] = useState(null);

  function handleupload(){
      if(!file){
        console.log("no file selected");
        return ;
      }
      const fd = new FormData();
      fd.append('file' , file);
  }

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
