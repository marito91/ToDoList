import React, { useState } from 'react'

import Form from './Form'

// Icons
import completed from '../icons/completed.svg'
import editTask from '../icons/edit.svg'
import deleteTask from '../icons/delete.svg'


export default function Task({ tasks, completeTask, removeTask, updateTask }) {

    const [edit, setEdit] = useState ({
        id: null,
        value: ''
    });


    const submitUpdate = value => {
        updateTask(edit.id, value)
        setEdit({
            id: null,
            value:''
        })
    }

    if (edit.id) {
        return <Form edit={edit} onSubmit={submitUpdate} />
    }

    return (
        <>
            {tasks.map((task, index) => (
                    <div className={task.isComplete ? 'task-row done' : 'task-row'} key={index}>
                        <div key={task.id} onClick={() => completeTask(task.id)}>
                            {task.text}
                        </div>
                        <div className="icons">
                            <img src={editTask} className="edit" onClick={() => setEdit({ id: task.id, value: task.text })} alt="" />
                            <img src={completed} className="check" onClick={() => completeTask(task.id)} alt="" />
                            <img src={deleteTask} className="delete" onClick={() => removeTask(task.id)} alt="" />
                        </div>
                    </div>
            ))};
        </>
    )
}
