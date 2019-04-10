import React, { Component } from 'react';
import Header from '../Header';
import PathForm from '../PathForm';
import RouteList from '../RouteList';
import RouteItemDetails from '../RouteItemDetails';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pathList:[],
      showForm:false,
      pathDetail:null,
      search:''
    }
  }

  onSearchChange = (e) => {
    this.setState({
      search:e.target.value.trim()
    })
  }

  searchItems(items,search) {
    if(search.length === '') {
        return items
    }
    return items.filter(item => {
      const titleChecked = item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      const descriptionChecked = item.fullDescription.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      return titleChecked || descriptionChecked
    })
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
      fullDescription:newPath.fullDescription,
      pathLength: newPath.pathLength,
      favourite:false,
      id:this.nextId++
    }
    this.setState(({pathList}) => {
        let addItem = [...pathList,newItem];
        return {
          pathList:addItem
        }
    })
  }

  onRouteDetails = (id) => {
    const routeDetails = this.state.pathList.filter(item => {
      return item.id === id
    })
    this.setState({
      pathDetail:routeDetails[0]
    })
  }

  onRemove = (id) => {
    const filtered = this.state.pathList.filter(item => item.id !== id)
      this.setState({
        pathList:filtered,
        pathDetail:null
      })
  }

  onFavourite = (id) => {
    this.setState(({pathList}) => {
      return pathList.filter(item => {
        if(item.id === id) {
          return Object.assign(item,{ 
            favourite:!item.favourite
          })
        } else {
          return false
        } 
      })
    },() => console.log(this.state.pathList))
  }
  
  render() {
    const {pathList,showForm,search,pathDetail} = this.state
    const serchedItems = this.searchItems(pathList,search)
    return (
      <div className="App">
        <Header onShowForm={this.onShowForm}/>
        <RouteList 
          onSearchChange={this.onSearchChange}
          state={search}
          onRouteDetails={this.onRouteDetails} 
          routes={serchedItems}
        />
        {
          pathDetail
          ? <RouteItemDetails 
              pathDetail={pathDetail}
              onRemove={this.onRemove}
              onFavourite={this.onFavourite}
            />
          : null
        }
        {
          showForm 
          ? <PathForm onAddPath={this.onAddPath} showForm={this.onShowForm}/>
          : null
        }
      </div>
    );
  }
}

export default App;
