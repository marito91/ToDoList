import React, { useState, useRef } from 'react';

// CSS
import '../css/Main.css';

// Icons
import searchIcon from '../icons/search.svg';

export default function Search(props) {

    // Se inicializa la variable de filtro con un useState para que vaya tomando el valor que el 
    // usuario indica en el input de búsqueda. Se crea también el ref para ponerlo en el html.
    const [filter, setFilter] = useState('')

    const filterRef = useRef(null);

    // Se inicializa la función del manejo de evento para ubicarla en el html.
    const handleChangeFilter = event => {
        setFilter(event.target.value);
    }
    

    // En esta función, cuando el usuario aplique el submit, se enviará el filtro, que sería un
    // string, el cual se va a encargar de determinar la palabra que se va a buscar.
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
