import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const upperCaseClick = () => {
        // console.log("upperCaseClick");
        let newText = text.toUpperCase();
        // setText(text.toUpperCase());
        setText(newText);
        props.showAlert("converted to uppercase" , "success")
    }
    const lowerCaseClick = () => {
        // console.log("upperCaseClick");
        let newText = text.toLowerCase();
        // setText(text.toUpperCase());
        setText(newText);
        props.showAlert("converted to Lowercase" , "success")

    }
    const clearClick = () => {
        setText("");
        props.showAlert("Text cleared" , "success")

    }
    const handleOnChnage = (event) => {
        // console.log("handleOnChnage");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className="mt-5 container" style={{color : props.mode==='dark' ? 'white' :'#0c264c'}}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">{props.textInputTitle}</label>
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChnage} style={{backgroundColor : props.mode==='dark' ? 'grey' :'white' , color : props.mode==='dark' ? 'white' :'black'}} rows="6"></textarea>
                </div>
                <button className="btn btn-primary " onClick={clearClick}>Clear text</button>
                <button className="btn btn-primary ms-3" onClick={lowerCaseClick}>Lower case</button>
                <button className="btn btn-primary ms-3" onClick={upperCaseClick}>Upper case</button>
            
            </div>

            <div className="mt-5 container" style={{color : props.mode==='dark' ? 'white' :'#0c264c'}}>
                <h3>
                    Your Text Summary
                </h3>
                <p><b>{(text.trim()).split(" ").length}</b> Words   and <b>{text.length}</b> Characters</p>
                <p>{text.split(".").length-1} Sentences</p>
                <p><b>{0.008 * text.split(" ").length}</b> Minutes Required to Read</p>
            </div>
            
            <div className="container" style={{color : props.mode==='dark' ? 'white' :'#0c264c'}}>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
    textInputTitle: PropTypes.string.isRequired,
}
TextForm.defaultProps = {
    heading: "Enter the text to analyse",
    textInputTitle: "Place your text",
}
