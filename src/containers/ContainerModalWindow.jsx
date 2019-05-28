// ContainerModalWindow

import { connect } from 'react-redux'
import { ComponentModalWindow } from '../components/ComponentModalWindow'
import { actionFillCalendar } from '../actions'

const mapStateToProps = (state, props) => {
    const { currentDate, currentDayInTheCalendar, cells, modalCalendarVision, modalTextariaValue } = state.reducerCalendar;

    let currentYear = currentDate.getFullYear(),
        currentMonth = currentDate.getMonth();
    let currentLocalStorageKey = currentYear + ' ' + currentMonth + ' ' + currentDayInTheCalendar;

    return {
        currentDate,
        currentDayInTheCalendar,
        cells,
        modalCalendarVision,
        modalTextariaValue,
        currentLocalStorageKey
    }
}

const mergeProps = (stateProps, dispatchProps) => {
    const { currentDate, currentDayInTheCalendar, cells, modalCalendarVision, modalTextariaValue, currentLocalStorageKey } = stateProps;
    const { dispatch } = dispatchProps;

    return {
        modalCalendarVision,
        modalTextariaValue,
        currentLocalStorageKey,

        onClickExit: () => {
            let action = {
                currentDate: currentDate,
                currentDayInTheCalendar: currentDayInTheCalendar,
                cells: cells,
                modalCalendarVision: false,
                modalTextariaValue: '',
            }
            dispatch(actionFillCalendar(action))
        },

        onChange: e => {
            let action = {
                currentDate: currentDate,
                currentDayInTheCalendar: currentDayInTheCalendar,
                cells: cells,
                modalCalendarVision: true,
                modalTextariaValue: e.target.value,
            }
            dispatch(actionFillCalendar(action))
        },

        addTask: currentLocalStorageKey => {
            let todaysTasks = JSON.parse(localStorage.getItem(currentLocalStorageKey));
            let tasksList = todaysTasks ? todaysTasks : [];
            let newTask = {};

            newTask.id = new Date().getTime();
            newTask.content = modalTextariaValue;

            tasksList.push(newTask);

            localStorage.setItem(currentLocalStorageKey, JSON.stringify(tasksList));
            let action = {
                currentDate: currentDate,
                currentDayInTheCalendar: currentDayInTheCalendar,
                cells: cells,
                modalCalendarVision: true,
                modalTextariaValue: '',
            }
            dispatch(actionFillCalendar(action))
        }
    }
}

// function ModalWindowContainer(props) {
//     let modalCalendarVision = props.modalCalendarVision,
//         currentLocalStorageKey = props.currentLocalStorageKey,
//         todaysTasks = props.todaysTasks;


//     let addTask = () => {
//         let tasksList = todaysTasks ? todaysTasks : [];
//         let newTask = {};

//         newTask.id = new Date().getTime();
//         newTask.content = props.modalTextariaValue;

//         tasksList.push(newTask);

//         localStorage.setItem(currentLocalStorageKey, JSON.stringify(tasksList));
//         props.onReset();
//     }
// }

const ContainerModalWindow = connect(mapStateToProps, null, mergeProps)(ComponentModalWindow)
// const ContainerModalWindow = connect(mapStateToProps)(ComponentModalWindow)

export default ContainerModalWindow