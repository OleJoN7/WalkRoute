import React from 'react';
import RouteItem from '../RouteItem';
import SearchPanel from '../SearchPanel';
import RouteItemDetails from '../RouteItemDetails';
import './routelist.css';

const RouteList = ({routes,showPathDetail,...props}) => {
    const sortedRoutes = routes.sort((a,b) => b.favourite - a.favourite)
    return (
        <section className="container-fluid">
            <div className="row">
                <div className="list-wrapper col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <SearchPanel 
                onSearchChange={props.onSearchChange}
                state={props.state}
                />
                    <div className="card">
                        <ul className="list-group list-group-flush">
                            {  
                                sortedRoutes.length > 0
                                ? sortedRoutes.map(item => {
                                    const {title,shortDescription,fullDescription,distance,id,favourite} = item;
                                    return(
                                        <li className="list-group-item" key={id}>
                                        <RouteItem 
                                            onRouteDetails={props.onRouteDetails}
                                            title={title} 
                                            shortDescription={shortDescription}  
                                            id={id}
                                            distance={distance}
                                            fullDescription={fullDescription}
                                            favourite={favourite}  
                                        />
                                        </li>
                                    )
                                })
                                : <p style={{backgroundColor:"#e9ecef",marginBottom:'0',fontSize:"18px"}}>No path yet</p>
                            }
                        </ul>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    {
                        props.pathDetail
                        ? <RouteItemDetails 
                            pathList={props.pathList}
                            pathDetail={props.pathDetail}
                            onRemove={props.onRemove}
                            onFavourite={props.onFavourite}
                            />
                        : null
                    }
                </div>
            </div>
        </section>
    )
}
export default RouteList