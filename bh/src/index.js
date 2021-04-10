import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Search from './Features/Search'
import MAM from './Features/MAM';
import Login from './Auth/Login'
import SBTRes from './Features/SBTRes'
import SBIRes from './Features/SBIRes'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from "react-router-dom";

ReactDOM.render(
  //<React.StrictMode>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/search" component={Search}/>
      <Route exact path="/MAM" component={MAM}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/search/SBTRes" component={SBTRes}/>
      <Route exact path="/search/SBIRes" component={SBIRes}/>
    </Switch>
    </BrowserRouter>,
  //</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
