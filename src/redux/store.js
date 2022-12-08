import { persistStore, persistReducer } from "redux-persist";

import { legacy_createStore as CreateStore, applyMiddleware } from "redux";
import { compose } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { logger } from "redux-logger";
import { rootReducer } from "./root-reducer";
const middlewares = [];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["workout"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = CreateStore(
  persistedReducer,
  undefined,
  compose(applyMiddleware(...middlewares))
);
export const persistor = persistStore(store);
