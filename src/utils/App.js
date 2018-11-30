import React, { Component } from 'react';
import './App.less';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainContainer from '../containers/MainContainer/MainContainer';
import NotFoundedComponent from '../components/NotFoundComponent/NotFoundComponent';

class App extends Component {
  render() {
    return (
        <MainContainer />
    );
  }
}

export default App;
