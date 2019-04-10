import React from 'react';
import './searchpanel.css' 

const SearchPanel = ({state,onSearchChange}) => {
    return (
        <input 
            value={state}
            type='text' 
            placeholder='search' 
            name='search'
            onChange={onSearchChange}
        />
    )
}

export default SearchPanel;