import React, { useState,useRef,useEffect, useReducer } from 'react';

import TodoList from './TodoList';
const LOCAL_STORAGE_KEY = 'todoApp.todos'
export default function Sample() {


    const initialTodos = [
        {
          id: 1,
          name: "Todo 1",
          complete: false,
        }];
    
//The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.
//can be used in all cases whenever we have complex state management so that we take initial state and apply some logic to convert into a new state
//The useReducer Hook returns the current state and a dispatch method.
  const reducer = (state,action)=>{
      switch(action.type){
          case 'COMPLETE':{
            return state.map(todo=>{
                if(todo.id ===action.id){
                    return {...todo, complete:!todo.complete}
                }else{
                    return todo;
                }
            })
          }
          default:
              return state;
      }
  }

  const [todosNew, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  const [sum,dispatchSumAction] = useReducer((state,action)=>{
    return state + action;
  },0);


  const [todos,setTodos] = useState([]);
  const todoNameRef = useRef();


  useEffect(()=>{
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        setTodos(storedTodos);
  },[])

  useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos));
  },[todos])


  function handleAddTodo(){
    let name = todoNameRef.current.value;
    if(name==='') return;
    setTodos(prevTodos=>{
        return [...prevTodos,{id:Math.random(),name:name,complete:false}]
    })
    todoNameRef.current.value = null;
  }

  function clearTodos(){
      const newTodos = todos.filter(todo=>!todo.complete);
      setTodos(newTodos);
  }

  function toggleTodo(id){
      const newTodos = [...todos];
      const todo = newTodos.find(todo=>todo.id===id);
      todo.complete = !todo.complete;
      setTodos(newTodos)
  }


  return (
    <div>
       {sum}
      <button onClick={() => dispatchSumAction(1)}>Add 1</button>
      {todosNew.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.name}
          </label>
        </div>
      ))}


     <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo}>Add ToDo</button>
      <button onClick={clearTodos}>Clear Todos</button>
      <p>{todos.filter(todo=>!todo.complete).length} todos left</p>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </div>
  )
}
