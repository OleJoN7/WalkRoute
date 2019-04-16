import React from 'react';
import './routeitem.css';

const RouteItem = (props) => {
    const {title,shortDescription,id,distance,onRouteDetails,favourite} = props;
    let classNames = 'item-title';
    if(favourite) {
        classNames += ' star'
    }
    return (
        <div className="d-flex justify-content-between" 
        style={{cursor:'pointer'}} 
        onClick={() => onRouteDetails(id)}>
            <div className="d-flex" style={{width:"70%"}} >
                <i className="fa fa-arrows-alt align-self-center"></i>
                <div style={{paddingLeft:'15px'}}>
                    <h4 className={classNames}>{title}</h4>
                    <p className="short-description">{shortDescription}</p>
                </div>
            </div>
            <p className="distance-wrap align-self-center arrow"><span className="bold">{distance}</span> km</p>
        </div>
    )
}

export default RouteItem;

