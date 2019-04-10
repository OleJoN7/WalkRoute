import React, { Component } from 'react';
import Header from '../Header';
import Map from '../Map';
import PathForm from '../PathForm';
import RouteList from '../RouteList';
import RouteItem from '../RouteItem';
import SearchPanel from '../SearchPanel';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pathList:[],
      showForm:false,
      showPathDetail:false
    }
  }
  onShowForm = () => {
    this.setState(({showForm}) => {
      return {
        showForm:!showForm
      }
    })
  }

  nextId = 0;
  onAddPath = (newPath) => {
    let newItem = {
      title:newPath.title,
      shortDescription: newPath.shortDescription,
      fullDescription:newPath.shortDescription,
      pathLength: newPath.pathLength,
      id:this.nextId++
    }
    this.setState(({pathList}) => {
        let addItem = [...pathList,newItem];
        return {
          pathList:addItem
        }
    })
  }
  onPathDetails = (id) => {
    console.log("Path id:",id)
  }
  render() {
    return (
      <div className="App">
        <Header onShowForm={this.onShowForm}/>
        <Map/>
        <RouteList onPathDetails={this.onPathDetails} routes={this.state.pathList}/>
        <RouteItem/>
        <SearchPanel/>
        {
          this.state.showForm 
          ? <PathForm onAddPath={this.onAddPath} showForm={this.onShowForm}/>
          : null
        }
      </div>
    );
  }
}

export default App;
