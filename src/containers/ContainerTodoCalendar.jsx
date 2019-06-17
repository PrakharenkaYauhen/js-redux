// TodoCalendar Component

import { connect } from 'react-redux'
import ComponentTodoCalendar from '../components/ComponentTodoCalendar';
const mapStateToProps = (state) => {
    const { 
        tasksList,
        currentDate, 
        currentDayInTheCalendar, 
        cells, 
        juventusObject,
        weatherObject,
     } = state.reducerCalendar;

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentLocalStorageKey = currentYear + ' ' + currentMonth + ' ' + currentDayInTheCalendar;
    const firstDayOfTheMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInThisMonth = 32 - new Date(currentYear, currentMonth, 32).getDate();

    return {
        tasksList,
        currentDate,
        currentDayInTheCalendar,
        cells,
        juventusObject,
        weatherObject,
        currentYear,
        currentMonth,
        currentLocalStorageKey,
        firstDayOfTheMonth,
        daysInThisMonth
    }
}

const TodoCalendar = connect(mapStateToProps)(ComponentTodoCalendar)

export { TodoCalendar };