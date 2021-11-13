import React from 'react';
import './App.css';
import {AiFillPicture} from 'react-icons/ai';
import {AiOutlineCloudUpload} from 'react-icons/ai';

function App(){


const uploadImage = (files) => {
    console.log(files[0])
}
 return(
 <div>
    <div>
        <div className="App">
             <h1>কৃষিসেবা</h1>
         </div> 
    </div>
         <div className="motto">
         কৃষকের সেবাই আমাদের অঙ্গিকার
      </div>
    <input
        type="file" 
        className='icon'
        id ="upload"
        className="ghost"
        onChange={(e) => {uploadImage(e.target.files)
    }
}
/>
<div className="blue">
    <label for="upload"> <div className="border">
         <div className='icon'><AiFillPicture/></div>
        </div>
    </label>
 <div className="upload">
    <button> <AiOutlineCloudUpload/> Upload </button>
 </div>

</div>
</div>

 )

}
export default App;