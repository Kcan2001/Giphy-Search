import React from 'react';
import styled from '@emotion/styled'

const Photo = styled.img`
    width: 100%;
    padding: 10px;

    @media (min-width: 629px) {   
        width: 300px;
        padding: 20px
    }
`;

const PhotoGallery = ({alt, src}: {alt: string, src: string}) => {
    return (
        <Photo alt={alt} src={src}/>
    )
};

export default PhotoGallery;