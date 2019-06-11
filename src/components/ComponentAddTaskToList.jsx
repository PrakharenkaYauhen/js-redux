// ComponentAddTaskToList

import React from 'react';
import PropTypes from 'prop-types';

function ComponentAddTaskToList({
  todaysTasks,
  donesTasks,
  onToggleModal,
}) {
  return (todaysTasks || donesTasks)
    ? (
      <div className="todo__tasks" hidden />
    ) : (
      <div className="todo__tasks">
        <div className="modal-button">
          <button
            type="button"
            className="modal-button__button"
            onClick={onToggleModal}
          >
            {'add a new task'}
          </button>
        </div>
      </div>
    );
}

ComponentAddTaskToList.defaultProps = {
  todaysTasks: [],
  donesTasks: [],
};

ComponentAddTaskToList.propTypes = {
  todaysTasks: PropTypes.instanceOf(Array),
  donesTasks: PropTypes.instanceOf(Array),
  // todaysTasks: PropTypes.array,
  // donesTasks: PropTypes.array,
  onToggleModal: PropTypes.func.isRequired,
};

export default ComponentAddTaskToList;
