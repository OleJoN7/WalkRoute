import React from 'react';
import './routeitem.css';

const RouteItem = (props) => {
    const {title,shortDescription,fullDescription,id,distance,onRouteDetails} = props;
    return (
        <div>
            <div onClick={() => onRouteDetails(id)}>
                <h3>{title}</h3>
                <p>{shortDescription}</p>
                <p>{fullDescription}</p>
            </div>
            <div>{distance} Km</div>
        </div>
    )
}

export default RouteItem;