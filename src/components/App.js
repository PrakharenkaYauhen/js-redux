import React from 'react'

import { TodoCalendar } from '../containers/ContainerTodoCalendar.jsx';
import { ContainerWeather } from '../containers/ContainerWeather.jsx';
import { ContainerJuventus } from '../containers/ContainerJuventus.jsx';
import { ContainerAddTaskToList } from '../containers/ContainerAddTaskToList.jsx';
import { ContainerTaskList } from '../containers/ContainerTaskList.jsx';
import { ContainerTaskSearch } from '../containers/ContainerTaskSearch.jsx';
import { ComponentReduxForm } from '../components/ComponentReduxForm.jsx';

const App = () => (
    <div>
        <h1 className='todo__header1'>To-do list</h1>
        <div className='todo'>
            <TodoCalendar />
            <ContainerWeather />
            <ContainerJuventus />
            <ContainerTaskSearch />
            <ContainerAddTaskToList />
            <ContainerTaskList />
            <ComponentReduxForm />
        </div>
    </div>
)

export default App