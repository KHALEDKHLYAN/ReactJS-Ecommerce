import React from "react";

const Footer = (props) => {
    const Footer = {
        backgroundColor : "black",
        padding : "0.5rem",
        margin : "0.5rem",
        fontSize : "0.8rem",
        fontWeight : "bold",
        color : "white",
        textAlign : "center"
    }
    return(
        <>
        <div style={Footer} className="Footer-component">
        <h1>{props.logs}</h1>
        <p>{props.myImage}</p>
        </div>
            
        </>
    )
}
export default Footer;