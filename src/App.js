import About from "./components/about";
import Navbar from "./components/navbar";
import TextArea from "./components/textarea";
import { useState } from "react";
import React from "react";
import { BrowserRouter as Router,
Routes,
Route
} from "react-router-dom";

function App() {
  const [myColor,setMyColor]=useState({
    
        
    backgroundColor:'white'

})
  const [modeName,setModeName]=useState('Light Mode')

const toggleStyle=()=>{
  if (myColor.backgroundColor === 'white'){
      setMyColor({
          backgroundColor:"#3e3e59"
      })
      setModeName('Light Mode')
  }
 
    

  else{
      setMyColor({
          backgroundColor:"white"
      })
      setModeName('Dark Mode')
  }
}

  return (
    < >
    <Router>
    <Navbar title="Navbar" about="About us" color={myColor} toggleStyle={toggleStyle} modeName={modeName} />
    <div className="container">
    <Routes>
          <Route path="/" element={<TextArea title="Enter text here" givenText="Type your text here...." />}/>
          <Route path="/about"  element={<About />} />
          
       
    </Routes>
            
      
      
      
      </div>
    </Router>  
    </>
  );
}

export default App;
