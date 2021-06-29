import React from "react";
import { Redirect } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

export default function Dashboard(props) {

  let history = useHistory();

  const [user, setUser] = useState(null)


 

  useEffect(() => {
    const token = localStorage.getItem('token');
    const result = JSON.parse(token);
    const person =  result.username
    setUser(person)
    
  }, [user])



const handle = ()=> {
  localStorage.removeItem('token');
  history.push('/login')
}




  return (
    <div>
      <h4>welcome to {user} dashboard</h4>
      <button onClick={handle}>submit</button>
          </div>
  )

}



import React from 'react'

export default function TodoList({names}) {

    // console.log("namess" + names.id)
    return (
    	<div>
        <p>{names.name}</p>

        </div>
    )     
    }
    ==================


    import React, { Component } from 'react';
import './todo.css';
import TodoForm from './TodoForm'
import TodoLists from './TodoLists'
import { useState } from "react";

import uuid from 'react-uuid' 


export default class Dashboard extends Component {
      
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    }l

    this.addTodo = this.addTodo.bind(this);
    // this.handleInput = this.handleInput.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  addTodo(val){
    const todo = {id: uuid(),name: val}        
    // var newTodo = this.state.data.concat(todo);          
    this.setState(prevState => ({
     data: [...prevState.data, todo]
      
    }));
  }
         
      

  handleRemove(id){  
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });
    this.setState({data: remainder});      
      }
  
 
  render() {

    let { data } = this.state;
    console.log(data)

    return (
       
           
      
      <div class="dashboard">
        <h1 class="project-header">Trello Client</h1>
        <div class="project-board">
        <div class="project-board-card">
        <TodoForm addTodo={this.addTodo}/>
        <TodoLists  todos= {this.state.data} />
        
      </div>
      </div>
      </div>
    )
  }
}

