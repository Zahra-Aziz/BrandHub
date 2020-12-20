import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Search from './Features/Search'
import Login from './Auth/Login'
import SBTRes from './Features/SBTRes'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from "react-router-dom";

ReactDOM.render(
  //<React.StrictMode>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/search" component={Search}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/search/SBTRes" component={SBTRes}/>
    </Switch>
    </BrowserRouter>,
  //</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();