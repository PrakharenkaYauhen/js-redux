import React from 'react';
import { TaskButtonContainerDelete } from './../containers/TaskButtonContainerDelete.jsx';
import { TaskButtonContainerOk } from './../containers/TaskButtonContainerOk.jsx';
import { TaskButtonContainerCorrect } from './../containers/TaskButtonContainerCorrect.jsx';
import { ContainerActionTaskButton } from './../containers/ContainerActionTaskButton.jsx';
import { ICONS } from './../containers/Icons/ConstantsIcons.js';
// import './TaskVision.css';

// ComponentOneTaskInList

function ComponentOneTaskInList(props) {
    return (
        <li className='todo__tasks__item'>
            <span>{props.task}</span>
            <ContainerActionTaskButton icon={ICONS.CROSS} size={11}/>
            <ContainerActionTaskButton icon={ICONS.CHECKMARK} size={11}/>
            <ContainerActionTaskButton icon={ICONS.PENCIL} size={11}/>
            <TaskButtonContainerDelete
                currentLocalStorageKey={props.currentLocalStorageKey} />
            <TaskButtonContainerOk
                currentLocalStorageKey={props.currentLocalStorageKey} />
            <TaskButtonContainerCorrect
                currentLocalStorageKey={props.currentLocalStorageKey} />
        </li>
    );
}


// function TaskVision(props) {
//     return (
//         <li className='todo__tasks__item'
//             draggable 
//             onDragStart={(e) => props.onDragStart(e)}
//             onDragOver={() => props.onDragOver()}
//             onDragEnd={props.onDragEnd}
//             id={props.id}>
//             <span>{props.task}</span>
//             <TaskButtonContainerDelete
//                 currentLocalStorageKey={props.currentLocalStorageKey}
//                 onReset={(e) => props.onReset(e)} />
//             <TaskButtonContainerOk
//                 currentLocalStorageKey={props.currentLocalStorageKey}
//                 onReset={(e) => props.onReset(e)} />
//             <TaskButtonContainerCorrect
//                 currentLocalStorageKey={props.currentLocalStorageKey}
//                 onReset={(e) => props.onReset(e)} />
//         </li>
//     );
// }

export { ComponentOneTaskInList };