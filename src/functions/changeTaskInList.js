import { tasksListChange } from '../actions'

let changeTaskInList = (dispatch) => {
  let tasksList = {};

  if (localStorage) {
    for (let key in localStorage) {
      if (localStorage.getItem(key)) {
        let content = JSON.parse(localStorage.getItem(key));
        tasksList[key] = content;
      }
    }
  } else {
    tasksList = {};
  }

  let action = {
    tasksList: tasksList,
  }
  dispatch(tasksListChange(action))
}

export default changeTaskInList;