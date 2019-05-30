// TodoCalendar Component

import { connect } from 'react-redux'
import { ComponentTodoCalendar } from '../components/ComponentTodoCalendar.jsx';
const mapStateToProps = (state) => {
    // console.log(state);

    const { 
        currentDate, 
        currentDayInTheCalendar, 
        cells, 
        juventusObject,
        weatherObject,
        modalTextariaValue,
     } = state.reducerCalendar;

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentLocalStorageKey = currentYear + ' ' + currentMonth + ' ' + currentDayInTheCalendar;
    const firstDayOfTheMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInThisMonth = 32 - new Date(currentYear, currentMonth, 32).getDate();

    return {
        currentDate,
        currentDayInTheCalendar,
        cells,
        juventusObject,
        weatherObject,
        modalTextariaValue,
        currentYear,
        currentMonth,
        currentLocalStorageKey,
        firstDayOfTheMonth,
        daysInThisMonth
    }
}

const TodoCalendar = connect(mapStateToProps)(ComponentTodoCalendar)

export { TodoCalendar };