// ComponentOneTaskInList

import React from 'react';
import { ContainerActionTaskButton } from './../containers/ContainerActionTaskButton.jsx';
import { ICONS } from './../containers/Icons/ConstantsIcons.js';

function ComponentOneTaskInList(props) {
    return (
        <li className='todo__tasks__item'>
            <span>{props.task}</span>
            <ContainerActionTaskButton icon={ICONS.CROSS} size={11}/>
            <ContainerActionTaskButton icon={ICONS.CHECKMARK} size={11}/>
            <ContainerActionTaskButton icon={ICONS.PENCIL} size={11}/>
        </li>
    );
}

export { ComponentOneTaskInList };