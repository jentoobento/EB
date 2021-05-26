import React from 'react';
import Root from './src/index';
import { persistor, store } from './src/redux/index';

export default function App() {
  return <Root store={store} persistor={persistor} />;
}
