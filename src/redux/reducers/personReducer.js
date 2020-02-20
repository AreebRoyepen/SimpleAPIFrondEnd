import { ADD_PERSON_REQUEST, ADD_PERSON_SUCCESS, 
    UPDATE_PERSON_REQUEST, 
    UPDATE_PERSON_SUCCESS, 
    DELETE_PERSON_REQUEST,
    DELETE_PERSON_SUCCESS,
    FIND_PERSON_SUCCESS,
    FIND_PERSON_REQUEST,
    ALL_PERSON_REQUEST,
    ALL_PERSON_SUCCESS,
    FIND_PERSON_BY_NAME_REQUEST,
    FIND_PERSON_BY_NAME_SUCCESS,
    FIND_PERSON_SCREEN,
    FIND_PERSON_BY_NAME_REQUEST_EDIT,
    FIND_PERSON_BY_NAME_SUCCESS_EDIT,
    LOGIN_REQUEST,
    LOGIN_SUCCESS} from "../constants";
import { act } from "react-dom/test-utils";


const initialState = {
    person: {},
    login: {},
    persons: [],
    personCard: {},
    isLoadingCard: false,
    isLoadingFind: false,
    isLoadingEdit: false,
    edit: false,
    id: null,
    idForEdit: null
};

function personReducer(state = initialState, action){

    console.log( "in reducer: " , JSON.stringify(action));
    

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

        console.log(action.payload)
            return Object.assign({}, state, {
                
                person: action.payload
            });
        case UPDATE_PERSON_SUCCESS:
            return Object.assign({}, state, {
                person: action.payload
            });

        case DELETE_PERSON_REQUEST:
        return Object.assign({}, state, {
            id: action.payload
        });
        case DELETE_PERSON_SUCCESS:
        return Object.assign({}, state, {
            person: action.payload
        });

        case FIND_PERSON_REQUEST:
        return Object.assign({}, state, {
            person: action.payload
        });
        case FIND_PERSON_SUCCESS:
        return Object.assign({}, state, {
            person: action.payload
        });

        case ALL_PERSON_REQUEST:
        return Object.assign({}, state, {
            isLoadingCard: true
        });
        case ALL_PERSON_SUCCESS:
        return {
            ...state,
            isLoadingCard: false,
            persons: action.payload
        };
        case FIND_PERSON_BY_NAME_REQUEST:
        return Object.assign({}, state, {
            person: action.payload,
        });
        case FIND_PERSON_BY_NAME_SUCCESS:
        return Object.assign({}, state, {
            persons: action.payload,
            isLoadingFind: false

        });
        case FIND_PERSON_SCREEN:
        return Object.assign({}, state, {
            person: action.payload,
            isLoadingFind: true
        });
        case FIND_PERSON_BY_NAME_REQUEST_EDIT:
            return Object.assign({}, state, {
                person: action.payload,
                isLoadingEdit: false
            });
        case FIND_PERSON_BY_NAME_SUCCESS_EDIT:
            return Object.assign({}, state, {
                person: action.payload,
                isLoadingEdit: true,
                idForEdit: action.payload[0].id

        });
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                login: action.payload,
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                login: action.payload,
            });
        default:
            return state;
    }
}

export const personCard = state => state.personCard;
export const isLoadingFind = state => state.isLoadingFind;

export default personReducer;