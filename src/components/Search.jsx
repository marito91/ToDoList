import React, { useState, useRef } from 'react';

// CSS
import '../css/Main.css';

// Icons
import searchIcon from '../icons/search.svg';

export default function Search(props) {

    const [filter, setFilter] = useState('')

    const filterRef = useRef(null);

    const handleChangeFilter = event => {
        setFilter(event.target.value);
    }

    const handleSubmit = h => {
        h.preventDefault();

        props.onSubmit(filter);

    };

    return (
            <form onSubmit={handleSubmit}>
                <input  
                name="filter" 
                type="text" 
                id="filter"
                placeholder="Search..." 
                value={filter} 
                className="input-info" 
                onChange={handleChangeFilter} 
                ref={filterRef} /> 
                <button className="todo-btn" style={{ marginBottom:"2%" }}> <img src={searchIcon} className='search-icon' alt="" /> </button>           
            </form>
    )
}
