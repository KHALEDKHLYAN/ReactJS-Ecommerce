import React, { Component } from "react";


const Nav = () => {
    const Nav = {
        float : "right",
        backgroundColor : "black",
        color : "blue",
        alignItems : "center",
    }
    return (
        <nav style={Nav} className="main-nav">
        <ul>
            <li>Home</li>
            <li>Articles</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
        </nav>
    )
}
export default Nav;