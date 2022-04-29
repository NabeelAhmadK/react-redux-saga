import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from "redux-saga";
import reducers from "../redux-store/reducers";
import rootSaga from "../redux-store/sagas";
import storage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt';

const persistConfig = {
    transforms: [
        encryptTransform({
            secretKey: 'my-super-secret-key',
            onError: function (error) {
                // Handle the error.
            },
        }),
    ],
    key: 'root',
    storage,
    whitelist: ['user']
}

let composeEnhancers =
    (process.env.NODE_ENV === "development" &&
        typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const sagaMiddleware = createSagaMiddleware();
const middleware = composeEnhancers(applyMiddleware(sagaMiddleware));
const persistedReducer = persistReducer(persistConfig, reducers)
let store = createStore(persistedReducer, middleware);

let persister = persistStore(store)
sagaMiddleware.run(rootSaga);
export { store, persister, sagaMiddleware }