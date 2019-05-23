import { connect } from 'react-redux'
import { ComponentTodoCalendar } from '../components/ComponentTodoCalendar.jsx';

// TodoCalendar Component

const mapStateToProps = (state) => {
    // console.log(state);

    const { currentDate, currentDayInTheCalendar, cells, modalCalendarVision, modalTextariaValue } = state.reducerCalendar;

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentLocalStorageKey = currentYear + ' ' + currentMonth + ' ' + currentDayInTheCalendar;
    const firstDayOfTheMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInThisMonth = 32 - new Date(currentYear, currentMonth, 32).getDate();

    return {
        currentDate,
        currentDayInTheCalendar,
        cells,
        modalCalendarVision,
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