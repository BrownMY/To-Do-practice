import React, { useState } from 'react';

const CreateToDoForm = () => {
    const [todo, setTodo] = useState('')

    const onInputChange = (event) => {
        //the value yes event.target
        setTodo(event.target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault()
        //call a function passed down as props
        props.createTodo()
    }

    return (
        <div>
            <form onSubmit>
                <input onChange={ onInputChange }
                type="text" id="newItemDescription"
                placeholder="New todo here"
                value={todo}
                />
                <button type="submit" id="addTask" className='btn'>Add todo</button>
            </form>
        </div>
    );
}

export default CreateToDoForm;
