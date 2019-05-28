// ContainerTaskList

import { connect } from 'react-redux'
import { ComponentTaskList } from '../components/ComponentTaskList'
import { actionToggleAddTaskModal } from '../actions'

const mapStateToProps = (state) => {
    const {
        currentDate,
        currentDayInTheCalendar
    } = state.reducerCalendar;

    let currentYear = currentDate.getFullYear(),
        currentMonth = currentDate.getMonth();
    let currentLocalStorageKey = currentYear + ' ' + currentMonth + ' ' + currentDayInTheCalendar;
    let todaysTasks = JSON.parse(localStorage.getItem(currentLocalStorageKey));
    let donesTasks = JSON.parse(localStorage.getItem(`${currentLocalStorageKey} done`));

    console.log(todaysTasks);
    console.log(donesTasks);

    return {
        currentLocalStorageKey,
        todaysTasks,
        donesTasks
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onToggleModal: modalCalendarVision => {
//             let action = {
//                 modalCalendarVision: modalCalendarVision ? false : true,
//                 modalTextariaValue: '',
//             }
//             dispatch(actionToggleAddTaskModal(action))
//         }
//     }
// }

// const ContainerTaskList = connect(mapStateToProps, mapDispatchToProps)(ContainerTaskList);
const ContainerTaskList = connect(mapStateToProps)(ComponentTaskList);

export { ContainerTaskList }