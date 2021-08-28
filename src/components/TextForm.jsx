import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text here");
  const changeBtn = (e) => {
    setText(e.target.value);
  };
  const handleUpBtn = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to uppercase successfully.','primary');
  };
  const handleLoBtn = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowercase successfully.','primary');

  };
  let clearBtn=()=>{
      setText("");
      props.showAlert('Cleared text successfully.','primary');

  }
  let reverseBtn=()=>{
      let newText="";
      for(let i=text.length-1;i>=0;i--){
        newText+=text[i];
      }
      setText(newText);
      props.showAlert('Reversed text successfully.','primary');


  }
  return (
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
      <h3>Analyze your text here</h3>
      <div class="mb-3">
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="7"
          value={text}
          onChange={changeBtn}
          style={{backgroundColor:props.mode==='light'?'white':'#181818',color:props.mode==='light'?'black':'white'}}
        ></textarea>
        <button className="btn btn-primary my-3" onClick={handleUpBtn}>
          Uppercase
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleLoBtn}>
          Lowercase
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={reverseBtn}>
          Reverse
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={clearBtn}>
          Clear
        </button>
        
      </div>
      <div className="row">
          <h4>Text Summary</h4>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>The text above can be read in {0.008*text.split(" ").length} minutes  </p>
          <h5>Text Preview</h5>
          <p>{text.length===0?"Write something in textbox above to preview":text}</p>
      </div>
    </div>
  );
}
