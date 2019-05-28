// ContainerActionTaskButton

import { connect } from 'react-redux'
import { ComponentActionTaskButton } from '../components/ComponentActionTaskButton'
import { actionToggleAddTaskModal } from '../actions'

const mapStateToProps = (state, props) => {
    const {
        currentDate,
        currentDayInTheCalendar
    } = state.reducerCalendar;

    const {
        icon,
        size
    } = props;

    let currentYear = currentDate.getFullYear(),
        currentMonth = currentDate.getMonth();
    let currentLocalStorageKey = currentYear + ' ' + currentMonth + ' ' + currentDayInTheCalendar;

    return {
        currentLocalStorageKey,
        icon,
        size
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        correctTask: (currentLocalStorageKey, e) => {
            let currentValue = e.currentTarget.parentElement.firstElementChild.innerHTML;
            e.currentTarget.parentElement.firstElementChild.innerHTML = `<input type="text" class="item-input" value="${currentValue}">`;
            let itemInput = document.querySelector('.item-input');
            itemInput.focus();
            itemInput.selectionStart = itemInput.value.length;
            itemInput.onblur = () => {
                itemInput.parentElement.innerHTML = itemInput.value;
                let tasksRemained = JSON.parse(localStorage.getItem(currentLocalStorageKey));
                if (tasksRemained) {
                    for (let i = 0; i < tasksRemained.length; i++) {
                        if (tasksRemained[i].content === currentValue) {
                            tasksRemained[i].content = itemInput.value;
                        }
                    }
                    localStorage.setItem(currentLocalStorageKey, JSON.stringify(tasksRemained));
                }

                let tasksDone = JSON.parse(localStorage.getItem(currentLocalStorageKey + ' done'));
                if (tasksDone) {
                    for (let i = 0; i < tasksDone.length; i++) {
                        if (tasksDone[i].content === currentValue) {
                            tasksDone[i].content = itemInput.value;
                        }
                    }
                    localStorage.setItem(currentLocalStorageKey + ' done', JSON.stringify(tasksDone));
                }
            }

            let action = {
                modalCalendarVision: false,
                modalTextariaValue: '',
            }
            dispatch(actionToggleAddTaskModal(action))
        },

        deleteTask: (currentLocalStorageKey, e) => {
            let currentDonesLocalStorageKey = currentLocalStorageKey + ' done';
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

            let action = {
                modalCalendarVision: false,
                modalTextariaValue: '',
            }
            dispatch(actionToggleAddTaskModal(action))
        },

        doneTask: (currentLocalStorageKey, e) => {
            let currentDonesLocalStorageKey = currentLocalStorageKey + ' done';
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

            let action = {
                modalCalendarVision: false,
                modalTextariaValue: '',
            }
            dispatch(actionToggleAddTaskModal(action))
        }
    }
}

const ContainerActionTaskButton = connect(mapStateToProps, mapDispatchToProps)(ComponentActionTaskButton);
// const ContainerActionTaskButton = connect(mapStateToProps)(ComponentActionTaskButton);

export { ContainerActionTaskButton }