// stateStore.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { AdminReducer, PropertyReducer, ServiceReducer } from "./reducers";




const rootReducer = combineReducers({
  Admin: AdminReducer,
  Service: ServiceReducer,
  Property: PropertyReducer
});

// Manual persist configuration for specific reducers
const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['Admin', 'Service', 'Property']
   // Specify the reducers you want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//Writing these here to prevent defining the types in every file
export const useAppDispatch = () => useDispatch<AppDispatch>() //This is used to perform action
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector 
// Used to get the data from the store in the component

// persistor 
const persistor = persistStore(store);

export {store, persistor}


