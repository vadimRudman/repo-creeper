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
            <h1>Github Repo Creeper</h1>
            <input
                placeholder="Creep on Users/Org :eyes:"
                value={searchInput}
                onChange={handleOnChange}
            />
            <button
                value="Search"
                onClick={() => onSearch(searchInput)}
            />
        </div>
    )
};

export default SearchHeader;
