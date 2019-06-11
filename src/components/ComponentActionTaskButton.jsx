// ComponentActionTaskButton

import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../containers/Icons/Icon';
import { ICONS } from '../Icons/ConstantsIcons';

function ComponentActionTaskButton({
  currentLocalStorageKey,
  icon,
  size,
  correctTask,
  deleteTask,
  doneTask,
}) {
  const neededFunction = (
    ((icon === ICONS.CROSS) && (e => deleteTask(currentLocalStorageKey, e)))
    || ((icon === ICONS.CHECKMARK) && (e => doneTask(currentLocalStorageKey, e)))
    || (e => correctTask(currentLocalStorageKey, e))
  );

  return (
    <button
      className="todo__tasks__button"
      type="button"
      onClick={neededFunction}
    >
      <Icon icon={icon} size={size} />
    </button>
  );
}

ComponentActionTaskButton.propTypes = {
  currentLocalStorageKey: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  deleteTask: PropTypes.func.isRequired,
  doneTask: PropTypes.func.isRequired,
  correctTask: PropTypes.func.isRequired,
};

export default ComponentActionTaskButton;
