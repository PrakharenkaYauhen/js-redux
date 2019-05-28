import React from 'react';
import { ICONS } from './Icons/ConstantsIcons.js';
import { TaskButtonVision } from '../components/TaskButtonVision.jsx';

// TaskButtonContainerOk Component

function TaskButtonContainerOk(props) {
    let currentLocalStorageKey = props.currentLocalStorageKey;
    let currentDonesLocalStorageKey = props.currentLocalStorageKey + ' done';

    // let correctClick = (e) => {
    //     let currentlyTaskList = JSON.parse(localStorage.getItem(currentLocalStorageKey)) ?
    //         JSON.parse(localStorage.getItem(currentLocalStorageKey)) : [];
    //     let currentlyDoneTaskList = JSON.parse(localStorage.getItem(currentDonesLocalStorageKey)) ?
    //         JSON.parse(localStorage.getItem(currentDonesLocalStorageKey)) : [];
    //     let currentItem = e.currentTarget.parentElement.firstElementChild;
    //     let currentValue = currentItem.innerHTML;
    //     let currentTasksListsHeader = e.currentTarget.parentElement.parentElement.previousElementSibling.innerHTML;

    //     if (currentTasksListsHeader === "Today's tasks") {
    //         for (let i = 0; i < currentlyTaskList.length; i++) {
    //             if (currentlyTaskList[i] === currentValue) {
    //                 currentlyTaskList.splice(i, 1);
    //             }
    //         }
    //         localStorage.setItem(currentLocalStorageKey, JSON.stringify(currentlyTaskList));
    //         if (currentlyTaskList.length === 0) {
    //             localStorage.removeItem(currentLocalStorageKey);
    //         }

    //         currentlyDoneTaskList.push(currentItem.innerHTML);
    //         localStorage.setItem(currentDonesLocalStorageKey, JSON.stringify(currentlyDoneTaskList));
    //     } else if (currentTasksListsHeader === "Today's done's tasks") {
    //         for (let i = 0; i < currentlyDoneTaskList.length; i++) {
    //             if (currentlyDoneTaskList[i] === currentValue) {
    //                 currentlyDoneTaskList.splice(i, 1);
    //             }
    //         }
    //         localStorage.setItem(currentDonesLocalStorageKey, JSON.stringify(currentlyDoneTaskList));
    //         if (currentlyDoneTaskList.length === 0) {
    //             localStorage.removeItem(currentDonesLocalStorageKey);
    //         }

    //         currentlyTaskList.push(currentItem.innerHTML);
    //         localStorage.setItem(currentLocalStorageKey, JSON.stringify(currentlyTaskList));
    //     }

    //     // reset a modal textarea to forced re-rendering
    //     props.onReset(); // !!!!!!!!!!!!!
    // }





    let correctClick = (e) => {
        let currentlyTaskList = JSON.parse(localStorage.getItem(currentLocalStorageKey)) ?
            JSON.parse(localStorage.getItem(currentLocalStorageKey)) : [];
        let currentlyDoneTaskList = JSON.parse(localStorage.getItem(currentDonesLocalStorageKey)) ?
            JSON.parse(localStorage.getItem(currentDonesLocalStorageKey)) : [];
        let currentItem = e.currentTarget.parentElement.firstElementChild;
        let currentValue = currentItem.innerHTML;
        let currentTasksListsHeader = e.currentTarget.parentElement.parentElement.previousElementSibling.innerHTML;

        let draggedTask = null;

        if (currentTasksListsHeader === "Today's tasks") {
            for (let i = 0; i < currentlyTaskList.length; i++) {
                if (currentlyTaskList[i].content === currentValue) {
                    draggedTask = currentlyTaskList.splice(i, 1);
                    // console.log(draggedTask[0]);
                }
            }
            localStorage.setItem(currentLocalStorageKey, JSON.stringify(currentlyTaskList));
            if (currentlyTaskList.length === 0) {
                localStorage.removeItem(currentLocalStorageKey);
            }

            currentlyDoneTaskList.push(draggedTask[0]);
            // console.log(currentlyDoneTaskList);
            localStorage.setItem(currentDonesLocalStorageKey, JSON.stringify(currentlyDoneTaskList));
        } else if (currentTasksListsHeader === "Today's done's tasks") {
            for (let i = 0; i < currentlyDoneTaskList.length; i++) {
                if (currentlyDoneTaskList[i].content === currentValue) {
                    draggedTask = currentlyDoneTaskList.splice(i, 1);
                }
            }
            localStorage.setItem(currentDonesLocalStorageKey, JSON.stringify(currentlyDoneTaskList));
            if (currentlyDoneTaskList.length === 0) {
                localStorage.removeItem(currentDonesLocalStorageKey);
            }

            currentlyTaskList.push(draggedTask[0]);
            localStorage.setItem(currentLocalStorageKey, JSON.stringify(currentlyTaskList));
        }

        // reset a modal textarea to forced re-rendering
        props.onReset(); // !!!!!!!!!!!!!
    }

    return (
        <TaskButtonVision onClick={correctClick} icon={ICONS.CHECKMARK} size={11} />
    );
}

export { TaskButtonContainerOk };