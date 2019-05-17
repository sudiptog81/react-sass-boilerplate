import React, { Component } from "react";
import "./Spinner.scss";

class Spinner extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
    }
    render() {
        return (
            <div id="spinner">
                <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="ReactJS" />
                <hr />
                <h1><span id="react">React</span> <span id="sass">Sass</span><br /><span id="boiler">Boilerplate</span></h1>
            </div>
        );
    }
}
export default Spinner;