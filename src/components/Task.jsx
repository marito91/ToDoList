import React, { useState } from 'react'

// Bootstrap

import Card from 'react-bootstrap/Card'

import Form from './Form'

// Icons
import completed from '../icons/completed.svg'
import editTask from '../icons/edit.svg'
import deleteTask from '../icons/delete.svg'

// Este componente determina todos los cambios que se hacen a las tareas con los parámetros en un JSON, por ende se comunica con el ToDoList 
// Los parámetros que se usan son los siguientes:
// tasks: recibe un array que contiene todas las tareas que se van agregando
// completeTask: que recibe un array con la lista actualizada de items con css aplicados
// removeTask: que recibe array actualizado sin las tareas que se optaron por eliminar
// updateTask: que recibe array con lista que 
export default function Task({ tasks, completeTask, removeTask, updateTask, filtered }) {

    // Se inicializa la variable edit, con un JSON vacío
    const [edit, setEdit] = useState ({
        id: null,
        value: '',
        text: ''

    });

    // A lo que el usuario presiona el editTask, updateTask recibe los parámetros de la tarea que se está
    // editando y la información respectiva. La variable edit se retorna a nulo con el setEdit.
    const submitUpdate = (value, text) => {
        updateTask(edit.id, value, text)
        setEdit({
            id: null,
            value:'',
            text: ''
        })

        console.log(edit)
    }

    // A lo que encuentra el id, aplica la función anterior
    if (edit.id) {
        return <Form edit={edit} onSubmit={submitUpdate} />
    }


    return (
        <>
            {
            filtered === null ? 
            /* Se crea un array donde se despliegan todas las tareas en tarjetas de bootstrap */
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
            )) : 
            /* Cuando el usuario usa el filtro, se despliegan las tarjetas que tienen en sus descripciones el filtro */
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
            }
        </>
    )
}
