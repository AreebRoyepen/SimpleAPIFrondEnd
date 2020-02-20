import { fork } from "redux-saga/effects";
import personSaga from "./redux/saga/personSaga";

export default function* rootSaga(){
    yield fork(personSaga)
}