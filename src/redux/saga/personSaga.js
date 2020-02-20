import { put, takeEvery, call } from "redux-saga/effects";
import { ADD_PERSON_REQUEST, ADD_PERSON_SUCCESS, UPDATE_PERSON_SUCCESS, 
   FIND_PERSON_SUCCESS, DELETE_PERSON_SUCCESS, UPDATE_PERSON_REQUEST, 
   DELETE_PERSON_REQUEST, FIND_PERSON_REQUEST, ALL_PERSON_REQUEST, 
   ALL_PERSON_SUCCESS,FIND_PERSON_BY_NAME_REQUEST, FIND_PERSON_BY_NAME_SUCCESS, 
   LOGIN_REQUEST, LOGIN_SUCCESS,
   FIND_PERSON_BY_NAME_REQUEST_EDIT,
   FIND_PERSON_BY_NAME_SUCCESS_EDIT } from "../constants";

function* login(action){

   var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    
    var options = {
      method: 'POST',
      headers: myHeaders,
      body: action.payload,
    };

    const data = yield fetch('/authenticate', options)
     .then(response => response.json())
     .then((result)  => 
      {
         localStorage.setItem('token', "Bearer " + result.token);
       console.log(localStorage.getItem("token"))
     })
     .catch(error => console.log('error', error));

   yield put({
      type: LOGIN_SUCCESS,
      payload: data
   });


}

function* add(options){

     return fetch('/person', options)
     .then(response => response.json())
     .then(result => console.log(result))
     .catch(error => console.log('error', error));
}

function* addPersonSaga(action){

   var myHeaders = new Headers();
   myHeaders.append("Authorization", localStorage.getItem("token") );
   myHeaders.append("Content-Type", "application/json");

   var options = {
     method: "POST",
     headers: myHeaders,
     body: action.payload
   };
   const data = yield call(add, options);

    yield put({
                type: ADD_PERSON_SUCCESS,
                payload: data
             });
}

function* get(id){

   var myHeaders = new Headers();
   myHeaders.append("Authorization", localStorage.getItem("token") );
   myHeaders.append("Content-Type", "application/json");
  
   var options = {
     method: "GET",
     headers: myHeaders,
   };

   return fetch('/person/' + id, options)
   .then(response => response.json())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));
}

function* getPersonSaga(action){

 const data = yield call(get, action.payload);

  yield put({
              type: FIND_PERSON_SUCCESS,
              data
           });
}

function update(options){

   var myHeaders = new Headers();
   myHeaders.append("Authorization", localStorage.getItem("token") );
   myHeaders.append("Content-Type", "application/json");

   console.log(options.data);



   return fetch('/person/'+options.id, {method: "PUT", headers: myHeaders, body: JSON.stringify(options.data)})
   .then(response => response.json())
   .then(result => result)
   .catch(error => console.log('error', error));
}

function* updatePersonSaga(action){ 

   console.log(action.payload);

 const data = yield call(update, action.payload);

 console.log(data);

  yield put({
              type: UPDATE_PERSON_SUCCESS,
              payload: data
           });
}

function* deleteP(id){

   var myHeaders = new Headers();
   myHeaders.append("Authorization", localStorage.getItem("token") );
   myHeaders.append("Content-Type", "application/json");
  
   var options = {
     method: "DELETE",
     headers: myHeaders,
   };

   return fetch('/person/'+id, options)
   .then(response => response.json())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));
}

function* deletePersonSaga(action){

 const data = yield call(deleteP, action.payload);

  yield put({
              type: DELETE_PERSON_SUCCESS,
              data
           });
}

function* allPersonSaga(){

   var myHeaders = new Headers();
   myHeaders.append("Authorization", localStorage.getItem("token") );
   myHeaders.append("Content-Type", "application/json");
  
   var options = {
     method: "GET",
     headers: myHeaders,
   };
 //const data = yield  call(all, options);
 const data = yield fetch('/person',options)
 .then(response => response.json())
 .then(r => r)
 .catch(error => console.log('error', error));
 
 yield console.log("data " ,data);

  yield put({
              type: ALL_PERSON_SUCCESS,
              payload: data
           });
}

function findPersonByName (name){
   var myHeaders = new Headers();
   myHeaders.append("Authorization", localStorage.getItem("token") );
   myHeaders.append("Content-Type", "application/json");
  
   var options = {
     method: "GET",
     headers: myHeaders,
   };

   return fetch('/personbyname/' + name, options)
   .then(response => response.json())
   .then(result => result)
   .catch(error => console.log('error', error));
}

function* findPersonByNameSaga(action){

   const data = yield call(findPersonByName, action.payload);   

   yield put({
      type: FIND_PERSON_BY_NAME_SUCCESS,
      payload: data
   });

}

function* findPersonByNameEditSaga(action){

   const data = yield call(findPersonByName, action.payload);   

   yield put({
      type: FIND_PERSON_BY_NAME_SUCCESS_EDIT,
      payload: data
   });

}

export default function* personSaga(){    
   yield takeEvery(ADD_PERSON_REQUEST, addPersonSaga);
   yield takeEvery(UPDATE_PERSON_REQUEST, updatePersonSaga);
   yield takeEvery(DELETE_PERSON_REQUEST, deletePersonSaga );
   yield takeEvery(FIND_PERSON_REQUEST, getPersonSaga);
   yield takeEvery(ALL_PERSON_REQUEST, allPersonSaga);
   yield takeEvery(FIND_PERSON_BY_NAME_REQUEST, findPersonByNameSaga);
   yield takeEvery(LOGIN_REQUEST, login);
   yield takeEvery(FIND_PERSON_BY_NAME_REQUEST_EDIT, findPersonByNameEditSaga);

   

}
