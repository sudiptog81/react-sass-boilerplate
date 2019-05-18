import React from "react";
import "./Spinner.scss";

const Spinner = props => {
    return (
        <div className="spinner">
            <img src="img/logo.png" alt="ReactJS" />
            <hr />
            <h1>
                <span id={props.tech1.toLowerCase()}>
                    {props.tech1}
                </span>&nbsp;
                <span id={props.tech2.toLowerCase()}>
                    {props.tech2}
                </span>
                <br />
                <span id="boiler">
                    Boilerplate
                </span>
            </h1>
        </div>
    );
};

export default Spinner;