import React from 'react';
import { connect } from 'react-redux'
// import { ModalWindowContainer } from './ModalWindowContainer.jsx';
// import { TableCellsVision } from './TableCellsVision.jsx';
// import { TableCellsVisionCurrentDate } from './TableCellsVisionCurrentDate.jsx';
// import { TableCellsVisionDatesWithTasks } from './TableCellsVisionDatesWithTasks.jsx';
import { ComponentTodoCalendar } from '../components/ComponentTodoCalendar.jsx';

// TodoCalendar Component

const mapStateToProps = (state) => {
    console.log(state);

    const currentDate = state.reducerCalendar.currentDate;
    const currentDayInTheCalendar = state.reducerCalendar.currentDayInTheCalendar;
    const cells = state.reducerCalendar.cells;
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentLocalStorageKey = currentYear + ' ' + currentMonth + ' ' + currentDayInTheCalendar;
    const firstDayOfTheMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInThisMonth = 32 - new Date(currentYear, currentMonth, 32).getDate();

    return {
        currentDate,
        currentDayInTheCalendar,
        cells,
        currentYear,
        currentMonth,
        currentLocalStorageKey,
        firstDayOfTheMonth,
        daysInThisMonth
    }
}

const TodoCalendar = connect(mapStateToProps)(ComponentTodoCalendar)

export { TodoCalendar };