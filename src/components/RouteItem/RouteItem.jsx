import React from 'react';
import './routeitem.css'

const RouteItem = ({title,shortDescription,fullDescription,id,pathLength,onPathDetails}) => {
    return (
        <div>
            <div onClick={() => onPathDetails(id)}>
                <h3>{title}</h3>
                <p>{shortDescription}</p>
            </div>
            <div>{pathLength}</div>
        </div>
    )
}

export default RouteItem;