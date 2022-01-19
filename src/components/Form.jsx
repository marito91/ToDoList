import React, { useState, useRef } from 'react'

// CSS
import '../css/Main.css';


export default function Form(props) {

    // Se inicializan las variables título y descripción y se les aplican los condicionales con el props 
    // para que cuando se renderice el componente se pueda indicar si se está editando una tarea vieja.
    // Se inicializan los ref también para poder desplegarlos en el html.

    const [title, setTitle] = useState(props.edit ? props.edit.value : '');
    const [descr, setDescr] = useState(props.edit ? props.edit.text : '');

    const titleRef = useRef(null);
    const descrRef = useRef(null);


    // Se creaan las funciones que manejan los eventos del título y la descripción para hacer más legible el
    // html posteriormente.
    const handleChangeTitle = event => {
        setTitle(event.target.value);
    }

    const handleChangeDescription = event => {
        setDescr(event.target.value);
    }

    const handleSubmit = h => {
        h.preventDefault();

        // Se indican los valores que se enviarán en un JSON para cada tarea
        props.onSubmit({
            id: Math.floor(Math.random() * 10000), // ID random
            text: title, // El título de la tarea
            description: descr // La descripción de la tarea
        });

        // Se reinician los valores de título y descripción en blanco
        setTitle('');
        setDescr('');

    };

    return (
        <form onSubmit={handleSubmit}>
            {props.edit ? (<> {/* Se carga el input y botón de editar tarea */ }
                                <input 
                                name="text" 
                                type="text" 
                                placeholder="Edit task description" 
                                value={descr} 
                                className="input-descr task-edit"
                                onChange={handleChangeDescription} 
                                ref={descrRef} /> 
                                <button className="todo-btn">Edit Task</button>
                            </>) :
                            (<> 
                                <input  
                                name="text" 
                                type="text" 
                                placeholder="Title" 
                                value={title} 
                                className="input-title" 
                                onChange={handleChangeTitle} 
                                ref={titleRef}
                                /> <br />
                                <input  
                                name="text" 
                                type="text" 
                                placeholder="Description" 
                                value={descr} 
                                className="input-descr" 
                                onChange={handleChangeDescription} 
                                ref={descrRef}
                                /> <br />
                                <button className="todo-btn" style={{ marginBottom:"2%" }}>Add task</button> <br />
                            </>)
                        }
        </form>
    )
}
