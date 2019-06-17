// ContainerModalWindow

import { connect } from 'react-redux';
import ComponentModalWindow from '../components/ComponentModalWindow';
import { actionCalendarModal } from '../actions';
import { actionInputModalChange } from '../actions';

const mapStateToProps = (state) => {
  const {
    currentDate,
    currentDayInTheCalendar,
    modalCalendarVision,
    modalTextariaValue
  } = state.reducerCalendar;

  let currentYear = currentDate.getFullYear(),
    currentMonth = currentDate.getMonth();
  let currentLocalStorageKey = currentYear + ' ' + currentMonth + ' ' + currentDayInTheCalendar;

  return {
    modalCalendarVision,
    modalTextariaValue,
    currentLocalStorageKey
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickExit: () => {
      let action = {
        modalCalendarVision: false,
        modalTextariaValue: '',
      }
      dispatch(actionCalendarModal(action))
    },

    onChange: e => {
      let action = {
        modalCalendarVision: true,
        modalTextariaValue: e.target.value,
      }
      dispatch(actionCalendarModal(action))
    },

    addTask: (currentLocalStorageKey, modalTextariaValue, textariaInput) => {
      let todaysTasks = JSON.parse(localStorage.getItem(currentLocalStorageKey));
      todaysTasks = todaysTasks ? todaysTasks : [];
      let newTask = {};

      newTask.id = new Date().getTime();
      newTask.content = modalTextariaValue;

      todaysTasks.push(newTask);

      localStorage.setItem(currentLocalStorageKey, JSON.stringify(todaysTasks));

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

      textariaInput.current.focus();

      let action = {
        tasksList: tasksList,
        modalTextariaValue: '',
      }
      dispatch(actionInputModalChange(action))
    }
  }
}

const ContainerModalWindow = connect(mapStateToProps, mapDispatchToProps)(ComponentModalWindow)

export default ContainerModalWindow