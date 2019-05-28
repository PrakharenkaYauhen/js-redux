import React from 'react';
import { ICONS } from './Icons/ConstantsIcons.js';
import { TaskButtonVision } from '../components/TaskButtonVision.jsx';

// TaskButtonContainerCorrect Component

function TaskButtonContainerCorrect(props) {
    // let correctClick = (e) => {
    //     let currentValue = e.currentTarget.parentElement.firstElementChild.innerHTML;
    //     e.currentTarget.parentElement.firstElementChild.innerHTML = `<input type="text" class="item-input" value="${currentValue}">`;
    //     let itemInput = document.querySelector('.item-input');
    //     itemInput.focus();
    //     itemInput.selectionStart = itemInput.value.length;
    //     itemInput.onblur = () => {
    //         itemInput.parentElement.innerHTML = itemInput.value;
    //         let tasksRemained = JSON.parse(localStorage.getItem(props.currentLocalStorageKey));
    //         if (tasksRemained) {
    //             for (let i = 0; i < tasksRemained.length; i++) {
    //                 if (tasksRemained[i] === currentValue) {
    //                     tasksRemained[i] = itemInput.value;
    //                 }
    //             }
    //             localStorage.setItem(props.currentLocalStorageKey, JSON.stringify(tasksRemained));
    //         }

    //         let tasksDone = JSON.parse(localStorage.getItem(props.currentLocalStorageKey + ' done'));
    //         if (tasksDone) {
    //             for (let i = 0; i < tasksDone.length; i++) {
    //                 if (tasksDone[i] === currentValue) {
    //                     tasksDone[i] = itemInput.value;
    //                 }
    //             }
    //             localStorage.setItem(props.currentLocalStorageKey + ' done', JSON.stringify(tasksDone));
    //         }
    //     }
    //     // itemInput.onkeydown = (e) => {
    //     //     console.log(e.keyCode);
    //     //     if (e.keyCode === 13) {
    //     //         console.log(itemInput.parentElement);
    //     //         itemInput.parentElement.innerHTML = itemInput.value;
    //     //     }
    //     // }
    // }









    let correctClick = (e) => {
        let currentValue = e.currentTarget.parentElement.firstElementChild.innerHTML;
        e.currentTarget.parentElement.firstElementChild.innerHTML = `<input type="text" class="item-input" value="${currentValue}">`;
        let itemInput = document.querySelector('.item-input');
        itemInput.focus();
        itemInput.selectionStart = itemInput.value.length;
        itemInput.onblur = () => {
            itemInput.parentElement.innerHTML = itemInput.value;
            let tasksRemained = JSON.parse(localStorage.getItem(props.currentLocalStorageKey));
            if (tasksRemained) {
                for (let i = 0; i < tasksRemained.length; i++) {
                    if (tasksRemained[i].content === currentValue) {
                        tasksRemained[i].content = itemInput.value;
                    }
                }
                localStorage.setItem(props.currentLocalStorageKey, JSON.stringify(tasksRemained));
            }

            let tasksDone = JSON.parse(localStorage.getItem(props.currentLocalStorageKey + ' done'));
            if (tasksDone) {
                for (let i = 0; i < tasksDone.length; i++) {
                    if (tasksDone[i].content === currentValue) {
                        tasksDone[i].content = itemInput.value;
                    }
                }
                localStorage.setItem(props.currentLocalStorageKey + ' done', JSON.stringify(tasksDone));
            }
        }
        // itemInput.onkeydown = (e) => {
        //     console.log(e.keyCode);
        //     if (e.keyCode === 13) {
        //         console.log(itemInput.parentElement);
        //         itemInput.parentElement.innerHTML = itemInput.value;
        //     }
        // }
    }

    return (
        <TaskButtonVision onClick={correctClick} icon={ICONS.PENCIL} size={11} />
    );
}

export { TaskButtonContainerCorrect };