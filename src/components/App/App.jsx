import React, { Component } from 'react';
import Header from '../Header';
import PathForm from '../PathForm';
import RouteList from '../RouteList';
import RouteItemDetails from '../RouteItemDetails';
import {firestore} from '../../firebase';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pathList:[],
      showForm:false,
      sort:false,
      pathDetail:null,
      search:''
    }
  }

  componentDidMount = async () => {
    const snapshot = await firestore.collection("posts").get();
    const posts = snapshot.docs.map(doc => {
      return {id:doc.id,...doc.data()}
    })
    this.setState({
      pathList:posts  
    })
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

  onAddPath = async (newPath) => {
    const coordinates = newPath.map.markers.map(obj => {
      return {
        lat:obj.lat(),
        lng:obj.lng()
      }
    })
    let newItem = {
      title:newPath.title,
      shortDescription: newPath.shortDescription,
      fullDescription:newPath.fullDescription,
      favourite:false,
      coordinates,
      distance:newPath.map.distance
    }
    const documentLocationInDb = await firestore.collection('posts').add(newItem);
    const doc = await documentLocationInDb.get();
    const newPost =  {id:doc.id,...doc.data()}
    this.setState(({pathList}) => {
        let addItem = [...pathList,newPost];
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

  onRemove = async (id) => {
    await firestore.doc(`posts/${id}`).delete()
    const filtered = this.state.pathList.filter(item => item.id !== id)
      this.setState({
        pathList:filtered,
        pathDetail:null
      })
  }

  onFavourite = (id) => {
    this.setState(({pathList,sort}) => {
      pathList.filter(item => {
        if(item.id === id) {
          return Object.assign(item,{ 
            favourite:!item.favourite
          })
        } else {
          return false
        } 
      })
      return {
        sort:!sort
      }
    })
  }

  render() {
    const {pathList,showForm,search,pathDetail} = this.state;
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
              pathList={pathList}
              pathDetail={pathDetail}
              onRemove={this.onRemove}
              onFavourite={this.onFavourite}
            />
          : null
        }
        {
          showForm 
          ? <PathForm 
              onAddPath={this.onAddPath} 
              showForm={this.onShowForm}
              whichMap={this.state.showForm}
            />
          : null
        }
      </div>
    );
  }
}

export default App;
