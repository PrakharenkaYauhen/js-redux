import React from 'react';

// TableCellsVisionDatesWithTasks Component

function TableCellsVisionDatesWithTasks(props) {
    return (
        <td className='todo__table__data todo__table__data_cells todo__table__data_tasks'
            onClick={props.onClick}>
            {props.content}
        </td>
    );
}

export { TableCellsVisionDatesWithTasks };