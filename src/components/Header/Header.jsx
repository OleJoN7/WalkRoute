import React from 'react';
import Button from '../Button';
import './header.css'

const Header = ({onShowForm}) => {
    return (
        <header>
            <h1>Saunter</h1>
            <Button onClick={onShowForm}>Add Path</Button>
        </header>
    )
}

export default Header;