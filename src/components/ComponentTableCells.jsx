// ComponentTableCells Component

import React from 'react';
import PropTypes from 'prop-types';
import imgPinBoardURL from './../pin-board150.png';
import imgBallURL from './../ball150.png';

function ComponentTableCells({ 
    currentDate, 
    weatherObject,
    game, 
    content, 
    onClick, 
    onDoubleClick, 
    addStyle, 
 }) {

    return (
        <td className={'todo__table__data todo__table__data_cells ' + addStyle}
            onClick={onClick}
            onDoubleClick={onDoubleClick}
        >
            {content}

            {(addStyle === 'todo__table__data_tasks' ||
                addStyle === 'todo__table__data_tasks todo__table__data_choisen') &&
                <img className='todo__table__pin'
                    src={imgPinBoardURL}
                    alt="icon pin"
                />}

            {(addStyle === 'todo__table__data_tasks' ||
                addStyle === 'todo__table__data_tasks todo__table__data_choisen') &&
                game
                && <img className='todo__table__ball'
                    src={imgBallURL}
                    alt="icon ball"
                />}

            {weatherObject &&
                +currentDate.getMonth() === new Date().getMonth() &&
                +currentDate.getFullYear() === new Date().getFullYear() &&
                ((
                    content === new Date().getDate() &&
                    <img
                        className='todo__table__sun'
                        src={"https://openweathermap.org/img/w/" + weatherObject[0].weather['0'].icon + ".png"}
                        alt="icon weather"
                    />
                ) || (
                        content === new Date().getDate() + 1 &&
                        <img
                            className='todo__table__sun'
                            src={"https://openweathermap.org/img/w/" + weatherObject[1].list[8].weather['0'].icon + ".png"}
                            alt="icon weather"
                        />
                    ) || (
                        content === new Date().getDate() + 2 &&
                        <img
                            className='todo__table__sun'
                            src={"https://openweathermap.org/img/w/" + weatherObject[1].list[16].weather['0'].icon + ".png"}
                            alt="icon weather"
                        />
                    ) || (
                        content === new Date().getDate() + 3 &&
                        <img
                            className='todo__table__sun'
                            src={"https://openweathermap.org/img/w/" + weatherObject[1].list[24].weather['0'].icon + ".png"}
                            alt="icon weather"
                        />
                    ) || (
                        content === new Date().getDate() + 4 &&
                        <img
                            className='todo__table__sun'
                            src={"https://openweathermap.org/img/w/" + weatherObject[1].list[32].weather['0'].icon + ".png"}
                            alt="icon weather"
                        />
                    ))}
        </td>
    );
}

export { ComponentTableCells };

ComponentTableCells.propTypes = {
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    addStyle: PropTypes.string,
    game: PropTypes.bool,
    weatherObject: PropTypes.array,
}