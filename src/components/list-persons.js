import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {connect} from "react-redux";

import {getPersons} from "../actions/actions";
import withSwapiApi from "../providers/with-swapi-api";
import persons from "../reduce/persons";


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const ListPersons = ({persons = [],getPersons,loading}) => {
    const classes = useStyles();

    useEffect(()=>{
        getPersons()
    },[])

    console.log(persons)
    if (loading){
        return <p>Loading</p>
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>№</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Height</TableCell>
                        <TableCell align="right">Mass</TableCell>
                        <TableCell align="right">Birth Year</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {persons.map((row, index) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {index + 1}
                            </TableCell>
                            <TableCell align="right">{row['name']}</TableCell>
                            <TableCell align="right">{row['height']}</TableCell>
                            <TableCell align="right">{row['mass']}</TableCell>
                            <TableCell align="right">{row['birth_year']}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


const mapStateToProps = ({persons: {data, loading, error}}) => {
    return {persons:data,loading,error}
}

const mapDispatchToProps = (dispatch,{swapiApi}) => {
    return {
        getPersons:getPersons(dispatch,swapiApi)
    }
}


export default withSwapiApi(connect(mapStateToProps,mapDispatchToProps)(ListPersons));