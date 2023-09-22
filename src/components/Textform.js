import React, {useState} from 'react'

export default function Textform(props) {
    const handleClick =() =>{
        console.log("Button Clicked");
        let newText=Text.toUpperCase();

        setText(newText) 
    }

    const handleClicklower =() =>{
        let newText1= Text.toLowerCase();
        setText(newText1) 

    }
    const handleChange =(event) =>{
        console.log("Change Clicked");
        setText(event.target.value)
    }
  const [Text, setText]=useState('');
  return (
    <><div className='container'>
          <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label"><h1>{props.heading}</h1></label>
              <textarea className="form-control" id="exampleFormControlTextarea1" value={Text} onChange={handleChange} rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleClick}> Convert to UpperCase</button>
          <button className="btn btn-primary mx-2" onClick={handleClicklower}> Convert to LowerCase</button>
      </div><div className="container my-3">
        

              <h1>'Word Summary' </h1>
              <p> {Text.split(" ").length} words and {Text.length} Characters</p>
          </div></>
  )
}
