import React from 'react';

// TableCellsVision Component

function TableCellsVision(props) {
    return (
        <td className='todo__table__data todo__table__data_cells'
            onClick={props.onClick}>
            {props.content}
        </td>
    );
}

export { TableCellsVision };