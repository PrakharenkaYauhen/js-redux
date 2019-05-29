// ComponentActionTaskButton

import React from 'react';
import PropTypes from 'prop-types';
import Icon from './../containers/Icons/Icon.js';
import { ICONS } from './../containers/Icons/ConstantsIcons.js';

function ComponentActionTaskButton({
    currentLocalStorageKey,
    icon,
    size,
    correctTask,
    deleteTask,
    doneTask
}) {

    let neededFunction = (((icon === ICONS.CROSS) && ((e) => deleteTask(currentLocalStorageKey, e))) ||
        ((icon === ICONS.CHECKMARK) && ((e) => doneTask(currentLocalStorageKey, e))) ||
        ((e) => correctTask(currentLocalStorageKey, e)));

    return (
        <button className='todo__tasks__button'
            onClick={neededFunction}>
            <Icon icon={icon} size={size} />
        </button>
    )
}

ComponentActionTaskButton.propTypes = {
    currentLocalStorageKey: PropTypes.string,
    icon: PropTypes.string,
    size: PropTypes.number,
    deleteTask: PropTypes.func,
    doneTask: PropTypes.func,
    correctTask: PropTypes.func,
}

export { ComponentActionTaskButton };