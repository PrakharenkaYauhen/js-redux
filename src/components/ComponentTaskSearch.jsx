// ComponentTaskSearch

import React from 'react';
import PropTypes from 'prop-types';

function ComponentTaskSearch({
  searchInputValue,
  currentlyTaskList,
  itemClick,
  onSearchChange,
  onKeyDown,
}) {
  let currentlyTaskListDOM = [];

  const searchInput = React.createRef();
  const keyButtonEnterNumber = 9;

  function handleTab(e) {
    if (e.keyCode === keyButtonEnterNumber) {
      e.preventDefault();
      searchInput.current.focus();
    }
  }

  if (currentlyTaskList) {
    currentlyTaskListDOM = currentlyTaskList.filter(item => item.content.toLowerCase()
      .includes(searchInputValue.toLowerCase()) && searchInputValue.length !== 0)
      .map((item, i, arr) => {
        if (i === arr.length - 1) {
          return (
            <li
              className="search__item"
              tabIndex={`5${i + 1}`}
              key={item.content}
              onClick={itemClick}
              onKeyUp={onKeyDown}
              onKeyDown={e => handleTab(e)}
            >
              {item.content}
            </li>
          );
        }
        return (
          <li
            className="search__item"
            tabIndex={`5${i + 1}`}
            key={item.content}
            onClick={itemClick}
            onKeyUp={onKeyDown}
          >
            {item.content}
          </li>
        );
      });
  }

  const choiceList = () => (currentlyTaskListDOM.length !== 0) && (
    <div className="search__items">
      <ul className="search__list">
        {currentlyTaskListDOM}
      </ul>
    </div>
  );

  return (
    <div className="search">
      <label htmlFor="search__input" className="search__label">
        <span className="search__span">Enter a serching task:</span>
        <input
          tabIndex="50"
          id="search__input"
          className="search__input"
          type="search"
          value={searchInputValue}
          onChange={onSearchChange}
          ref={searchInput}
        />
        {choiceList()}
      </label>
    </div>
  );
}

ComponentTaskSearch.defaultProps = {
  searchInputValue: '',
};

ComponentTaskSearch.propTypes = {
  searchInputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  currentlyTaskList: PropTypes.instanceOf(Array).isRequired,
  itemClick: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

export default ComponentTaskSearch;
