import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice.js";
import authSlice from "./features/auth/authSlice.js";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
  // Add other reducers here (if applicable)
});

// const reducer = combineReducers({});

// const persistedReducer=persistReducer(persistConfig,reducer);

export const store = configureStore({
  reducer: rootReducer,
  // devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

//call the refresh token function on every page load
const initializeApp = async () => {
  //   await store.dispatch(
  //     apiSlice.endpoints.refreshToken.initiate({}, { forceRefetch: true })
  //   );
  // await store.dispatch(
  //   apiSlice.endpoints.loadUser.initiate({}, { forceRefetch: true })
  // );
};

initializeApp();
