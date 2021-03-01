import React, { useState } from 'react';
import './FilterOptions.scss';
import Filter from '../filter/Filter';
import { ALPHABETICAL, STARS } from '../../constants/filters';

const FilterOptions = ({
    onSort
}) => {
    const [selectedFilterName, setSelectedFilterName] = useState(ALPHABETICAL);
    const filterList = [ALPHABETICAL, STARS];

    const handleSelect = sortType => {
        setSelectedFilterName(sortType);
        onSort(sortType);
    }
    const renderFilters = filterName => (
        <Filter
            filterName={filterName}
            isSelected={selectedFilterName === filterName}
            handleSelect={handleSelect}
        />
    );
    return (
        <div className={"filter-options"}>
            <span className={"filter-options__title"}>Sort By</span>
            <div className={"filter-options__container"}>
                {filterList.map(renderFilters)}
            </div>
        </div>
    )
};

export default FilterOptions;
