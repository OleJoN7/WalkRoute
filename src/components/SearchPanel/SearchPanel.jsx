import React from 'react';
import './searchpanel.css' 

const SearchPanel = ({state,onSearchChange}) => {
    return (
        <div className="search-wrapper">
            <input 
                className="form-control"
                value={state}
                type='text' 
                placeholder='Search...' 
                name='search'
                onChange={onSearchChange}
            />
            <div className="search-icon-wrapper">
                <i className="fa fa-search"></i>
            </div>
        </div>
    )
}

export default SearchPanel;