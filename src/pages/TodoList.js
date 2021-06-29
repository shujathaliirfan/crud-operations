import React from 'react'

export default function TodoList({names,delTodo ,id}) {

    // console.log("namess" + names.id)
    return (
    	<div class="bet">
        <h6 class="project-board-card-content-list" key={id}>{names.name}
        <img onClick={()=>delTodo(names.id)} class="icon-sm icon" src="https://jpelaa.github.io/agileboard/static/media/trash.1333cc6b.svg" alt="delete icon"></img></h6>

        </div>
    )     
    }