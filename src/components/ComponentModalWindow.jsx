// ComponentModalWindow

import React from 'react';
import PropTypes from 'prop-types';

function ComponentModalWindow({
  modalCalendarVision,
  modalTextariaValue,
  currentLocalStorageKey,
  onClickExit,
  onChange,
  addTask,
}) {
  let textariaInput = React.createRef();

  function handleClick(e) {
    if (e.keyCode === 9) {
      e.preventDefault();
      textariaInput.current.focus();
    }
  }

  return modalCalendarVision && (
    <div className="modal__cover">
      <div className="modal">
        <h2 className="modal__header">Please, add a new task</h2>
        <label className="modal__textarea_label" htmlFor="modal__textarea">
          {'Your new task:'}
          <textarea
            tabIndex="41"
            id="modal__textarea"
            className="modal__textarea"
            ref={textariaInput}
            autoFocus
            value={modalTextariaValue}
            onChange={onChange}
          />
        </label>
        <button
          tabIndex="42"
          type="button"
          className="modal__button_enter"
          onClick={e => addTask(currentLocalStorageKey, modalTextariaValue, textariaInput, e)}
        >
          {'add a new task'}
        </button>
        <button
          tabIndex="43"
          type="button"
          className="modal__button_exit"
          onClick={onClickExit}
          onKeyDown={e => handleClick(e)}
        >
          {'x'}
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
  addTask: PropTypes.func,
};

export default ComponentModalWindow;
