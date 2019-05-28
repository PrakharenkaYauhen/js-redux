import React from 'react';
import { ICONS } from './Icons/ConstantsIcons.js';
import { TaskButtonVision } from '../components/TaskButtonVision.jsx';

// TaskButtonContainerDelete Component

function TaskButtonContainerDelete(props) {
    let currentLocalStorageKey = props.currentLocalStorageKey;
    let currentDonesLocalStorageKey = props.currentLocalStorageKey + ' done';

    // let correctClick = (e) => {
    //     let currentValue = e.currentTarget.parentElement.firstElementChild.innerHTML;
    //     let tasksRemained = JSON.parse(localStorage.getItem(currentLocalStorageKey));
    //     let tasksDone = JSON.parse(localStorage.getItem(currentDonesLocalStorageKey));

    //     if (tasksRemained) {
    //         for (let i = 0; i < tasksRemained.length; i++) {
    //             if (tasksRemained[i] === currentValue) {
    //                 tasksRemained.splice(i, 1);
    //             }
    //         }
    //         localStorage.setItem(currentLocalStorageKey, JSON.stringify(tasksRemained));
    //         if (tasksRemained.length === 0) {
    //             localStorage.removeItem(currentLocalStorageKey);
    //         }
    //     }

    //     if (tasksDone) {
    //         for (let i = 0; i < tasksDone.length; i++) {
    //             if (tasksDone[i] === currentValue) {
    //                 tasksDone.splice(i, 1);
    //             }
    //         }
    //         localStorage.setItem(currentDonesLocalStorageKey, JSON.stringify(tasksDone));
    //         if (tasksDone.length === 0) {
    //             localStorage.removeItem(currentDonesLocalStorageKey);
    //         }
    //     }

    //      // reset a modal textarea to forced re-rendering
    //      props.onReset(); // !!!!!!!!!!!!!
    // }






    let correctClick = (e) => {
        let currentValue = e.currentTarget.parentElement.firstElementChild.innerHTML;
        let tasksRemained = JSON.parse(localStorage.getItem(currentLocalStorageKey));
        let tasksDone = JSON.parse(localStorage.getItem(currentDonesLocalStorageKey));

        if (tasksRemained) {
            for (let i = 0; i < tasksRemained.length; i++) {
                if (tasksRemained[i].content === currentValue) {
                    tasksRemained.splice(i, 1);
                }
            }
            localStorage.setItem(currentLocalStorageKey, JSON.stringify(tasksRemained));
            if (tasksRemained.length === 0) {
                localStorage.removeItem(currentLocalStorageKey);
            }
        }

        if (tasksDone) {
            for (let i = 0; i < tasksDone.length; i++) {
                if (tasksDone[i].content === currentValue) {
                    tasksDone.splice(i, 1);
                }
            }
            localStorage.setItem(currentDonesLocalStorageKey, JSON.stringify(tasksDone));
            if (tasksDone.length === 0) {
                localStorage.removeItem(currentDonesLocalStorageKey);
            }
        }

         // reset a modal textarea to forced re-rendering
         props.onReset(); // !!!!!!!!!!!!!
    }

    return (
        <TaskButtonVision onClick={correctClick} icon={ICONS.CROSS} size={11} />
    );
}

export { TaskButtonContainerDelete };