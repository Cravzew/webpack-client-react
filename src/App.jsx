import React from 'react';
import {hot} from "react-hot-loader/root"
import Header from "./shared/Header";

function Application() {

    return (
        <>
            <Header text="Hello World SSR!"/>
        </>
    );
}

export const App = hot(Application)