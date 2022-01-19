import React, { useState } from 'react'

// Bootstrap

import Card from 'react-bootstrap/Card'

import Form from './Form'

// Icons
import completed from '../icons/completed.svg'
import editTask from '../icons/edit.svg'
import deleteTask from '../icons/delete.svg'


export default function Task({ tasks, completeTask, removeTask, updateTask, filtered }) {

    const [edit, setEdit] = useState ({
        id: null,
        value: '',
        text: ''

    });


    const submitUpdate = (value, text) => {
        updateTask(edit.id, value, text)
        setEdit({
            id: null,
            value:'',
            text: ''
        })

        console.log(edit)
    }

    if (edit.id) {
        return <Form edit={edit} onSubmit={submitUpdate} />
    }

    console.log(tasks)


    return (
        <>
            {
            filtered === null ? 
            tasks.map((task, index) => (
                <Card className={task.isComplete ? 'task-row done' : 'task-row'} key={index}>
                    <Card.Header key={task.id} onClick={() => completeTask(task.id)}><strong>{task.text}</strong></Card.Header>
                    <Card.Body>
                      <Card.Text>
                        {task.description}
                      </Card.Text>
                          <img src={completed} className="check" onClick={() => completeTask(task.id)} alt="" />
                          <img src={editTask} className="edit" onClick={() => setEdit({ id: task.id, value: task.text, text: task.description })} alt="" />
                          <img src={deleteTask} className="delete" onClick={() => removeTask(task.id)} alt="" />
                    </Card.Body>
                </Card>
            )) : filtered.map((text, index) => (
                <Card className={text.isComplete ? 'task-row done' : 'task-row'} key={index}>
                    <Card.Header key={text.id} onClick={() => completeTask(text.id)}><strong>{text.text}</strong></Card.Header>
                    <Card.Body>
                      <Card.Text>
                        {text.description}
                      </Card.Text>
                          <img src={completed} className="check" onClick={() => completeTask(text.id)} alt="" />
                          <img src={editTask} className="edit" onClick={() => setEdit({ id: text.id, value: text.text, text: text.description })} alt="" />
                          <img src={deleteTask} className="delete" onClick={() => removeTask(text.id)} alt="" />
                    </Card.Body>
                  </Card>
            ))
            }
        </>
    )
}



/*
            filtered.map((text, index) => (
                <Card className={text.isComplete ? 'task-row done' : 'task-row'} key={index}>
                    <Card.Header key={text.id} onClick={() => completeTask(text.id)}><strong>{text.text}</strong></Card.Header>
                    <Card.Body>
                      <Card.Text>
                        {text.description}
                      </Card.Text>
                          <img src={completed} className="check" onClick={() => completeTask(text.id)} alt="" />
                          <img src={editTask} className="edit" onClick={() => setEdit({ id: text.id, value: text.text, text: text.description })} alt="" />
                          <img src={deleteTask} className="delete" onClick={() => removeTask(text.id)} alt="" />
                    </Card.Body>
                  </Card> 
            ))
*/