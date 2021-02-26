import React from 'react';
import './Filter.scss';

const Filter = ({
    filterName,
    isSelected
}) => {
    return (
        <div className={`filter ${isSelected ? "filter--selected" : ""}`}>
            {filterName}
        </div>
    )
};

export default Filter;
