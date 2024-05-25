import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import {getDefaultMiddleware}from '@reduxjs/toolkit'

export const store=configureStore({
    reducer:{
        todos:todoReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck:false}),
})