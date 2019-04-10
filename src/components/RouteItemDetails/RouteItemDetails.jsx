import React from 'react';
import Button from '../Button';
import Map from '../Map'
import './routeitemdetails.css';

const RouteItemDetails = ({pathDetail,onFavourite,onRemove}) => {
    const {title,fullDescription,pathLength,id} = pathDetail
    return (
        <div>
            <header>
                <h3>{title}</h3>
                <p>{pathLength}</p>
            </header>
            <p>{fullDescription}</p>
            <Map/>
            <Button onClick={() => onFavourite(id)}>Add to favourite</Button>
            <Button onClick={() => onRemove(id)}>Remove</Button>
        </div>
    )
}

export default RouteItemDetails;