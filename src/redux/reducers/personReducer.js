import { ADD_PERSON_REQUEST, ADD_PERSON_SUCCESS, UPDATE_PERSON_REQUEST, UPDATE_PERSON_SUCCESS } from "../constants";
const initialState = {
    person: {},
    persons: []
};

function personReducer(state = initialState, action){

    switch(action.type){

        case ADD_PERSON_REQUEST:
            return Object.assign({}, state, {
                person: action.payload
            });
        case ADD_PERSON_SUCCESS:
            return Object.assign({},state, {
                persons: state.persons.concat(action.payload)
            });
        case UPDATE_PERSON_REQUEST:
            return Object.assign({}, state, {
                person: action.payload
            });
        case UPDATE_PERSON_SUCCESS:
            return Object.assign({}, state, {
                person: action.payload
            });
        default:
            return state;
    }
}

export default personReducer;