import React from "react";
import ReactDOM from 'react-dom'
import App from "./components/app";
import {Provider} from "react-redux";
import {SwapiProvider} from "./providers/swapi-api";
import store from "./store";
import ServiceApi from "./service";

const swapiApi = new ServiceApi()

ReactDOM.render(
    <SwapiProvider value={swapiApi}>
        <Provider store={store}>
            <App/>
        </Provider>
    </SwapiProvider>
    , document.getElementById('root'))








