import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

// saga setup
import createSagaMiddleware from "redux-saga"
import SagaData from "./saga";
const sagaMiddleware  = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
});
sagaMiddleware.run(SagaData);
export default store;
//  next go to index.js wrap store with provider