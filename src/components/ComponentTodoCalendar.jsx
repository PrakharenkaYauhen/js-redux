// TodoCalendar Component

import React from 'react';
import PropTypes from 'prop-types';
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
    daysInThisMonth,
    weatherObject,
    modalTextariaValue,
}) {

    console.log('%c%s', 'color: red', 'Calendar');

    const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        monthes = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];

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
            rowOfDays.push(<ContainerTableCells content={week[i]} key={i} />);
        }
        return <tr>{rowOfDays}</tr>;
    }

    // let weatherIcons = [];
    // if (weatherObject) {
    //     weatherIcons = weatherObject[1].list.filter((item, i) => {
    //         if (i % 8 === 0) {
    //             return item;
    //         }
    //     }).map((item, i) => {
    //         return `https://openweathermap.org/img/w/${item.weather['0'].icon}.png`
    //     })
    //     weatherIcons[0] = `https://openweathermap.org/img/w/${weatherObject[0].weather['0'].icon}.png`;
    // }

    let filledCalendarDays = () => {
        // console.log(weatherIcons);
        let table = [];
        for (let i = 0; i < 42; i++) {
            cells[i] = <ContainerTableCells content={null} key={i} />
        }
        for (let i = 0; i < daysInThisMonth; i++) {
            if (firstDayOfTheMonth !== 0) {
                // console.log(+currentDate.getMonth());
                // console.log(new Date().getMonth());
                // console.log(+currentDate.getFullYear());
                // console.log(new Date().getFullYear());
                // console.log(i + 1);
                // console.log(new Date().getDate());
                // console.log(+currentDate.getMonth() === new Date().getMonth() &&
                    // +currentDate.getFullYear() === new Date().getFullYear() &&
                    // i + 1 === new Date().getDate() && weatherIcons[0]);
                if (datesWistTasks.some(number => number === (1 + i))) {
                    let currentLocalStorageKey = currentYear + ' ' + currentMonth + ' ' + (i + 1);
                    cells[firstDayOfTheMonth - 1 + i] = <ContainerTableCells
                        content={i + 1}
                        addStyle='todo__table__data_tasks'
                        game={localStorage.getItem(currentLocalStorageKey) ?
                            JSON.parse(localStorage.getItem(currentLocalStorageKey)).some(i => i.game) :
                            false}
                        // weatherIcon={
                        //     +currentDate.getMonth() === new Date().getMonth() &&
                        //     +currentDate.getFullYear() === new Date().getFullYear() &&
                        //     i + 1 === new Date().getDate() && weatherIcons[0]
                            //  || 
                            // ( ((i) === (new Date().getDate() + 1)) && weatherIcons[1]) || 
                            // ( ((i) === (new Date().getDate() + 2)) && weatherIcons[2]) || 
                            // ( ((i) === (new Date().getDate() + 3)) && weatherIcons[3]) || 
                            // ( ((i) === (new Date().getDate() + 4)) && weatherIcons[4]))
                        // }
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
                        game={localStorage.getItem(currentLocalStorageKey) ?
                            JSON.parse(localStorage.getItem(currentLocalStorageKey)).some(i => i.game) :
                            false}
                        key={6 + i} />;
                } else {
                    cells[6 + i] = <ContainerTableCells
                        content={i + 1}
                        key={6 + i} />;
                }
            }

            if (firstDayOfTheMonth !== 0) {
                cells[firstDayOfTheMonth - 1 + currentDayInTheCalendar - 1] = <ContainerTableCells
                    content={currentDayInTheCalendar}
                    addStyle={localStorage.getItem(currentLocalStorageKey) ?
                        'todo__table__data_tasks todo__table__data_choisen' :
                        'todo__table__data_choisen'}
                    game={localStorage.getItem(currentLocalStorageKey) ?
                        JSON.parse(localStorage.getItem(currentLocalStorageKey)).some(i => i.game) :
                        false}
                    key={firstDayOfTheMonth - 1 + currentDayInTheCalendar - 1} />;
            } else {
                cells[6 + firstDayOfTheMonth + currentDayInTheCalendar - 1] = <ContainerTableCells
                    content={currentDayInTheCalendar}
                    addStyle='todo__table__data_choisen'
                    key={6 + firstDayOfTheMonth + currentDayInTheCalendar - 1} />;
            }

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

ComponentTodoCalendar.propTypes = {
    currentDate: PropTypes.object,
    currentDayInTheCalendar: PropTypes.number,
    cells: PropTypes.array,
    modalCalendarVision: PropTypes.bool,
    modalTextariaValue: PropTypes.string,
    currentYear: PropTypes.number,
    currentMonth: PropTypes.number,
    currentLocalStorageKey: PropTypes.string,
    firstDayOfTheMonth: PropTypes.number,
    daysInThisMonth: PropTypes.number
}

export { ComponentTodoCalendar };