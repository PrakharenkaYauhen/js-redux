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
  onKeyDown,
}) {
  return (
    <td
      className={`todo__table__data todo__table__data_cells ${addStyle}`}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      onKeyDown={onKeyDown}
      tabIndex={typeof content === "number" ? content + 1 : null}
    >
      {content}

      {(addStyle === 'todo__table__data_tasks'
        || addStyle === 'todo__table__data_tasks todo__table__data_choisen')
        && (
          <img
            className="todo__table__pin"
            src={imgPinBoardURL}
            alt="icon pin"
          />
        )}

      {(addStyle === 'todo__table__data_tasks'
        || addStyle === 'todo__table__data_tasks todo__table__data_choisen')
        && game
        && (
          <img
            className="todo__table__ball"
            src={imgBallURL}
            alt="icon ball"
          />
        )}

      {weatherObject
        && +currentDate.getMonth() === new Date().getMonth()
        && +currentDate.getFullYear() === new Date().getFullYear()
        && ((
          content === new Date().getDate()
          && (
            <img
              className="todo__table__sun"
              src={`https://openweathermap.org/img/w/${weatherObject[0].weather['0'].icon}.png`}
              alt="icon weather"
            />
          )
        ) || (
            content === new Date().getDate() + 1
            && (
              <img
                className="todo__table__sun"
                src={`https://openweathermap.org/img/w/${weatherObject[1].list[8].weather['0'].icon}.png`}
                alt="icon weather"
              />
            )
          ) || (
            content === new Date().getDate() + 2
            && (
              <img
                className="todo__table__sun"
                src={`https://openweathermap.org/img/w/${weatherObject[1].list[16].weather['0'].icon}.png`}
                alt="icon weather"
              />
            )
          ) || (
            content === new Date().getDate() + 3
            && (
              <img
                className="todo__table__sun"
                src={`https://openweathermap.org/img/w/${weatherObject[1].list[24].weather['0'].icon}.png`}
                alt="icon weather"
              />
            )
          ) || (
            content === new Date().getDate() + 4
            && (
              <img
                className="todo__table__sun"
                src={`https://openweathermap.org/img/w/${weatherObject[1].list[32].weather['0'].icon}.png`}
                alt="icon weather"
              />
            )
          ))}
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
