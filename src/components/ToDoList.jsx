import React, { useState } from 'react'

import Form from './Form'
import Todo from './Todo'

export default function ToDoList() {

    const [list, setList] = useState([]);

    const add = task => {
        const newList = [task, ...list]

        setList(newList);
    }

    const update = (taskId, newValue) => {
        setList(prev => prev.map(item => (item.id === taskId ? newValue : item))
        );
    };

    const remove = id => {
        const removeArr = [...list].filter(task => task.id !== id)

        setList(removeArr)
    }

    const complete = id => {
        let updatedTasks = list.map(task => {
            if (task.id === id) {
                task.isComplete = !task.isComplete
            }
            return task
        })

        setList(updatedTasks)
    }

    return (
        <div>
            <Form onSubmit={add} />
            <Todo tasks={list} completeTask={complete} removeTask={remove} updateTask={update}/>
        </div>
    )
}
