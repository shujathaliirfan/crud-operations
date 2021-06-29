import React, { useState } from 'react';



export default function TodoForm({ addTodo ,remove}) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
        <div class="project-board-card-add-new">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
          
        />
        <button class="button">Add list</button>
        
      </form>
      <button class="button remove" onClick={remove}>close</button>
      </div>
    );
  }


    
 