import React from 'react';
import Photo from './Photo';

const PhotoGallery = (props: any) => {
    const { images } = props;

    return images.map((item: {imgSrc: string}) => {
            return (
                <Photo key={item.imgSrc} alt={item.imgSrc} src={item.imgSrc}/>
            )
        })
};

export default PhotoGallery;