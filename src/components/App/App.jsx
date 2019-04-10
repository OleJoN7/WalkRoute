import React, { Component } from 'react';
import Header from '../Header';
import Map from '../Map';
import PathForm from '../PathForm';
import RouteList from '../RouteList';
import RouteItem from '../RouteItem';
import SearchPanel from '../SearchPanel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Test</h1>
        <Header/>
        <Map/>
        <PathForm/>
        <RouteList/>
        <RouteItem/>
        <SearchPanel/>
      </div>
    );
  }
}

export default App;
