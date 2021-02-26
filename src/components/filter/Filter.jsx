import React from 'react';
import './Filter.scss';

const Filter = ({
    filterName,
    isSelected,
    handleSelect
}) => {
    return (
        <div
            className={`filter ${isSelected ? "filter--selected" : ""}`}
            onClick={() => handleSelect(filterName)}
        >
            {filterName}
        </div>
    )
};

export default Filter;
