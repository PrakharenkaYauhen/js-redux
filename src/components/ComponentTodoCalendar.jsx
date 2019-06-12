// TodoCalendar Component

import React from 'react';
import PropTypes from 'prop-types';
import ContainerTableCells from '../containers/ContainerTableCells';
import ContainerTableHeaderCells from '../containers/ContainerTableHeaderCells';
import ContainerModalWindow from '../containers/ContainerModalWindow';

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

  const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const monthes = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  const datesWistTasks = [];

  for (const key in localStorage) {
    if (localStorage.getItem(key)) {
      if (currentLocalStorageKey.substr(0, 6) === key.substr(0, 6)) {
        datesWistTasks.push(+key.split(' ')[2]);
      }
    }
  }

  // splitting an array on parts
  const chunk = (arr, len) => {
    const chunks = [];
    let i = 0;
    const n = arr.length;

    while (i < n) {
      chunks.push(arr.slice(i, i += len));
    }

    return chunks;
  };
  // 

  const nameCalendarDays = () => {
    const rowOfDays = [];
    for (let i = 0; i < 7; i += 1) {
      rowOfDays.push(<ContainerTableCells content={week[i]} key={i} />);
    }
    return <tr>{rowOfDays}</tr>;
  };

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

  const filledCalendarDays = () => {
    // console.log(weatherIcons);
    const table = [];
    for (let i = 0; i < 42; i += 1) {
      cells[i] = <ContainerTableCells content={null} key={i} />;
    }
    for (let i = 0; i < daysInThisMonth; i += 1) {
      if (firstDayOfTheMonth !== 0) {
        if (datesWistTasks.some(number => number === (1 + i))) {
          const currentLocalStorageKey = `${currentYear} ${currentMonth} ${i + 1}`;
          cells[firstDayOfTheMonth - 1 + i] = (
            <ContainerTableCells
              content={i + 1}
              addStyle="todo__table__data_tasks"
              game={localStorage.getItem(currentLocalStorageKey)
                ? JSON.parse(localStorage.getItem(currentLocalStorageKey)).some(i => i.game)
                : false}
              key={firstDayOfTheMonth - 1 + i}
            />);
        } else {
          cells[firstDayOfTheMonth - 1 + i] = (
            <ContainerTableCells
              content={i + 1}
              key={firstDayOfTheMonth - 1 + i}
            />);
        }
      } else {
        if (datesWistTasks.some(number => number === (1 + i))) {
          const currentLocalStorageKey = `${currentYear} ${currentMonth} ${i + 1}`;
          cells[6 + i] = (
            <ContainerTableCells
              content={i + 1}
              addStyle="todo__table__data_tasks"
              game={localStorage.getItem(currentLocalStorageKey)
                ? JSON.parse(localStorage.getItem(currentLocalStorageKey)).some(i => i.game)
                : false}
              key={6 + i}
            />);
        } else {
          cells[6 + i] = (
            <ContainerTableCells
              content={i + 1}
              key={6 + i}
            />);
        }
      }

      if (firstDayOfTheMonth !== 0) {
        cells[firstDayOfTheMonth - 1 + currentDayInTheCalendar - 1] = (
          <ContainerTableCells
            content={currentDayInTheCalendar}
            addStyle={localStorage.getItem(currentLocalStorageKey)
              ? 'todo__table__data_tasks todo__table__data_choisen'
              : 'todo__table__data_choisen'}
            game={localStorage.getItem(currentLocalStorageKey)
              ? JSON.parse(localStorage.getItem(currentLocalStorageKey)).some(i => i.game)
              : false}
            key={firstDayOfTheMonth - 1 + currentDayInTheCalendar - 1}
          />);
      } else {
        cells[6 + firstDayOfTheMonth + currentDayInTheCalendar - 1] = (
          <ContainerTableCells
            content={currentDayInTheCalendar}
            addStyle="todo__table__data_choisen"
            key={6 + firstDayOfTheMonth + currentDayInTheCalendar - 1}
          />);
      }
    }

    const raws = chunk(cells, 7);

    for (let i = 0; i < raws.length; i += 1) {
      table.push(<tr key={i}>{raws[i]}</tr>);
    }

    return table;
  };

  return (
    <div className="todo__tasks-add">
      <h2 className="todo__header2">Calendar</h2>
      <table className="todo__table">
        <thead>
          <tr>
            <ContainerTableHeaderCells content="left" icon="UNDO2" />
            <ContainerTableHeaderCells content="l" icon="ARROWLEFT2" />
            <th
              className="todo__table__data todo__table__data_header"
              colSpan="3"
            >
              {`${monthes[currentMonth]} ${currentYear}`}
            </th>
            <ContainerTableHeaderCells content="r" icon="ARROWRIGHT2" />
            <ContainerTableHeaderCells content="right" icon="REDO2" />
          </tr>
        </thead>
        <tbody id="table-body">
          {nameCalendarDays()}
          {filledCalendarDays()}
        </tbody>
      </table>

      <ContainerModalWindow />
    </div>
  );
}

ComponentTodoCalendar.defaultProps = {
  weatherObject: null,
};

ComponentTodoCalendar.propTypes = {
  currentDate: PropTypes.instanceOf(Object).isRequired,
  currentDayInTheCalendar: PropTypes.number.isRequired,
  cells: PropTypes.instanceOf(Array).isRequired,
  modalTextariaValue: PropTypes.string.isRequired,
  currentYear: PropTypes.number.isRequired,
  currentMonth: PropTypes.number.isRequired,
  currentLocalStorageKey: PropTypes.string.isRequired,
  firstDayOfTheMonth: PropTypes.number.isRequired,
  daysInThisMonth: PropTypes.number.isRequired,
  weatherObject: PropTypes.instanceOf(Object),
};

export default ComponentTodoCalendar;
