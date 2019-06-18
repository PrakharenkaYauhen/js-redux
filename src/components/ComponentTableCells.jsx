// ComponentTableCells Component

import React from 'react';
import PropTypes from 'prop-types';
import imgPinBoardURL from '../images/pin-board150.png';
import imgBallURL from '../images/ball150.png';

function ComponentTableCells({
  currentDate,
  weatherObject,
  game,
  content,
  onClick,
  onDoubleClick,
  addStyle,
  icon,
  onKeyDown,
}) {
  let getWeatherIcon = numberInObject => {
    return (
      <img
        className="todo__table__sun"
        src={numberInObject === 'today'
          ? `https://openweathermap.org/img/w/${weatherObject[0].weather['0'].icon}.png`
          : `https://openweathermap.org/img/w/${weatherObject[1].list[numberInObject].weather['0'].icon}.png`}
        alt="icon weather"
      />
    )
  }

  const contentDate = `${currentDate.getMonth()} ${currentDate.getFullYear()}`;
  const currentMonthAndYear = `${new Date().getMonth()} ${new Date().getFullYear()}`;
  const nextMonthAndYear = `${new Date().getMonth() + 1} ${new Date().getFullYear()}`;
  const newYearAndFirstMonth = `${0} ${currentDate.getFullYear() + 1}`;
  const todaysDate = new Date().getDate();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const daysInThisMonth = 32 - new Date(currentYear, currentMonth, 32).getDate();
  const daysDifference = daysInThisMonth - todaysDate;
  // let daysDifference = 1;

  return (
    <td
      className={`todo__table__data todo__table__data_cells ${addStyle}`}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      onKeyDown={onKeyDown}
      tabIndex={typeof content === "number" ? content + 1 : null}
    >
      {content}

      {icon === "pin" && (
        <img
          className="todo__table__pin"
          src={imgPinBoardURL}
          alt="icon pin"
        />
      )}

      {icon = "pin" && game && (
        <img
          className="todo__table__ball"
          src={imgBallURL}
          alt="icon ball"
        />
      )}

      {weatherObject && contentDate === currentMonthAndYear
        && (
          content === todaysDate && getWeatherIcon('today')
          || content === todaysDate + 1 && getWeatherIcon(8)
          || content === todaysDate + 2 && getWeatherIcon(16)
          || content === todaysDate + 3 && getWeatherIcon(24)
          || content === todaysDate + 4 && getWeatherIcon(32)
        )}

      {weatherObject && (contentDate === nextMonthAndYear || contentDate === newYearAndFirstMonth)
        && (
          content === 4 - daysDifference && getWeatherIcon(32)
          || content === 3 - daysDifference && getWeatherIcon(24)
          || content === 2 - daysDifference && getWeatherIcon(16)
          || content === 1 - daysDifference && getWeatherIcon(8)
        )}
    </td>
  );
}

ComponentTableCells.defaultProps = {
  content: null,
  game: null,
  weatherObject: [],
};

ComponentTableCells.propTypes = {
  currentDate: PropTypes.instanceOf(Object).isRequired,
  onClick: PropTypes.func.isRequired,
  onDoubleClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  addStyle: PropTypes.string.isRequired,
  game: PropTypes.bool,
  weatherObject: PropTypes.instanceOf(Array),
};

export default ComponentTableCells;
