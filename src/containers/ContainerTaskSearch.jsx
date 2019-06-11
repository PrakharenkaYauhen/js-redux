// ContainerTaskSearch

import { connect } from 'react-redux'
import ComponentTaskSearch from '../components/ComponentTaskSearch'
import { actionSearchTaskInList } from '../actions'
import { actionSearchingTaskData } from '../actions'

const mapStateToProps = (state) => {
  const {
    searchInputValue,
  } = state.reducerCalendar;

  let currentlyTaskList = [];

  for (let i = 0; i < localStorage.length; i++) {
    let item = JSON.parse(localStorage.getItem(localStorage.key(i)));
    currentlyTaskList = currentlyTaskList.concat(item).sort();
  }

  return {
    searchInputValue,
    currentlyTaskList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    itemClick: e => {
      let event = e.target.innerHTML;
      for (let key in localStorage) {
        if (localStorage.getItem(key)) {
          if (JSON.parse(localStorage.getItem(key)).some(item => item.content === event)) {
            let dataArray = key.split(' ');
            let dataString = `${dataArray[0]}, ${+dataArray[1] + 1}, ${dataArray[2]}`;
            let action = {
              currentDate: new Date(dataString),
              currentDayInTheCalendar: new Date(dataString).getDate(),
              searchInputValue: '',
            }
            dispatch(actionSearchingTaskData(action))
          }
        }
      }
    },

    onKeyDown: e => {
      if (e.keyCode !== 13) return;
      let event = e.target.innerHTML;
      for (let key in localStorage) {
        if (localStorage.getItem(key)) {
          if (JSON.parse(localStorage.getItem(key)).some(item => item.content === event)) {
            let dataArray = key.split(' ');
            let dataString = `${dataArray[0]}, ${+dataArray[1] + 1}, ${dataArray[2]}`;
            let action = {
              currentDate: new Date(dataString),
              currentDayInTheCalendar: new Date(dataString).getDate(),
              searchInputValue: '',
            }
            dispatch(actionSearchingTaskData(action))
          }
        }
      }
    },

    onSearchChange: e => {
      let action = {
        searchInputValue: e.target.value,
      }
      dispatch(actionSearchTaskInList(action))
    }
  }
}

const ContainerTaskSearch = connect(mapStateToProps, mapDispatchToProps)(ComponentTaskSearch);

export { ContainerTaskSearch }