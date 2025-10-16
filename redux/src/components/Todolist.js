import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Todolist() {
  let [string, setstring] = useState('');
  let dispatch = useDispatch();
  let todos = useSelector(store => store || []);
  let todo=todos.Todolistreducer.string

  const addTodo = () => {
    if (string.trim() !== '') {
      dispatch({ type: "addvalues", data: string });
      setstring('');
    }
  }

  const deleteTodo = (index) => {
    let updatedTodos = todo.filter((_, i) => i !== index);
    dispatch({ type: "replaceTodos", data: updatedTodos });
  }
let addbutton=(index)=>{
   if(index===0)return;
   let addbutton=[...todo];
  [addbutton[index-1],addbutton[index]]=[addbutton[index],addbutton[index-1]]
  dispatch({type:"upwards",data:addbutton})
}
let downwards=(index)=>{
  let down=[...todo];
  [down[index+1],down[index]]= [down[index],down[index+1]]
  dispatch({type:"downwards",data:down})

}
  return (
    <div id="todo">
      <h1>Todolist</h1>
      <input 
        type='text' 
        value={string} 
        onChange={(e) => setstring(e.target.value)} 
      />
      <button type='button' onClick={addTodo}>Add</button>

      <ol>
        {todo.map((ele, i) => (
          <li key={i}>
            {ele} 
            <button type='button' onClick={() => {deleteTodo(i)}}>Delete</button>
            <button type='button' onClick={()=>{addbutton(i)}}>upward</button>
             <button type='button' onClick={()=>{downwards(i)}}>downward</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todolist;
