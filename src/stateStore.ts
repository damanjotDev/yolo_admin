// stateStore.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { ClientReviewReducer, IncDecReducer, ServicesReducer, TeamMemberReducer, DevroninsReducer, ProjectsReducer } from "./reducers";



const rootReducer = combineReducers({
  IncDec: IncDecReducer,
  ClientReview: ClientReviewReducer,
  Services: ServicesReducer,
  TeamMember: TeamMemberReducer,
  Devronins: DevroninsReducer,
  Projects: ProjectsReducer
});

// Manual persist configuration for specific reducers
const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['Devronins', 'TeamMember', 'Services']
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


