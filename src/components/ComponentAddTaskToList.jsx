// ComponentAddTaskToList

import React from 'react';
import PropTypes from 'prop-types';

function ComponentAddTaskToList({
    modalCalendarVision,
    todaysTasks,
    donesTasks,
    onToggleModal,
}) {

    return (
        (todaysTasks || donesTasks) ?
            (
                <div className='todo__tasks' hidden></div>
            ) : (
                <div className='todo__tasks'>
                    <div className='modal-button'>
                        <button className='modal-button__button' onClick={(e) => onToggleModal(modalCalendarVision, e)}>add a new task</button>
                    </div>
                </div>
            )
        // <div className='todo__tasks'>
        //     <div className='modal-button'>
        //         <button className='modal-button__button' onClick={(e) => onToggleModal(modalCalendarVision, e)}>add a new task</button>
        //     </div>
        // </div>
    )
}

ComponentAddTaskToList.propTypes = {
    modalCalendarVision: PropTypes.bool,
    onToggleModal: PropTypes.func,
}

export { ComponentAddTaskToList };