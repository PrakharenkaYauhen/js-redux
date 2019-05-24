import React from 'react';
import imgPinBoardURL from './../pin-board150.png';
import imgBallURL from './../ball150.png';

// ComponentTableCells Component

function ComponentTableCells({ content, onClick, onDoubleClick, addStyle, game, weatherObject, currentLocalStorageKey }) {
    // console.log(weatherObject);
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
            {weatherObject && content === new Date().getDate() && <img className='todo__table__sun'
                src={"https://openweathermap.org/img/w/" + weatherObject[0].weather['0'].icon + ".png"}
                alt="icon weather" />}
            {weatherObject && content === new Date().getDate() + 1 && <img className='todo__table__sun'
                src={"https://openweathermap.org/img/w/" + weatherObject[1].list[9 + ''].weather['0'].icon + ".png"}
                alt="icon weather" />}
            {weatherObject && content === new Date().getDate() + 2 && <img className='todo__table__sun'
                src={"https://openweathermap.org/img/w/" + weatherObject[1].list[17 + ''].weather['0'].icon + ".png"}
                alt="icon weather" />}
            {weatherObject && content === new Date().getDate() + 3 && <img className='todo__table__sun'
                src={"https://openweathermap.org/img/w/" + weatherObject[1].list[25 + ''].weather['0'].icon + ".png"}
                alt="icon weather" />}
            {weatherObject && content === new Date().getDate() + 4 && <img className='todo__table__sun'
                src={"https://openweathermap.org/img/w/" + weatherObject[1].list[33 + ''].weather['0'].icon + ".png"}
                alt="icon weather" />}
        </td>
    );
}

export { ComponentTableCells };