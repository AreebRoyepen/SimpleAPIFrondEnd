import { ADD_PERSON_REQUEST, UPDATE_PERSON_REQUEST, FIND_PERSON_REQUEST, 
    DELETE_PERSON_REQUEST, ALL_PERSON_REQUEST } from "../constants";

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