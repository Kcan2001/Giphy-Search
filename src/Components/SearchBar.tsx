import React, {useState, useContext} from 'react';
import { Dispatch } from '../Store/store';
import {GET_SEARCH_DATA} from '../Store/actions';
import styled from '@emotion/styled';

const SearchBarStyle = styled.div` 
    width: 100%;
    margin: 30px 0;
`;

const SearchInputStyle = styled.input` 
    padding: 8px 10px;
    width: 50%;
    font-size: 16px;
    font-family: georgia;

    @media (min-width: 629px) {   
        width: 25%;
    }
`;

const SearchButtonStyle = styled.button`
    background:linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
    background-color:#2dabf9;
    display:inline-block;
    border: none;
    cursor:pointer;
    color:#ffffff;
    font-family:georgia;
    font-size:16px;
    padding:10px 23px;
    margin-left: 30px;
    text-decoration:none;
    text-shadow:0px 1px 0px #263666;
    &:hover {
        background:linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);
        background-color:#0688fa;
    }
    &:active {
        position:relative;
        top:1px;
    }
`;

const SearchBar = () => {
    const [value, setValue] = useState('');
    const dispatch = useContext(Dispatch);

    const submitClick = () => {
        if(value) {
            dispatch({type: GET_SEARCH_DATA, payload: value});
        } else {
            return;
        }
    }

    const handleKeyDown = (e: {key: string}) => {
        const regex = RegExp(/^[a-zA-Z\x08\?]$/);

        if (regex.test(e.key)) {
            setValue(
                value + e.key
            )
        } else if (e.key === "Backspace" || e.key === "Delete"){
            setValue(
                value.slice(0, -1)
            )
        } else if (e.key === "Enter"){
            submitClick();
        }
    }

    return (
        <SearchBarStyle>
            <SearchInputStyle type="text" onKeyDown={handleKeyDown} value={value}/>
            <SearchButtonStyle
            onClick={() => submitClick()}>
                Go!
            </SearchButtonStyle>
        </SearchBarStyle>
    )
};

export default SearchBar;