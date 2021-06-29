import React, { Component } from 'react';
import './todo.css';
import TodoForm from './TodoForm'
import TodoLists from './TodoLists'
import { useState } from "react";
import AddNew from './AddNew'
import {  Link } from "react-router-dom"

import uuid from 'react-uuid' 


export default class Dashboard extends Component {
      
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: [],
       show:true
    }

    this.addTodo = this.addTodo.bind(this);
    // this.handleInput = this.handleInput.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
    this.removeClick = this.removeClick.bind(this);
  }

  addTodo(val){
    const todo = {id: uuid(),name: val}        
    // var newTodo = this.state.data.concat(todo);          
    this.setState(prevState => ({
     data: [...prevState.data, todo]
      
    }));
  }
         

  toggleClick(){
    const doesShow =  this.state.show;
    this.setState({
      show:!doesShow

    })
  }
     
  removeClick() {
    this.setState({
      show:true
    })
  }

  handleRemove(id){  
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });
    this.setState({data: remainder});      
      }
  
 
  render() {

    let { data , show} = this.state;
    console.log(data,show)

    return (
       
           
      
      <div class="dashboard">
        <h1 class="project-header">Trello Client</h1>
        <div class="project-board" >
        <div class="project-board-card">
        <TodoLists  todos= {this.state.data} delTodo={this.handleRemove }/> 
          { show ? <AddNew  addClick={this.toggleClick} /> : 
           <TodoForm addTodo={this.addTodo} remove={this.removeClick }/>}
        
       
               
      </div>
      </div>
      <h1><Link to ="/trello">trello is here</Link></h1>
      </div>
     
    )
  }
}

