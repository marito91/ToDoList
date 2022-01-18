import React, { useState, useEffect, useRef } from 'react'

// CSS
import '../css/Main.css';

export default function Form(props) {

    const [userInput, setUserInput] = useState(props.edit ? props.edit.value : '');

    const userInputRef = useRef(null);

    useEffect(() => {
        userInputRef.current.focus()
    })

    const handleChange = h => {
        setUserInput(h.target.value);
    }

    const handleSubmit = h => {
        h.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: userInput
        });

        setUserInput('');
    };

    return (
        <form onSubmit={handleSubmit}>
            {props.edit ? (<>
                            <input 
                            name="text" 
                            type="text" 
                            placeholder="Edit task" 
                            value={userInput} 
                            className="input" 
                            onChange={handleChange} 
                            ref={userInputRef} />
                            <button className="todo-btn">Edit Task</button>
                            </>) :
                            (<>
                            <input  
                            name="text" 
                            type="text" 
                            placeholder="Add a task!" 
                            value={userInput} 
                            className="input" 
                            onChange={handleChange} 
                            ref={userInputRef} />
                            <button className="todo-btn">Add task</button>
                            </>)
                        }
        </form>
    )
}
