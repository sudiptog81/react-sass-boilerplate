import React, { Component } from "react";
import Spinner from "./components/Spinner/Spinner";
import "./App.scss";

class App extends Component {
    render() {
        return <Spinner tech1="React" tech2="Sass" />;
    }
}

export default App;