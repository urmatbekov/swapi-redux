const initialState = {
    loading: true,
    error: null,
    data: []
}

const persons = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PERSONS_REQUESTED': {
            return initialState
        }
        case 'FETCH_PERSONS_RESPONSE': {
            return {
                loading: false,
                error: null,
                data: action.payload
            }
        }
        case 'FETCH_PERSONS_ERRORS': {
            return {
                loading: false,
                error: action.payload,
                data: []
            }
        }
        default:
            return state

    }
}

export default persons;