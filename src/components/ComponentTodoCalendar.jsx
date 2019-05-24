// TodoCalendar Component

import React from 'react';
import ContainerTableCells from '../containers/ContainerTableCells.jsx';
import ContainerTableHeaderCells from '../containers/ContainerTableHeaderCells.jsx';
import ContainerModalWindow from '../containers/ContainerModalWindow.jsx';

function ComponentTodoCalendar({
    currentDate,
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
            rowOfDays.push(<ContainerTableCells  content={week[i]} key={i} />);
        }
        return <tr>{rowOfDays}</tr>;
    }

    let filledCalendarDays = () => {
        let table = [];
        for (let i = 0; i < 42; i++) {
            cells[i] = <ContainerTableCells content={null} key={i} />
        }
        for (let i = 0; i < daysInThisMonth; i++) {

            if (firstDayOfTheMonth !== 0) {                
                if (datesWistTasks.some(number => number === (1 + i))) {
                    let currentLocalStorageKey = currentYear + ' ' + currentMonth + ' ' + (i + 1);
                    cells[firstDayOfTheMonth - 1 + i] = <ContainerTableCells
                        content={i + 1}
                        addStyle='todo__table__data_tasks'
                        game={localStorage.getItem(currentLocalStorageKey) ? JSON.parse(localStorage.getItem(currentLocalStorageKey)).some(i => i.game) : false}
                        key={firstDayOfTheMonth - 1 + i} />;
                } else {
                    cells[firstDayOfTheMonth - 1 + i] = <ContainerTableCells
                        content={i + 1}
                        key={firstDayOfTheMonth - 1 + i} />;
                }
            } else {
                if (datesWistTasks.some(number => number === (1 + i))) {
                    let currentLocalStorageKey = currentYear + ' ' + currentMonth + ' ' + (i + 1);
                    cells[6 + i] = <ContainerTableCells
                        content={i + 1}
                        addStyle='todo__table__data_tasks'
                        game={localStorage.getItem(currentLocalStorageKey) ? JSON.parse(localStorage.getItem(currentLocalStorageKey)).some(i => i.game) : false}
                        key={6 + i} />;
                } else {
                    cells[6 + i] = <ContainerTableCells
                        content={i + 1}
                        key={6 + i} />;
                }
            }

            if (firstDayOfTheMonth !== 0) {
                cells[firstDayOfTheMonth - 1 + currentDayInTheCalendar - 1] = <ContainerTableCells
                    currentDayInTheCalendar={currentDayInTheCalendar}
                    content={currentDayInTheCalendar}
                    addStyle={localStorage.getItem(currentLocalStorageKey) ? 'todo__table__data_tasks todo__table__data_choisen' : 'todo__table__data_choisen'}
                    game={localStorage.getItem(currentLocalStorageKey) ? JSON.parse(localStorage.getItem(currentLocalStorageKey)).some(i => i.game) : false}
                    key={firstDayOfTheMonth - 1 + currentDayInTheCalendar - 1} />;
            } else {
                cells[6 + firstDayOfTheMonth + currentDayInTheCalendar - 1] = <ContainerTableCells
                    currentDayInTheCalendar={currentDayInTheCalendar}
                    content={currentDayInTheCalendar}
                    addStyle='todo__table__data_choisen'
                    key={6 + firstDayOfTheMonth + currentDayInTheCalendar - 1} />;
            }

            // if (i === new Date().getDate()
            //     && +currentDate.getMonth() === new Date().getMonth()
            //     && +currentDate.getFullYear() === new Date().getFullYear()) {
            //         console.log(i)
            //         cells[i] = <ContainerTableCells
            //         currentDayInTheCalendar={currentDayInTheCalendar}
            //         content={currentDayInTheCalendar}
            //         addStyle={localStorage.getItem(currentLocalStorageKey) ? 'todo__table__data_tasks todo__table__data_choisen' : 'todo__table__data_choisen'}
            //         game={localStorage.getItem(currentLocalStorageKey) ? JSON.parse(localStorage.getItem(currentLocalStorageKey)).some(i => i.game) : false}
            //         key={firstDayOfTheMonth - 1 + currentDayInTheCalendar - 1} />;
            //     }

        }
        let raws = chunk(cells, 7);

        for (let i = 0; i < raws.length; i++) {
            table.push(<tr key={i}>{raws[i]}</tr>)
        }

        return table;
    }

    return (
        <div className='todo__tasks-add'>
            <h2 className='todo__header2'>Calendar</h2>
            <table className='todo__table'>
                <thead>
                    <tr>
                        <ContainerTableHeaderCells content='left' />
                        <ContainerTableHeaderCells content='l' />
                        <th
                            className='todo__table__data todo__table__data_header'
                            colSpan='3'>{monthes[currentMonth] + ' ' + currentYear}
                        </th>
                        <ContainerTableHeaderCells content='r' />
                        <ContainerTableHeaderCells content='right' />
                    </tr>
                </thead>
                <tbody>
                    {nameCalendarDays()}
                    {filledCalendarDays()}
                </tbody>
            </table>

            <ContainerModalWindow />
        </div>
    )
}

export { ComponentTodoCalendar };