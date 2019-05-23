import React from 'react';
import { connect } from 'react-redux'
// import { ModalWindowContainer } from './ModalWindowContainer.jsx';
import { TableCellsVision } from './TableCellsVision.jsx';
import { TableCellsVisionCurrentDate } from './TableCellsVisionCurrentDate.jsx';
import { TableCellsVisionDatesWithTasks } from './TableCellsVisionDatesWithTasks.jsx';

import ContainerTableCells from '../containers/ContainerTableCells.jsx';

// TodoCalendar Component

function ComponentTodoCalendar({
    currentDayInTheCalendar,
    cells,
    currentYear,
    currentMonth,
    currentLocalStorageKey,
    firstDayOfTheMonth,
    daysInThisMonth }) {

    const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let datesWistTasks = [];

    for (let key in localStorage) {
        if (localStorage.getItem(key)) {
            if (currentLocalStorageKey.substr(0, 6) === key.substr(0, 6)) {
                datesWistTasks.push(+key.split(' ')[2]);
            }
        }
    }

    // splitting an array on parts
    let chunk = (arr, len) => {
        var chunks = [],
            i = 0,
            n = arr.length;

        while (i < n) {
            chunks.push(arr.slice(i, i += len));
        }

        return chunks;
    }
    // 

    let nameCalendarDays = () => {
        let rowOfDays = []
        for (let i = 0; i < 7; i++) {
            // rowOfDays.push(<TableCellsVision content={week[i]} key={i} />);
            rowOfDays.push(<ContainerTableCells
                content={week[i]}
                key={i} />);
        }
        return <tr>{rowOfDays}</tr>;
    }

    let filledCalendarDays = () => {
        let table = [];
        for (let i = 0; i < 42; i++) {
            cells[i] = <ContainerTableCells
                // cells[i] = <TableCellsVision
                // onClick={props.onClickCell}
                content={null}
                key={i} />
        }
        for (let i = 0; i < daysInThisMonth; i++) {

            if (firstDayOfTheMonth !== 0) {
                if (datesWistTasks.some(number => number === (1 + i))) {
                    // cells[firstDayOfTheMonth - 1 + i] = <TableCellsVisionDatesWithTasks
                    cells[firstDayOfTheMonth - 1 + i] = <ContainerTableCells
                        // onClick={props.onClickCell}
                        content={i + 1}
                        addStyle='todo__table__data_tasks'
                        key={firstDayOfTheMonth - 1 + i} />;
                } else {
                    // cells[firstDayOfTheMonth - 1 + i] = <TableCellsVision
                    cells[firstDayOfTheMonth - 1 + i] = <ContainerTableCells
                        // onClick={props.onClickCell}
                        content={i + 1}
                        key={firstDayOfTheMonth - 1 + i} />;
                }
            } else {
                if (datesWistTasks.some(number => number === (1 + i))) {
                    cells[6 + i] = <ContainerTableCells
                        // cells[6 + i] = <TableCellsVisionDatesWithTasks
                        // onClick={props.onClickCell}
                        content={i + 1}
                        addStyle='todo__table__data_tasks'
                        key={6 + i} />;
                } else {
                    cells[6 + i] = <ContainerTableCells
                        // cells[6 + i] = <TableCellsVision
                        // onClick={props.onClickCell}
                        content={i + 1}
                        key={6 + i} />;
                }
            }

            if (firstDayOfTheMonth !== 0) {
                cells[firstDayOfTheMonth - 1 + currentDayInTheCalendar - 1] = <TableCellsVisionCurrentDate
                    currentDayInTheCalendar={currentDayInTheCalendar}
                    // onClick={props.onClickCell}
                    // onDoubleClickOpenModal={props.modalCalendarOpenCloseClick}
                    key={firstDayOfTheMonth - 1 + currentDayInTheCalendar - 1} />;
            } else {
                cells[6 + firstDayOfTheMonth + currentDayInTheCalendar - 1] = <TableCellsVisionCurrentDate
                    currentDayInTheCalendar={currentDayInTheCalendar}
                    // onClick={props.onClickCell}
                    // onDoubleClickOpenModal={props.modalCalendarOpenCloseClick}
                    key={6 + firstDayOfTheMonth + currentDayInTheCalendar - 1} />;
            }

        }
        let raws = chunk(cells, 7);

        for (let i = 0; i < raws.length; i++) {
            table.push(<tr key={i}>{raws[i]}</tr>)
        }

        return table;
    }

    // let handleChangeYearMonthClick = (e) => {
    //     props.onClick(e.target.textContent);
    // }

    return (
        <div className='todo__tasks-add'>
            <h2 className='todo__header2'>Calendar</h2>
            <table className='todo__table'>
                <thead>
                    <tr>
                        <th
                            // onClick={handleChangeYearMonthClick}
                            className='todo__table__data todo__table__data_header' >left
                        </th>
                        <th
                            // onClick={handleChangeYearMonthClick}
                            className='todo__table__data todo__table__data_header' >l
                        </th>
                        <th
                            className='todo__table__data todo__table__data_header'
                            colSpan='3'>{monthes[currentMonth] + ' ' + currentYear}
                        </th>
                        <th
                            // onClick={handleChangeYearMonthClick}
                            className='todo__table__data todo__table__data_header' >r
                        </th>
                        <th
                            // onClick={handleChangeYearMonthClick}
                            className='todo__table__data todo__table__data_header'>right
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {nameCalendarDays()}
                    {filledCalendarDays()}
                </tbody>
            </table>

            {/* <ModalWindowContainer modalCalendarVision={modalCalendarVision}
                modalTextariaValue={modalTextariaValue}
                currentLocalStorageKey={currentLocalStorageKey}
                todaysTasks={todaysTasks}
                onClickCloseModal={(e) => props.modalCalendarOpenCloseClick(e)}
                onChange={(e) => props.onChange(e)}
                onReset={(e) => props.onReset(e)} /> */}
        </div>
    )

    return (<h1>1</h1>)
}

export { ComponentTodoCalendar };