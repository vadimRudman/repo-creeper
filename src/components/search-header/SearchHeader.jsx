import React, { useState } from 'react';
import './SearchHeader.scss';

const SearchHeader = ({
    onSearch
}) => {
    const [searchInput, setSearchInput] = useState('');

    const handleOnChange = event => {
		setSearchInput(event.target.value);
	};

    return (
        <div className="search-header">
            <h1 className="search-header__title">Github Repo Creeper</h1>
            <div className="search-header__actions-wrapper">
                <input
                    className="search-header__input"
                    placeholder="Creep on Users/Org :eyes:"
                    value={searchInput}
                    onChange={handleOnChange}
                />
                <button
                    className="search-header__button"
                    value="Search"
                    onClick={() => onSearch(searchInput)}
                >
                    Search
                </button>
            </div>
        </div>
    )
};

export default SearchHeader;
