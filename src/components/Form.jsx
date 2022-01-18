import React, { useState, useEffect, useRef } from 'react'

// CSS
import '../css/Main.css';

export default function Form(props) {

    const [title, setTitle] = useState(props.edit ? props.edit.value : '');

    const [descr, setDescr] = useState(props.edit ? props.edit.value : '');

    const titleRef = useRef(null);
    const descrRef = useRef(null);


    const handleChangeTitle = h => {
        setTitle(h.target.value);
    }

    const handleChangeDescription = h => {
        setDescr(h.target.value);
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
                            placeholder="Edit task name" 
                            value={descr} 
                            className="input" 
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
                            required /> <br />
                            <input  
                            name="text" 
                            type="text" 
                            placeholder="Description" 
                            value={descr} 
                            className="input-descr" 
                            onChange={handleChangeDescription} 
                            ref={descrRef}
                            required /> <br />
                            <button className="todo-btn">Add task</button>
                            </>)
                        }
        </form>
    )
}
