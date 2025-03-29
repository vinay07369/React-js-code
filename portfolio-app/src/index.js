import React from "react";
import ReactDOM from "react-dom";
import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";


ReactDOM.render(
<Router>
    <Routes>
        <Route path="/" element = {<App/>}/>
    </Routes>
</Router>,
    document.getElementById('root')
);