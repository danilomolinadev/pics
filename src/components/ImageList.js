
import './ImageList.css';
import React from "react";
import ImageCard from './ImageCard';


const ImageList = (props) => {

    //console.log(props.images);

    /**  Longer way
   const images = props.images.map( (image) => {
        //this return image from APP search into the API and return the value
        // THI RETURN A WARNING BECAUSE i AM NOT USING A KEY
        return <img key={image.id}  src={image.urls.regular} alt={image.description} />;
     
    })
*/

/** cleaver way to do this, very nice and short chapter 101 
const images = props.images.map( ({description, id, urls}) => {
    return <img key={id}  src={urls.regular} alt={description} />;
})
*/

const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />
})

/** to work with the ImageCARD */
    return(
        <div className='image-list'>{images}</div>
    )
}

export default ImageList;