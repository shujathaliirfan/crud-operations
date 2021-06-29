import React from "react";
import "./todo.css";
import TodoList from './TodoList'

function TodoLists({ todos ,delTodo}) {
  const items = todos.map((name, id) => (
    <TodoList  names={name} key={id} delTodo={delTodo}/>
  ));
  return <div className="therapist-list">{items}</div>;
}

export default TodoLists;
// 8056454424 afroze