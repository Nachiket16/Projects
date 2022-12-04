import React from 'react'
import Todo from './Todo'
const Todos = (props) => {
  return (
        <div className='container mx-3'>
           <h3>Todos List</h3> 
           <Todo todo={props.todos[0]} />
        </div>
  )
}

export default Todos