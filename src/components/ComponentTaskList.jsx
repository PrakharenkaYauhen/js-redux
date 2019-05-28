// ComponentTaskList

import React from 'react';
import PropTypes from 'prop-types';
import { ComponentOneTaskInList } from './ComponentOneTaskInList'

function ComponentTaskList({
    currentLocalStorageKey,
    todaysTasks,
    donesTasks
}) {

    let todaysTasksList = () => {
        let tasks = todaysTasks.map(item => <ComponentOneTaskInList
            currentLocalStorageKey={currentLocalStorageKey}
            task={item.content}
            key={item.id} />)
        return <ol className='todo__tasks__list'>{tasks}</ol>;
    }

    let donesTasksList = () => {
        let tasks = donesTasks.map(item => <ComponentOneTaskInList
            currentLocalStorageKey={currentLocalStorageKey}
            task={item.content}
            key={item.id} />)
        return <ul className='todo__tasks__list'>{tasks}</ul>;
    }

    return (
        <div className='todo__tasks'>
            {todaysTasks && <><h2 className='todo__header2'>Today's tasks</h2>
                {todaysTasksList()}</>}
            {donesTasks && <><h2 className='todo__header2'>Today's done's tasks</h2>
                {donesTasksList()}</>}
        </div>
    )
}

ComponentTaskList.propTypes = {
    currentLocalStorageKey: PropTypes.string,
    todaysTasks: PropTypes.array,
    donesTasks: PropTypes.array,
}

export { ComponentTaskList };