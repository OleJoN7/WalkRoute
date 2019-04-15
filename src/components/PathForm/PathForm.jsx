import React from 'react';
import Button from '../Button';
import GoogleMapCreatePath from '../GoogleMapCreatePath';
import './pathform.css';


class PathForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            shortDescription:'',
            fullDescription:'',
            map: null
        }
    }

    onMapChange = (map) => {
        this.setState({map})
    }

    onTitleChange = (e) => {
        this.setState({
            title:e.target.value
        })
    }

    onShortDescChange = (e) => {
        if(e.target.value.length < 160) {
            this.setState({
                shortDescription:e.target.value
            })
        } 
    }

    onFullDescChange = (e) => {
        this.setState({
            fullDescription:e.target.value
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.showForm();
        if(this.state.title === ''
        || this.state.shortDescription === ''
        || this.state.fullDescription === ''
        || this.state.map === null) {
            return false
        }
        this.props.onAddPath(this.state);
        this.setState({
            title:'',
            shortDescription:'',
            fullDescription:'',
            map:null
        })
    }

    render() {
        return (
            <div className="form-wrapper">
                <form className="main-form" onSubmit={this.onSubmitForm}>
                    <input 
                        type="text" 
                        onChange={this.onTitleChange}
                        placeholder="Path Title"
                        value={this.state.title}
                    />
                    <textarea
                        onChange={this.onShortDescChange}
                        placeholder="Short Description"
                        value={this.state.shortDescription}
                    />
                    <textarea 
                        onChange={this.onFullDescChange}
                        placeholder="Full Description"
                        value={this.state.fullDescription}
                    />
                    <p>{this.state.pathLength} Km</p>
                    <Button 
                        className="btn btn-outline-secondary" 
                        type="submit">Add new Path
                    </Button>
                </form>
                <div className="map-wrapper">
                    <GoogleMapCreatePath 
                        onMapChange={this.onMapChange}
                        apiKey="AIzaSyCKXnyg0erUqCbgTge4fOO2vifuPdMQGEg" 
                        libraries={['geometry']} 
                    />
                </div>
            </div>
        )
    }
}

export default PathForm

