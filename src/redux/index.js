import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import articleReducer from './reducers/articleReducer';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const reducer = combineReducers({
  articles: articleReducer,
});

const persistedReducers = persistReducer(rootPersistConfig, reducer);

const composeEnhancers = composeWithDevTools({
  maxAge: 200,
});

const middleware = [thunk];
const store = createStore(persistedReducers, composeEnhancers(
  applyMiddleware(...middleware),
));

const persistor = persistStore(store);

export { store, persistor };
