// ComponentModalWindow

import React from 'react';
import PropTypes from 'prop-types';

function ComponentModalWindow({
    modalCalendarVision,
    modalTextariaValue,
    currentLocalStorageKey,
    onClickExit,
    onChange,
    addTask
}) {

    return modalCalendarVision && (
        <div className='modal__cover'>
            <div className='modal'>
                <h2 className='modal__header'>Please, add a new task</h2>
                <label className='modal__textarea_label'>Your new task:
                    <textarea
                        className='modal__textarea'
                        ref={input => input && input.focus()}
                        value={modalTextariaValue}
                        onChange={onChange} >
                    </textarea>
                </label>
                <button
                    className='modal__button_enter'
                    onClick={(e) => addTask(currentLocalStorageKey, modalTextariaValue, e)} >
                    add a new task
                </button>
                <button
                    className='modal__button_exit'
                    onClick={onClickExit} >
                    x
                </button>
            </div>
        </div>);
}

ComponentModalWindow.propTypes = {
    modalTextariaValue: PropTypes.string,
    modalCalendarVision: PropTypes.bool,
    currentLocalStorageKey: PropTypes.string,
    onClickExit: PropTypes.func,
    onChange: PropTypes.func,
    addTask: PropTypes.func
}

export { ComponentModalWindow };