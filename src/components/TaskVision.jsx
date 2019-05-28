import React from 'react';
// import { TaskButtonContainerDelete } from './../TaskButtonContainerDelete.jsx';
// import { TaskButtonContainerOk } from './../TaskButtonContainerOk.jsx';
// import { TaskButtonContainerCorrect } from './../TaskButtonContainerCorrect.jsx';
// import './TaskVision.css';

// TaskVision Component

function TaskVision(props) {
    return (
        <li className='todo__tasks__item'>
            <span>{props.task}</span>
            {/* <TaskButtonContainerDelete
                currentLocalStorageKey={props.currentLocalStorageKey}
                onReset={(e) => props.onReset(e)} />
            <TaskButtonContainerOk
                currentLocalStorageKey={props.currentLocalStorageKey}
                onReset={(e) => props.onReset(e)} />
            <TaskButtonContainerCorrect
                currentLocalStorageKey={props.currentLocalStorageKey}
                onReset={(e) => props.onReset(e)} /> */}
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

export { TaskVision };