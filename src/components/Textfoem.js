import React, {useState} from 'react'
export default function Textfoem(props) {
    
    const [text, setText] = useState('Hello!');
    // nfn
    const toUpperCase = () => {
      let newText=text.toUpperCase();
      setText(newText)
    }
    const toLowerCase = () => {
        let newText=text.toLowerCase();
        setText(newText)
    }
    
    const toChange = (event) => {
      setText(event.target.value);
    }
    const copyClipboard = () => {
      navigator.clipboard.writeText(text)
      props.showAlert("Copied to Clipboard!", "success");
    }
    const Clearthe = () => {
      setText("")
    }
    
    return (
        <>
       
        
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                {/* <label htmlFor="exampleFormControlTextarea1" class="form-label"></label> */}
                <textarea className="form-control" value={text} onChange={toChange} id="exampleFormControlTextarea1" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} rows="10"></textarea>
                <button type="button" className="btn btn-primary btn-sm my-3 mx-3" onClick={toUpperCase}>Convert to Upper Case</button>
                <button type="button" className="btn btn-primary btn-sm my-3 mx-3" onClick={toLowerCase}>Convert to Lower Case</button>
                <button type="button" className="btn btn-primary btn-sm my-3 mx-3" onClick={copyClipboard}>Copy to Clipboard</button>
                <button type="button" className="btn btn-primary btn-sm my-3 mx-3" onClick={Clearthe}>Clear the box</button>
            </div>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.length!==0?text.split(' ').length:0} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
            {/* <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                Number of words are  <br />
                Text length is {text.length}
                <p>{text.length>0?text:"Nothing to preview!"}</p>
            </div>  */}
        </>
    )
}