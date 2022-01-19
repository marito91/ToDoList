import React, { useState, useRef } from 'react'

// CSS
import '../css/Main.css';


export default function Form(props) {

    const [title, setTitle] = useState(props.edit ? props.edit.value : '');

    const [descr, setDescr] = useState(props.edit ? props.edit.text : '');

    const titleRef = useRef(null);
    const descrRef = useRef(null);


    const handleChangeTitle = event => {
        setTitle(event.target.value);
    }

    const handleChangeDescription = event => {
        setDescr(event.target.value);
    }

    const handleSubmit = h => {
        h.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: title,
            description: descr
        });

        setTitle('');
        setDescr('');

    };

    return (
        <form onSubmit={handleSubmit}>
            {props.edit ? (<>
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
