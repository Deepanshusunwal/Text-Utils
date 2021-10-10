import React,{useState} from 'react'

export default function TextForms(props) {
    const handleupclick= ()=>{
        // console.log("Uppercase was clicked" + text)
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase", "success ")
    }
    const handleloclick= ()=>{
        // console.log("lowercase was clicked" + text)
        let newText= text.toLowerCase();
        setText(newText)
    }
    const handlelclear= ()=>{
        let newText= '';
        setText(newText)
        props.showAlert("cleared", "success ")
    }

    const handleonchange= (event)=>{
        setText(event.target.value)
    }
    // After using the above function you will find out that you are able to add more text to your textbox

    const [text, setText]= useState('Enter text here');//The text is the state variable, which contains the current state value. 

    return (
        <div className="container" style={{
            color:props.mode==='dark'?'white':'#042743'
        }}>  
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleonchange} style={{
                    backgroundColor:props.mode==='dark'?'grey':'white',
                    color:props.mode==='dark'?'white':'#042743'
                }}id="myBox" rows="8"></textarea>
                {/* Let's pass this value in our textbox and make sure to use the ‘Onchange’ event to enable text-entry in your textbox.  */}
            </div>
            <button className="btn btn-primary mx-1" onClick={handleupclick}>Convert to Uppercase</button> 
            {/* after clicking the above button text will be converted to uppercase letter */}
            <button className="btn btn-primary mx-2" onClick={handleloclick}>Convert to Lowercase</button>
            {/* after clicking the above button text will be converted to lowercase letter */}
            <button className="btn btn-primary mx-2" onClick={handlelclear}>Clear</button>
            
            <div className="container my-3">
                <h1>Your Text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
            </div>
        </div>
    )
}
