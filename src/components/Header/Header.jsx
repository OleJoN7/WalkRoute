import React from 'react';
import Button from '../Button';
import './header.css'

const Header = ({onShowForm}) => {
    return (
        <header className="main-header d-flex justify-content-between align-content-center">
            <h1 className="">Saunter</h1>
            <Button className="btn btn-sm btn-primary" 
            onClick={onShowForm}>Add Path</Button>
        </header>
    )
}

export default Header;