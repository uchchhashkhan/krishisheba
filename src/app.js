import React from 'react';
import './App.css';
import {AiOutlinePicture} from 'react-icons/ai';

function App(){

const uploadImage = (files) => {
    console.log(files[0])
}
 return(
 <div>
    <div>
        <div className="App">
             <h1 className="header">কৃষিসেবা</h1>
         </div> 
    </div>
    <div>
    <div className="motto">
    কৃষকের সেবাই আমাদের অঙ্গিকার 
    </div>
    </div>
     <div className="image">
       <div className='icon'><AiOutlinePicture/></div>
    <input
        type="file" 
        className='choose'
        onChange={(e) => {uploadImage(e.target.files)
    }
}
/>
</div>
<div className='button'>
    <button className ="upload" onClick={uploadImage}> Upload  </button>
 </div>
 </div>


 )

}
export default App;
