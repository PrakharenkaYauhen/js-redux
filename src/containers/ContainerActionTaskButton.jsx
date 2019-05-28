// ContainerActionTaskButton

import { connect } from 'react-redux'
import { ComponentActionTaskButton } from '../components/ComponentActionTaskButton'
// import { actionToggleAddTaskModal } from '../actions'

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
const ContainerActionTaskButton = connect(mapStateToProps)(ComponentActionTaskButton);

export { ContainerActionTaskButton }