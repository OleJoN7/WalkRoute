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
            map: {
                distance:''
            }
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
        || this.state.map.distance === '') {
            return false
        }
        this.props.onAddPath(this.state);
        this.setState({
            title:'',
            shortDescription:'',
            fullDescription:''
        })
    }

    render() {
        return (
            <section className="form-wrapper">
            <div className="close-btn-wrapper">
                <Button className="close-btn" onClick={this.props.showForm}>
                    <i className="fa fa-window-close"></i>
                </Button>
            </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <form className="main-form d-flex flex-column" onSubmit={this.onSubmitForm}>
                                <input 
                                    className="form-control" 
                                    type="text" 
                                    onChange={this.onTitleChange}
                                    placeholder="Path Title"
                                    value={this.state.title}
                                />
                                <textarea
                                    style={{resize:'none'}}
                                    className="form-control textarea-input" 
                                    onChange={this.onShortDescChange}
                                    placeholder="Short Description"
                                    value={this.state.shortDescription}
                                />
                                <textarea
                                    style={{resize:'none'}}
                                    className="form-control textarea-input"  
                                    onChange={this.onFullDescChange}
                                    placeholder="Full Description"
                                    value={this.state.fullDescription}
                                />
                                <p className="distance-addpath">Route length is: {this.state.map.distance} km</p>
                                <div style={{textAlign:'center'}}>
                                    <Button 
                                        className="btn btn-outline-primary" 
                                        type="submit">Add new Path
                                    </Button>
                                </div>
                            </form>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="map-wrapper">
                                <GoogleMapCreatePath 
                                    onMapChange={this.onMapChange}
                                    apiKey="AIzaSyCKXnyg0erUqCbgTge4fOO2vifuPdMQGEg" 
                                    libraries={['geometry']} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default PathForm

