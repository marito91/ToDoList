import React, { useState } from 'react'

// Components
import Search from './Search';
import Form from './Form'
import Task from './Task'
import Cats from './Cats'

export default function ToDoList() {

    // Se utiliza un useState para crear un array que va a contener todas las tareas (tasks)
    // Este list se va actualizando en la medida en la que se agregan, quitan o editan tareas.
    const [list, setList] = useState([]);

    const[filteredList, setFilteredList] = useState(null);

    // Se crea una función que va a agregar cada nueva tarea a la lista. En esta función se agrega la nueva tarea
    // junto a las existentes para crear una nueva lista actualizada. (aplica para lista filtrada también)
    const add = task => {
        const newList = [task, ...list]

        setList(newList);

        const newFilteredList = [task, ...list]

        setFilteredList(newFilteredList)

        // Se hace seguimiento en consola
        console.log(newList)
    }

    // Esta función recibe el id de la tarea e identifica el valor para generar el nuevo array con la nueva descripción.
    // Aplica para ambas listas
    const update = (taskId, newDescription) => {
        setList(origin => origin.map(item => (item.id === taskId ? newDescription : item))
        );

        setFilteredList(origin => origin.map(item => (item.id === taskId ? newDescription : item))
        );
    };

    // Esta función va a recibir como parámetro el id de la tarea, y se utiliza el método de filter para crear un 
    // nuevo array donde se haya omitido la tarea que determinó el id del parámetro.
    const remove = id => {
        const newArray = [...list].filter(task => task.id !== id)

        setList(newArray)

        const newFilteredArray = [...filteredList].filter(task => task.id !== id)

        setFilteredList(newFilteredArray)
    }


    // Esta función permitirá crear una nueva lista filtrada según el parámetro "text" que recibe. Si "text" está vacío
    // entonces lanzará una alerta que dice que no se encontraron resultados. De lo contrario revisará si la lista principal
    // contiene el parámetro "text" entre las descripciones. Esto se hace en lowercase para atinar la búsqueda.
    const search = text => {

        console.log(list)

        let newArray;

        if (text === '') {
            window.alert("No results found.")
            setFilteredList(list)
        } else {
            newArray = list.filter( (l) => l.description.toLowerCase().includes(text.toLowerCase()))
            setFilteredList(newArray)
        }

        console.log(newArray)
    }

    // Esta función identifica la tarea que se completó para actualizarla y aplicarle el css correspondiente.
    const complete = id => {
        let updatedTasks = list.map(task => {
            if (task.id === id) {
                task.isComplete = !task.isComplete
            }
            return task
        })

        setList(updatedTasks)
    }


    const catFacts = (() => 
        fetch('https://catfact.ninja/docs', {
            method:"GET",
            headers: { "content-type": "application/json",
                        "Access-Control-Allow-Headers" : "Content-Type",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "OPTIONS,POST,GET" 
                    }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    )




    return (
        <div>
            {/*Se despliegan todos los componentes con sus respectivos props*/}
            <Form onSubmit={add} />
            {/* Se determinan l@s funciones/datos que se van a utilizar para cada parámetro */}
            <Task tasks={list} completeTask={complete} removeTask={remove} updateTask={update} filtered={filteredList} />
            <Search onSubmit={search}/>
            <Cats onSubmit={catFacts} />
        </div>
    )
}
