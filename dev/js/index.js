import 'babel-polyfill'; /* makes it compatible with older browser */
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from "redux"; /* starting of making create store */
import allReducers from "./reducers";

const store = createStore(allReducers);

ReactDOM.render(
  <h1>hey now</h1> ,document.getElementById('root')
);
