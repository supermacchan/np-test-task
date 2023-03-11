import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { shippingReducer } from "./shippingSlice";
import { historyReducer } from "./historySlice";
import { officesReducer } from "./officesSlice";

import localStorage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const historyPersistConfig = {
    key: 'history',
    storage: localStorage,
    whitelist: ["history"],
    stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
    shipping: shippingReducer,
    history: historyReducer,
    offices: officesReducer,
})

const persistedReducer = persistReducer(historyPersistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
              },
        })
});

export const persistor = persistStore(store);