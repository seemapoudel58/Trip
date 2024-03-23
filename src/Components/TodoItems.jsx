import React from 'react'

const TodoItems = ({props}) =>{

    return(
        <li className='bg-black/70 px-3 py-1 rounded-md cursor-pointer hover:scale-105 transition-all duration-100 text-white'>
            {props.todo}
        </li>
    )

}
export default TodoItems;