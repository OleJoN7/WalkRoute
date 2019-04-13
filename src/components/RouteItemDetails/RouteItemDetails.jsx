import React from 'react';
import Button from '../Button';
import './routeitemdetails.css';
import { firestore } from '../../firebase';

const RouteItemDetails = ({pathDetail,onFavourite,onRemove}) => {
    const {title,fullDescription,pathLength,id,favourite} = pathDetail;
    const postRef = firestore.doc(`posts/${id}`)
    const handleFavDb = () => {
        onFavourite(id)
        postRef.update({favourite:!favourite})
    }
    return (
        <div>
            <header>
                <h3>{title}</h3>
                <p>{pathLength}</p>
            </header>
            <p>{fullDescription}</p>
            <Button onClick={handleFavDb}>Add to favourite</Button>
            <Button onClick={() => onRemove(id)}>Remove</Button>
        </div>
    )
}

export default RouteItemDetails;