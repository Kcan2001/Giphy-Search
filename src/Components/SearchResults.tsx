import React, {useContext} from 'react';
import { GlobalState } from '../Store/store';
import PhotoGallery from './PhotoGallery';
import styled from '@emotion/styled'

const PhotoGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 0px;

    @media (min-width: 629px) {   
        padding: 20px
    }
`;

const displayLoading = () => {
    return (<div>
                loading...
            </div>)
} 

const displayFailure = () => {
    return (<div>
        Oops! Something went wrong... Please try your search again!
    </div>)
}

const displayContent = (data: any) => {
    if (!data) {
        return null 
    };

    const getImages = data.map((item: {images: {original: {webp: string}}}): {imgSrc: any} => {
        return {imgSrc: item.images.original.webp};
    });

    if (getImages.length === 0 ) {
        return displayFailure();
    } else {
        return (
        <PhotoGrid>
            <PhotoGallery images={getImages} />
        </PhotoGrid>
        )
    }
}

const SearchResults = () => {
    const {data, loading, failure} = useContext(GlobalState);

    return (
        <React.Fragment>  
            {failure ? displayFailure() : null}
            {loading ? displayLoading() : displayContent(data)}
        </React.Fragment>
    )
};

export default SearchResults;