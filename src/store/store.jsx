import {configureStore, combineReducers} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import TestSlice from "./TestSlice.jsx";

const reducers = combineReducers({
    TestSlice : TestSlice.reducer,
});

const persistConfig = {
    key: 'root',
    storage, // 기본 설정 localStorage
    whitelist: ['TestSlice'],
}

const persistedReducers = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducers
})