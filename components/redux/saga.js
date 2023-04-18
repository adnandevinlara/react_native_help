import { takeEvery, put } from 'redux-saga/effects';
import { GET_USER_LIST, SET_USER_LIST } from './constants';
function* getUserList() {
    console.log('saga called');
    const url = "https://dummyjson.com/users";
    // we are using yield bzc it is use to handle asynchronous operation
    // bzc these are generator functions
    let data = yield fetch(url);
    data = yield data.json();
    console.log(data);
    // data consoled successfull, but how to get this data to userList
    // component to display
    // 1) for that declare a constant in contants.js file
    // 2) yield SET_USER_LIST in put method (put method exist in saga)
    yield put(
        {
            type:SET_USER_LIST,
            payload: data
        }
    )

    // 3) now get that data in reducer, Define a new case with
    //    name "SET_USER_LIST"
    // 4) get data from state using useSelector hook from react-redux
    //    in useList component
}
function* SagaData() {
    yield takeEvery(GET_USER_LIST,getUserList);
}
export default SagaData;