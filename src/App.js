import React, { Component } from 'react'
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import Common from './pages/Common'
import PrivateRoute from './pages/protected';
import TrelloList from './pages/trello/TrelloList';
import TrelloCards from './pages/trello/TrelloCards';

export default class App extends Component {

      
   constructor(props){
    super(props)
    // this.state = {isAuth: false};
    // this.checkAuthentication = this.checkAuthentication.bind(this);
    // this.buttonSubmit = this.buttonSubmit.bind(this);
 }



//  componenDidMount(){
//   console.log('componentWillMount')
// }


//  buttonSubmit = () => {
//    this.setState({
//      isAuth:!this.state.isAuth
//    })
//  }

//       checkAuthentication() {
//         let token = localStorage.getItem('token');
//         console.log('home' + token)

//         if(token){
//           this.setState({
//             isAuth:!this.state.isAuth
//           })
          
//         }     
//       }

  render() {
    return (

     
      <Switch>
        <Route path="/" exact  component={Signup} />
        <PrivateRoute  path="/dashboard" exact component={Dashboard}/>              
        <Route   path="/login" component={Login}/> 
        <PrivateRoute  path="/trello" component={TrelloList}/> 
         {/* <Route   path="/tr" component={TrelloCards}/>     */}
           
        
      </Switch>



/* <Switch>
<Route path="/" exact  component={Signup} />
<Route path="/dashboard" exact render={()=> <Dashboard handle={this.buttonSubmit} auth={this.state.isAuth}/>}
// auth={this.state.isAuth}
//  exact component={Dashboard}
  />
<Route path="/login" exact render={()=> <Login handle={this.buttonSubmit} auth={this.state.isAuth}/>}

exact component={Login} />
<Redirect to="/common" />

</Switch> */


    )
  }
}

