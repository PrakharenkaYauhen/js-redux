// ComponentModalWindow

import React from 'react';
import PropTypes from 'prop-types';

function ComponentModalWindow({
    modalCalendarVision,
    modalTextariaValue,
    onClickExit,
    onChange,
    currentLocalStorageKey,
    addTask
}) {

    return modalCalendarVision && (<div className='modal__cover'>
        <div className='modal'>
            <h2 className='modal__header'>Please, add a new task</h2>
            <label className='modal__textarea_label'>Your new task:
            <textarea className='modal__textarea'
                    ref={input => input && input.focus()}
                    value={modalTextariaValue}
                    onChange={onChange} >
                </textarea>
            </label>
            <button className='modal__button_enter'
                onClick={(e) => addTask(currentLocalStorageKey, e)} >
                add a new task
        </button>
            <button className='modal__button_exit'
                onClick={onClickExit} >
                x
        </button>
        </div>
    </div>);
}

ComponentModalWindow.propTypes = {
    modalTextariaValue: PropTypes.string,
    modalCalendarVision: PropTypes.bool,
    onClickExit: PropTypes.func,
    onChange: PropTypes.func,
}

export { ComponentModalWindow };