import React from "react";
import { Provider } from "react-redux";
import ShoppingContext from "../contexts/ShoppingContext";
import store from "../Redux/store";
import Routing from "./router";



export default function Browser() {
    return (
        <Provider store={ store}>
             <ShoppingContext>
            <Routing/>
        </ShoppingContext>
        </Provider>
       
    )
}

