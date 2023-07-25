import React from 'react'
import { useState } from 'react'

export default function TextArea(props) {
   
    const handelClickUp=()=>{
        console.log("clicked");
        let newText=text.toUpperCase();
        setText(newText);
    }
    const onChangeHandler=(event)=>{
        console.log("changed")
        setText(event.target.value)
    }
    const handelClickLo=()=>{
        console.log("clicked");
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handelCapital=()=>{
      
        const arr=text.split(" ")
        const newText=arr.map((s)=>
            s[0].toUpperCase()+ s.slice(1).toLowerCase()
        );
        const newString=newText.join(" ")
        console.log(newString)
        setText(newString)
        
        

    }
    // const checkList = ["Apple", "Banana", "Tea", "Coffee"];

    const [text, setText] = useState("");

    return (
        <div>
        
    
    
        <h2 >{props.title} </h2>
            <div className="form-group">
               
                <div className='mb-3'>
                <textarea className="form-control" value={text} onChange={onChangeHandler} placeholder='Type your text here...' id="exampleFormControlTextarea1"  rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handelClickUp} >Change UpperCase </button>
                
                <button className='btn btn-primary mx-2' onClick={handelClickLo} >Change UpperCase </button>

                <button className='btn btn-primary mx-2' onClick={handelCapital} >Capitalize </button>
                
            </div>
            <div>
                <p> Number of letter is {text.length} </p>
                {text.length===0?(
                    <p> Number of words is 0 </p>
                ):(
                    <p> Number of words is {text.split(" ").length} </p>
                ) }
                    

            </div>
            


            {/* <div className="checkList">
                <div className="title">Your CheckList:</div>
                <div className="list-container">
                {checkList.map((item, index) => (
                    <div key={index}>
                    <input value={item} type="checkbox" />
                    <span>{item}</span>
                    </div>
                ))}
                </div>
            </div> */}

            
           

        </div>
    )
}
