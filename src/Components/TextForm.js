import React, { useState } from 'react'
import "../App.css"
function TextForm() {
    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const handleUcClick = () => {
        setText(text.toLocaleUpperCase());
    }
    const handleLcClick = () => {
        setText(text.toLocaleLowerCase());
    }
    const handleScClick = () => {
        const newText = text.split(' ');
        for (var i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);

        }
        const str2 = newText.join(" ");
        setText(str2);
    }

    const handleCopyTextClick = () => {
        navigator.clipboard.writeText(text);
        alert("Success! Text Copied.");
    }

    const handleRemoveSpaceClick = () => {
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText)
    }

    const handleClearTextClick = () => {
        setText("");
    }

    const handleExtracNumberClick = () => {
        console.log("hello world");
    }


    const [text, setText] = useState("");

    return (
        <>
            <div className='container my-5'>
                <h3>Enter Your Text Below</h3>
                <div className="mb-3">
                    <div className='summary border-bottom-0'>
                        <div className="btn-group me-2" role="group" aria-label="First group">

                            <button type="button" className="btn btn-danger" onClick={handleClearTextClick}>Clear Text</button>

                            <button type="button" className="btn btn-primary" disabled>Total Words : {text.split(" ").length - 1}</button>
                            <button type="button" className="btn btn-primary" disabled>Total Chracters : {text.length}</button>
                        </div>
                    </div>
                    <textarea className="form-control border border-secondary " onChange={handleOnChange} value={text} id="text" rows="10"></textarea>
                </div>
                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" onClick={handleUcClick} />
                    <label className="btn btn-outline-success" htmlFor="btnradio1">Convert to UpperCase</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" onClick={handleLcClick} />
                    <label className="btn btn-outline-success" htmlFor="btnradio2">Convert to LowerCase</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" onClick={handleScClick} />
                    <label className="btn btn-outline-success" htmlFor="btnradio3">Convert to SentenceCase</label>



                    <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off" onClick={handleExtracNumberClick} />
                    <label className="btn btn-outline-success" htmlFor="btnradio4">Extract Number</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off" onClick={handleRemoveSpaceClick} />
                    <label className="btn btn-outline-success" htmlFor="btnradio4">Remove Spaces</label>



                    <input type="radio" className="btn-check" name="btnradio" id="btnradio5" autoComplete="off" onClick={handleCopyTextClick} />
                    <label className="btn btn-outline-success" htmlFor="btnradio5">Copy to Clipboard</label>
                </div>
            </div>

            <div className='container preview'>
                <h2 className='text-secondary'>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextForm

