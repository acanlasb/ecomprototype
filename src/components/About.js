import React from "react";

const About = () => {
    return (
        <div className="about"
            style={{
                display: "inline-block",
                justifyContent: "left",
                alignItems: "left",
                textAlign: "left",
                font: "monospace",
                height: "auto",
                width: "auto",
                fontSize: "10",
                marginLeft: "0.5cm",
                boxSizing: "border-box",
            }}>
            <h1>About</h1>
            <p>Developed by Angel Canlas Balandra for demonstration purposes
            </p>
            <h1>Subject Code</h1>
            <p>CLA 321</p>
            <h1>Subject Name</h1>
            <p>Cloud Architecture</p>
            <h2>Assessment Number 3</h2>
            <h2>Group members</h2>
            <p>Angel CB, Izabela D, Edgar T</p>
        </div >
    );
};

export default About;
