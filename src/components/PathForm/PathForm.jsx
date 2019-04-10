import React from 'react';
import Button from '../Button';

import './pathform.css';

class PathForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            shortDescription:'',
            fullDescription:'',
            pathLength:null
        }
    }
    onTitleChange = (e) => {
        this.setState({
            title:e.target.value
        },() => {
            console.log(this.state.title)
        })
    }
    onShortDescChange = (e) => {
        this.setState({
            shortDescription:e.target.value
        },() => {
            console.log(this.state.shortDescription)
        })
    }
    onFullDescChange = (e) => {
        this.setState({
            fullDescription:e.target.value
        },() => {
            console.log(this.state.fullDescription)
        })
    }
    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.showForm();
        if(this.state.title === ''
        || this.state.shortDescription === ''
        || this.state.fullDescription === '') {
            console.log("Type descriptions")
            return false
        }
        this.props.onAddPath(this.state);
        this.setState({
            title:'',
            shortDescription:'',
            fullDescription:''
        })
        console.log("form submitted")
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
            </div>
        )
    }
}

export default PathForm

