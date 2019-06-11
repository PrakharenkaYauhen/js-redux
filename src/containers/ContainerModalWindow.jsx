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
        modalTextariaValue: e.target.value,
      }
      dispatch(actionInputModalChange(action))
    },

    addTask: (currentLocalStorageKey, modalTextariaValue) => {
      let todaysTasks = JSON.parse(localStorage.getItem(currentLocalStorageKey));
      let tasksList = todaysTasks ? todaysTasks : [];
      let newTask = {};

      newTask.id = new Date().getTime();
      newTask.content = modalTextariaValue;

      tasksList.push(newTask);

      localStorage.setItem(currentLocalStorageKey, JSON.stringify(tasksList));
      let action = {
        modalTextariaValue: '',
      }
      dispatch(actionInputModalChange(action))
    }
  }
}

const ContainerModalWindow = connect(mapStateToProps, mapDispatchToProps)(ComponentModalWindow)

export default ContainerModalWindow