import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer)
const app = <Provider store={store}> <App /></Provider>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    app
);

