import { useState, useEffect } from 'react'
import TodoModel from '../models/Todo'
import Todos from '../components/Todos'
import CreateToDoForm from '../components/CreateToDoForm'

export default function TodosContainer(){
    const [todos, setTodos] = useState([])

    useEffect(()=> {
        const fetchData = async()=> {
            const res = await TodoModel.all()
            console.log(res)
            setTodos(res.data)
        }
        fetchData()
    }, [])

    const createTodo = async(todo) {
        let newTodo = {
            body: todo,
            completed: false
        }

        const anotherTodo = await TodoModel.create(newTodo)
        setTodos([...todos], anotherTodo)
    }

    return (
        <div className='todosContainer'>
            <CreateToDoForm />
            <Todos todos={todos} />
            <h1>TodosContainer</h1>
        </div>
    );
}