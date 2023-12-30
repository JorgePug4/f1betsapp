'use client'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { PersistInfo } from '../Models/Member.Types';
import { memberReducer } from './Slices';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { Reducer } from 'redux';


const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    member: memberReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: {
    persist: persistedReducer,

  },
  devTools: process.env.NODE_ENV !== 'production'
});
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>