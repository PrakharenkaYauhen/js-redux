// ContainerAddTaskToList

import { connect } from 'react-redux'
import { ComponentAddTaskToList } from '../components/ComponentAddTaskToList'
import { actionToggleAddTaskModal } from '../actions'

const mapStateToProps = (state) => {
    const {
        currentDate,
        currentDayInTheCalendar,
        modalCalendarVision
    } = state.reducerCalendar;

    let currentYear = currentDate.getFullYear(),
        currentMonth = currentDate.getMonth();
    let currentLocalStorageKey = currentYear + ' ' + currentMonth + ' ' + currentDayInTheCalendar;
    let todaysTasks = JSON.parse(localStorage.getItem(currentLocalStorageKey));
    let donesTasks = JSON.parse(localStorage.getItem(`${currentLocalStorageKey} done`));

    return {
        modalCalendarVision,
        todaysTasks,
        donesTasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleModal: modalCalendarVision => {
            let action = {
                modalCalendarVision: modalCalendarVision ? false : true,
                modalTextariaValue: '',
            }
            dispatch(actionToggleAddTaskModal(action))
        }
    }
}

const ContainerAddTaskToList = connect(mapStateToProps, mapDispatchToProps)(ComponentAddTaskToList);

export { ContainerAddTaskToList }