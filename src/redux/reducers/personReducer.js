import { ADD_PERSON_REQUEST, ADD_PERSON_SUCCESS, 
    UPDATE_PERSON_REQUEST, 
    UPDATE_PERSON_SUCCESS, 
    DELETE_PERSON_REQUEST,
    DELETE_PERSON_SUCCESS,
    FIND_PERSON_SUCCESS,
    FIND_PERSON_REQUEST,
    ALL_PERSON_REQUEST,
    ALL_PERSON_SUCCESS} from "../constants";


const initialState = {
    person: {},
    persons: [],
    personCard: {},
    isLoadingCard: false,
    id: null
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
        }
        default:
            return state;
    }
}

export const personCard = state => state.personCard;
export const isLoadingCard = state => state.isLoadingCard;

export default personReducer;