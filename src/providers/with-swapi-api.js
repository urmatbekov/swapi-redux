import React from "react";
import {SwapiConsumer} from "./swapi-api";

const withSwapiApi = (Component) => (...props) => {
    return (
        <SwapiConsumer>
            {
                (swapiApi) => {
                    return <Component swapiApi={swapiApi} {...props}/>
                }
            }
        </SwapiConsumer>
    )
}

export default withSwapiApi;