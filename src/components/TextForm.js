import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const upperCaseClick = () => {
        // console.log("upperCaseClick");
        let newText = text.toUpperCase();
        // setText(text.toUpperCase());
        setText(newText);
    }
    const lowerCaseClick = () => {
        // console.log("upperCaseClick");
        let newText = text.toLowerCase();
        // setText(text.toUpperCase());
        setText(newText);
    }
    const clearClick = () => {
        setText("");
    }
    const handleOnChnage = (event) => {
        // console.log("handleOnChnage");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className="mt-5 container">
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">{props.textInputTitle}</label>
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChnage} rows="6"></textarea>
                </div>
                <button className="btn btn-primary " onClick={clearClick}>Clear text</button>
                <button className="btn btn-primary ms-3" onClick={lowerCaseClick}>Lower case</button>
                <button className="btn btn-primary ms-3" onClick={upperCaseClick}>Upper case</button>
            
            </div>

            <div className="mt-5 container">
                <h3>
                    Your Text Summary
                </h3>
                <p><b>{(text.trim()).split(" ").length}</b> Words   and <b>{text.length}</b> Characters</p>
                <p>{text.split(".").length-1} Sentences</p>
                <p><b>{0.008 * text.split(" ").length}</b> Minutes Required to Read</p>
            </div>
            
            <div className="container">
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
