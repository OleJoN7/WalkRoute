import React from 'react';
import Button from '../Button';
import { firestore } from '../../firebase';
import GoogleMapPath from '../GoogleMapPath';
import './routeitemdetails.css';


const RouteItemDetails = ({pathDetail,onFavourite,onRemove,pathList}) => {
    const {title,fullDescription,distance,id,favourite,coordinates} = pathDetail;
    const postRef = firestore.doc(`posts/${id}`)
    const handleFavDb = () => {
        onFavourite(id)
        postRef.update({favourite:!favourite})
    }
    return (
        <div className="d-flex flex-column">
            <header className="d-flex justify-content-between">
                <h3 style={{textTransform:"capitalize"}}>{title}</h3>
                <p><span className="bold">{distance}</span> km</p>
            </header>
            <p>{fullDescription}</p>
            <div style={{position:'relative',width:"100%",height:"300px",marginBottom:'1rem'}}>
                <div className="map-container">
                    <GoogleMapPath  
                        apiKey="AIzaSyCKXnyg0erUqCbgTge4fOO2vifuPdMQGEg" 
                        libraries={['geometry']} 
                        coordinates={coordinates}
                        pathList={pathList}
                        id={id}
                    />
                </div>
            </div>
            <div className="d-flex flex-column align-items-end">
                <div style={{marginBottom:'10px'}}>
                    <Button className="fav-btn" onClick={handleFavDb}>Add to favourite</Button>
                </div>
                <div>
                    <Button className="rem-btn" onClick={() => onRemove(id)}>Remove</Button>
                </div>
            </div>
        </div>
    )
}

export default RouteItemDetails;