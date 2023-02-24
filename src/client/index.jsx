import React from 'react';
import {App} from "../App";
import ReactDOM from "react-dom/client";

window.addEventListener('load', () => {
    ReactDOM.hydrateRoot(document.getElementById('root'), <App/>)
})
