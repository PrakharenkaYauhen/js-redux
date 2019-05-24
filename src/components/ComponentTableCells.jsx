// ComponentTableCells Component

import React from 'react';
import PropTypes from 'prop-types';
import imgPinBoardURL from './../pin-board150.png';
import imgBallURL from './../ball150.png';

function ComponentTableCells({ currentDate, content, onClick, onDoubleClick, addStyle, game, weatherObject }) {
    // weatherObject && console.log(weatherObject[1].list);
    // let weatherIcons;
    // let weatherIcons1;
    // if (weatherObject) {
    //     weatherIcons = weatherObject[1].list.filter((item, i) => i === 7 || i === 15 || i === 23 || i === 31);
    //     weatherIcons1 = weatherIcons.map((item, i) => {
    //         console.log(item);
    //         console.log(i);
    //         return <img className='todo__table__sun'
    //             src={"https://openweathermap.org/img/w/" + item.weather['0'].icon + ".png"}
    //             alt="icon weather" />
    //     });
    // }

    // console.log(weatherIcons);
    // console.log(weatherIcons1);
    return (
        <td className={'todo__table__data todo__table__data_cells ' + addStyle}
            onClick={onClick}
            onDoubleClick={onDoubleClick}
        >
            {content}
            {addStyle === 'todo__table__data_tasks' && <img className='todo__table__pin'
                src={imgPinBoardURL}
                alt="icon pin" />}
            {addStyle === 'todo__table__data_tasks todo__table__data_choisen' && <img className='todo__table__pin'
                src={imgPinBoardURL}
                alt="icon pin" />}
            {addStyle === 'todo__table__data_tasks' && game && <img className='todo__table__ball'
                src={imgBallURL}
                alt="icon ball" />}
            {addStyle === 'todo__table__data_tasks todo__table__data_choisen' && game && <img className='todo__table__ball'
                src={imgBallURL}
                alt="icon ball" />}
            {weatherObject && content === new Date().getDate()
                && +currentDate.getMonth() === new Date().getMonth()
                && +currentDate.getFullYear() === new Date().getFullYear()
                && <img className='todo__table__sun'
                    src={"https://openweathermap.org/img/w/" + weatherObject[0].weather['0'].icon + ".png"}
                    alt="icon weather" />}
            {weatherObject && content === new Date().getDate() + 1
                && +currentDate.getMonth() === new Date().getMonth()
                && +currentDate.getFullYear() === new Date().getFullYear()
                && <img className='todo__table__sun'
                    src={"https://openweathermap.org/img/w/" + weatherObject[1].list[9].weather['0'].icon + ".png"}
                    alt="icon weather" />}
            {weatherObject && content === new Date().getDate() + 2
                && +currentDate.getMonth() === new Date().getMonth()
                && +currentDate.getFullYear() === new Date().getFullYear()
                && <img className='todo__table__sun'
                    src={"https://openweathermap.org/img/w/" + weatherObject[1].list[17].weather['0'].icon + ".png"}
                    alt="icon weather" />}
            {weatherObject && content === new Date().getDate() + 3
                && +currentDate.getMonth() === new Date().getMonth()
                && +currentDate.getFullYear() === new Date().getFullYear()
                && <img className='todo__table__sun'
                    src={"https://openweathermap.org/img/w/" + weatherObject[1].list[25].weather['0'].icon + ".png"}
                    alt="icon weather" />}
            {weatherObject && content === new Date().getDate() + 4
                && +currentDate.getMonth() === new Date().getMonth()
                && +currentDate.getFullYear() === new Date().getFullYear()
                && <img className='todo__table__sun'
                    src={"https://openweathermap.org/img/w/" + weatherObject[1].list[33].weather['0'].icon + ".png"}
                    alt="icon weather" />}
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