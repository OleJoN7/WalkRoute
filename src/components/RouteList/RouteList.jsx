import React from 'react';
import './routelist.css';
import RouteItem from '../RouteItem';

const RouteList = ({routes,...props}) => {
    return (
        <ul>
            {   
                routes.length < 1 ? 
                <p>No path yet</p>
                :
                routes.map(item => {
                    const {title,shortDescription,fullDescription,pathLength,id} = item;
                    return(
                        <li key={id}>
                           <RouteItem 
                                onPathDetails={props.onPathDetails}
                                title={title} 
                                shortDescription={shortDescription} 
                                fullDescription={fullDescription}  
                                id={id}
                                pathLength={pathLength}
                           />
                        </li>
                    )
                })
            }
        </ul>
    )
}
export default RouteList