import React, { useState, useEffect, useRef } from 'react';

//Image
import searchIcon from '../../images/search-icon.svg';

//Styles
import { Wrapper, Content } from './SearchBar.styles';


const SearchBar = ({ setSearchTerm }) => {
    const [state, setstate] = useState('');
    const initial = useRef(true);

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }
        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500)

        return () => clearTimeout(timer);
    }, [setSearchTerm, state])
    let searchHandler = (event) => {
        setstate(event.target.value);
    }
    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search-icon" />
                <input
                    type='text'
                    placeholder='Search Movies'
                    onChange={searchHandler}
                    value={state}
                />
            </Content>
        </Wrapper>
    )
}
export default SearchBar;