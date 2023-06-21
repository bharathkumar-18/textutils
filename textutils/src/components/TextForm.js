import React, {useState} from 'react'
import Alert from './Alert';

export default function TextForm(props) {
  const handleUpClick = ()=>{
    //console.log("Upper Case button is clicked");
    const str = text.toUpperCase();
    setText(str);
    }

    const handleLowClick = ()=>{
      //console.log("Lower Case button is clicked");
      const str = text.toLowerCase();
      setText(str);
    }

    const handleDownloadClick = ()=>{
      //file object
      if(text===''){
        alert('Write some text in the text-box to download');
    }
    else{
      const alertvar = setTimeout(()=>{
        <Alert/>
      },3000);
      const downloadText = [text];
      const file = new Blob(downloadText, {type:'text/plain'});
      //anchor link
      const element = document.createElement("a");
      element.href = URL.createObjectURL(file);
      element.download = "Text- Download from Textutils" + Date.now() + ".txt";
      element.click();
    }
    }

    const handleClearClick = ()=>{
      setText('');
    }

    const handleOnChange = (event)=>{
      //console.log("Handling On Change");
      setText(event.target.value);
    }
  const [text, setText] = useState('');
  return (
    <>
    <div>
    <div className="container my-3"> 
      <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}} rows="8"></textarea>
      </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
          <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
          <button className="btn btn-primary mx-2" onClick={handleDownloadClick}>Download Text</button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className='container'>
        <h2>Your text summary</h2>
        <p>{text===''?0:text.split(" ").length} words and {text.length} characters</p>
        <p>{text===''?0:0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter some text in the above text box for preview"}</p>
    </div>
    </div>
    </>
  )
}
