import React from "react";
import {Container} from "@material-ui/core";
import {connect} from "react-redux";
import ListPersons from "./list-persons";



const App = ({count,inc,dec}) => {
    return (
        <Container maxWidth={'lg'}>
            <ListPersons/>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {count:state}
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(App);