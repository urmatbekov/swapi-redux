const fetchPersonsRequested = (persons) => {
    return {
        type: 'FETCH_PERSONS_REQUESTED'
    }
}

const fetchPersonsResponse = (persons) => {
    return {
        type: 'FETCH_PERSONS_RESPONSE',
        payload: persons
    }
}

const fetchPersonsErrors = (errors) => {
    return {
        type: 'FETCH_PERSONS_ERRORS',
        payload: errors
    }
}

const getPersons = (dispatch, swapiApi) => () => {
    dispatch(fetchPersonsRequested())
    swapiApi.getPersons().then((data) => {
        dispatch(fetchPersonsResponse(data))
    }).catch((error) => {
        dispatch(fetchPersonsErrors())
    })
}

export {
    getPersons
}
