// listenerTaskList

import { store } from './../index.js';

let previousTasksString;

function listenerTaskList() {
    const state = store.getState();
    const task = state.reducerDateChangeCalendar.task;
    const theList = document.querySelectorAll('.todo__tasks__list');
    let currentTuskString = JSON.stringify(task);

    if (previousTasksString !== currentTuskString) {
        previousTasksString = currentTuskString;
    } else {
        return
    }

    console.log('subscribeTaskList');

    theList[0].innerHTML = '';

    if (!task || task.length === 0) return theList[0].innerHTML = "You don't have any task now";

    for (let i = 0; i < task.length; i++) {
        let li = document.createElement('li');
        li.classList.add('todo__tasks__item');
        let span = document.createElement('span');
        span.innerHTML = task[i].content;
        li.appendChild(span);
        let buttonDelete = document.createElement('button');
        buttonDelete.classList.add('todo__tasks__button');
        buttonDelete.classList.add('todo__tasks__button_delete');
        let iconDelete = document.createElement('span');
        iconDelete.classList.add('icon-cross');
        buttonDelete.appendChild(iconDelete);
        li.appendChild(buttonDelete);
        let buttonDone = document.createElement('button');
        buttonDone.classList.add('todo__tasks__button');
        buttonDone.classList.add('todo__tasks__button_done');
        let iconDone = document.createElement('span');
        iconDone.classList.add('icon-checkmark');
        buttonDone.appendChild(iconDone);
        li.appendChild(buttonDone);
        let buttonCorrect = document.createElement('button');
        buttonCorrect.classList.add('todo__tasks__button');
        buttonCorrect.classList.add('todo__tasks__button_correct');
        let iconCorrect = document.createElement('span');
        iconCorrect.classList.add('icon-pencil');
        buttonCorrect.appendChild(iconCorrect);
        li.appendChild(buttonCorrect);
        theList[0].appendChild(li);
    }
}

export { listenerTaskList };