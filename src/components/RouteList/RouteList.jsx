import React from 'react';
import './routelist.css';
import RouteItem from '../RouteItem';
import SearchPanel from '../SearchPanel';

const RouteList = ({routes,showPathDetail,...props}) => {
    const sortedRoutes = routes.sort((a,b) => b.favourite - a.favourite)
    return (
        <React.Fragment>
            <SearchPanel 
              onSearchChange={props.onSearchChange}
              state={props.state}
            />
            <ul>
                {   
                    sortedRoutes.length > 0
                    ? sortedRoutes.map(item => {
                        const {title,shortDescription,fullDescription,pathLength,id} = item;
                        return(
                            <li key={id}>
                            <RouteItem 
                                onRouteDetails={props.onRouteDetails}
                                title={title} 
                                shortDescription={shortDescription}  
                                id={id}
                                pathLength={pathLength}
                                fullDescription={fullDescription}  
                            />
                            </li>
                        )
                    })
                    : <p>No path yet</p>
                }
            </ul>
        </React.Fragment>
    )
}
export default RouteList