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
        <div>
            <header>
                <h3>{title}</h3>
                <p>{distance}</p>
            </header>
            <p>{fullDescription}</p>
            <Button onClick={handleFavDb}>Add to favourite</Button>
            <Button onClick={() => onRemove(id)}>Remove</Button>
            <GoogleMapPath  
                apiKey="AIzaSyCKXnyg0erUqCbgTge4fOO2vifuPdMQGEg" 
                libraries={['geometry']} 
                coordinates={coordinates}
                pathList={pathList}
                id={id}
            />
        </div>
    )
}

export default RouteItemDetails;