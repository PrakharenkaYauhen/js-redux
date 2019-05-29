// ContainerTaskList

import { connect } from 'react-redux'
import { ComponentTaskList } from '../components/ComponentTaskList'

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

    return {
        todaysTasks,
        donesTasks
    }
}

// const ContainerTaskList = connect(mapStateToProps, mapDispatchToProps)(ContainerTaskList);
const ContainerTaskList = connect(mapStateToProps)(ComponentTaskList);

export { ContainerTaskList }