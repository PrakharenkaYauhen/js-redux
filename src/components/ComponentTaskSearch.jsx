// ComponentTaskSearch

import React from 'react';
import PropTypes from 'prop-types';

function ComponentTaskSearch({
    searchInputValue,
    currentlyTaskList,
    itemClick,
    onSearchChange,
}) {

    let currentlyTaskListDOM = [];

    if (currentlyTaskList) {
        currentlyTaskListDOM = currentlyTaskList.filter(item =>
            item.content.toLowerCase().indexOf(searchInputValue.toLowerCase()) !== -1 && searchInputValue.length !== 0)
            .map((item, i) =>
                <li className='search__item' key={i} onClick={itemClick}>{item.content}</li>)
    }

    let choiceList = () => {
        return (currentlyTaskListDOM.length !== 0) && (
            <div className='search__items'>
                <ul className='search__list'>
                    {currentlyTaskListDOM}
                </ul>
            </div>
        )
    }

    return (
        <div className='search'>
            <label className='search__label'>
                <span className='search__span'>Enter a serching task:</span>
                <input className='search__input'
                    type="search"
                    value={searchInputValue}
                    onChange={onSearchChange}
                />
                {choiceList()}
            </label>
        </div>
    )
}

ComponentTaskSearch.propTypes = {
    searchInputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    currentlyTaskList: PropTypes.array,
    itemClick: PropTypes.func,
    onSearchChange: PropTypes.func,
}

export { ComponentTaskSearch };