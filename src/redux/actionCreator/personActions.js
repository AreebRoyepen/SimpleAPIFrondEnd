import { ADD_PERSON_REQUEST, UPDATE_PERSON_REQUEST, FIND_PERSON_REQUEST, 
    DELETE_PERSON_REQUEST, ALL_PERSON_REQUEST, FIND_PERSON_BY_NAME_REQUEST, 
    FIND_PERSON_SCREEN, FIND_PERSON_BY_NAME_REQUEST_EDIT, LOGIN_REQUEST } from "../constants";


export const login = (person) => {
    
    return{
        type: LOGIN_REQUEST,
        payload: person
    }
};

export const addPerson = (person) => {
        
    return{
        type: ADD_PERSON_REQUEST,
        payload: person
    }
};

export const findPerson = (person) => {
        
    return{
        type: FIND_PERSON_REQUEST,
        payload: person
    }
};

export const updatePerson = (person) => {

    console.log("Update person action: " , person);
        
    return{
        type: UPDATE_PERSON_REQUEST,
        payload: person
    }
};

export const deletePerson = (person) => {
        
    return{
        type: DELETE_PERSON_REQUEST,
        payload: person
    }
};

export const allPerson = () => {
        
    return{
        type: ALL_PERSON_REQUEST,
    }
};

export const findPersonByName = (person) => {
        
    return{
        type: FIND_PERSON_BY_NAME_REQUEST,
        payload: person
    }
};

export const findP = () => {
        
    return{
        type: FIND_PERSON_SCREEN,
    }
};

export const findPersonByNameEdit = (person) => {
        
    console.log("person in actions: ", person);
    return{
        type: FIND_PERSON_BY_NAME_REQUEST_EDIT,
        payload: person
    }
};

