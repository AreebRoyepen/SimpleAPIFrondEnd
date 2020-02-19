import { ADD_PERSON_REQUEST, UPDATE_PERSON_REQUEST, FIND_PERSON_REQUEST, 
    DELETE_PERSON_REQUEST, ALL_PERSON_REQUEST, FIND_PERSON_BY_NAME_REQUEST, FIND_PERSON_SCREEN, FIND_PERSON_BY_NAME_REQUEST_EDIT } from "../constants";

export const addPerson = (person) => {
    
    console.log("in action",person);
    
    return{
        type: ADD_PERSON_REQUEST,
        payload: person
    }
};

export const findPerson = (person) => {
    
    console.log("in action",person);
    
    return{
        type: FIND_PERSON_REQUEST,
        payload: person
    }
};

export const updatePerson = (person) => {
    
    console.log("in action",person);
    
    return{
        type: UPDATE_PERSON_REQUEST,
        payload: person
    }
};

export const deletePerson = (person) => {
    
    console.log("in action",person);
    
    return{
        type: DELETE_PERSON_REQUEST,
        payload: person
    }
};

export const allPerson = () => {
    
    console.log("in action");
    
    return{
        type: ALL_PERSON_REQUEST,
    }
};

export const findPersonByName = (person) => {
    
    console.log("in action",person);
    
    return{
        type: FIND_PERSON_BY_NAME_REQUEST,
        payload: person
    }
};

export const findP = () => {
    
    console.log("in action find screen");
    
    return{
        type: FIND_PERSON_SCREEN,
    }
};

export const findPersonByNameEdit = (person) => {
    
    console.log("in action",person);
    
    return{
        type: FIND_PERSON_BY_NAME_REQUEST_EDIT,
        payload: person
    }
};

