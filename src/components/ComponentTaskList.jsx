// ComponentTaskList

import React from 'react';
import PropTypes from 'prop-types';
import ComponentOneTaskInList from './ComponentOneTaskInList';

function ComponentTaskList({
  todaysTasks,
  donesTasks,
}) {
  const todaysTasksList = () => {
    const tasks = todaysTasks.map(item => (
      <ComponentOneTaskInList
        task={item.content}
        key={item.id}
      />
    ));
    return <ol className="todo__tasks__list">{tasks}</ol>;
  };

  const donesTasksList = () => {
    const tasks = donesTasks.map(item => (
      <ComponentOneTaskInList
        task={item.content}
        key={item.id}
      />
    ));
    return <ul className="todo__tasks__list">{tasks}</ul>;
  };

  return (todaysTasks || donesTasks)
    ? (
      <div className="todo__tasks">
        {todaysTasks
          && <>
            <h2 className="todo__header2">Today&apos;s tasks</h2>
            {todaysTasksList()}
          </>}
        {donesTasks
          && <>
            <h2 className="todo__header2">Today&apos;s done&apos;s tasks</h2>
            {donesTasksList()}
          </>}
      </div>
    ) : (
      <div className="todo__tasks" hidden />
    );
}

ComponentTaskList.defaultProps = {
  todaysTasks: [],
  donesTasks: [],
};

ComponentTaskList.propTypes = {
  todaysTasks: PropTypes.instanceOf(Array),
  donesTasks: PropTypes.instanceOf(Array),
};

export default ComponentTaskList;
