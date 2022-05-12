import React from 'react';
import Searchbar from '../styles/Searchbar.styled';
import {FiSearch} from 'react-icons/fi'
import {IoMdClose} from 'react-icons/io'

const SearchBar = (props) => {
    return (
        <div>
            <Searchbar>
                <FiSearch className='icon search__icon'/>
                <input className='searchbar__input' onChange={props.onSearch} type="text" name="" id=""/>
                <IoMdClose className='icon close__icon'/>
            </Searchbar>
        </div>
    );
}

export default SearchBar;
