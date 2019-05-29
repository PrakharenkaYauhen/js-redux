// ComponentAddTaskToList

import React from 'react';
import PropTypes from 'prop-types';

function ComponentAddTaskToList({
    todaysTasks,
    donesTasks,
    onToggleModal,
}) {

    return (todaysTasks || donesTasks) ?
        (
            <div className='todo__tasks' hidden></div>
        ) : (
            <div className='todo__tasks'>
                <div className='modal-button'>
                    <button
                        className='modal-button__button'
                        onClick={onToggleModal}
                    >
                        add a new task
                    </button>
                </div>
            </div>
        )
}

ComponentAddTaskToList.propTypes = {
    todaysTasks: PropTypes.array,
    donesTasks: PropTypes.array,
    onToggleModal: PropTypes.func,
}

export { ComponentAddTaskToList };