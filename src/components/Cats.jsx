import React, { useState, useRef } from 'react'

export default function Cats(props) {

    const [numberOfFacts, setNumberOfFacts] = useState('');

    const numberOfFactsRef = useRef(null);

    const handleChangeFacts = event => {
        setNumberOfFacts(event.target.value);
    }

    const handleSubmit = h => {
        h.preventDefault();

        props.onSubmit(numberOfFacts);

    };



    return (
        <form onSubmit={handleSubmit}>
            <input  
                name="filter" 
                type="text" 
                id="filter"
                placeholder="How many you want? 10 max." 
                value={numberOfFacts} 
                className="input-cats" 
                onChange={handleChangeFacts} 
                ref={numberOfFactsRef} /> 
            <button className="todo-btn search-btn">Give Me Cat Facts!</button>           
        </form>
    )
}
