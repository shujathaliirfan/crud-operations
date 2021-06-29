import React, { Component } from "react";
import { Icon } from '@material-ui/core';
import Textarea from 'react-textarea-autosize'
import Card from "@material-ui/core/Card";
import Button from '@material-ui/core/Button';
import {connect} from "react-redux";
import {addList,addCard} from "../../store/Actions/index"
 
class TrelloButton extends Component {
state = {
  formOpen : false,
  text:" "
};

openForm =() => {
  this.setState({
    formOpen:true
  })

}

closeForm = (e) => {
this.setState({
  formOpen:false
})
}

handleInputChange = (e)=> {
  this.setState({
    text:e.target.value
  })
}

handleAddCard = () =>{
  const {dispatch,listID} = this.props;
  const {text} = this.state;
  if(text) {
    dispatch(addCard(text,listID))
  }
}

handleAddList =()=> {

  const {dispatch} = this.props;
  const {text} = this.state;
  if(text){
    this.setState({
      text:""
    })
    dispatch(addList(text))
  }
  return;
}



  renderAddButton = () => {
    const { list } = this.props;

    const buttonText = list ? "Add another list" : "Add another card";
    const buttonTextOpacity = list ? "1" : "0.5";
    const buttonTextColor = list ? "whitet" : "inherit";
    const buttonTextBackgorund = list ? "rgba(0,0,0,0.5)" : "inherit";

    return (
      <div onClick={this.openForm} style={{
        ...styles.openForButtonGroup,
          opacity:buttonTextOpacity,
          color:buttonTextColor,
          backgroundColor: buttonTextBackgorund
      }} >
        {/* <Icon>add</Icon> */}
        <h4 sytle={{color:"white"}}> + {buttonText}</h4>
      </div>
    );
  };
  

 renderForm = () => {

  const {list }  =  this.props;
  const placeholder = list ? "Enter list title" : "Enter a title for this card";
  const buttonTitle = list ? "Add List" : "Add Card"
   return <div>
       <Card style={{
         overflow:"hidden",
         minHeight:80,
         minWidth:272,
         padding:"6px 8px 2px"
       }}>
        <Textarea  placeholder={placeholder} 
        autoFocus onBlur={this.closeForm}
        value={this.state.text}
        onChange ={this.handleInputChange}
        style={{
          resize:"none",
          width:"100%",
          outline:"none",
          overflow:"hidden",
          border:"none"
        }}
        />       
       </Card>
       <div style={styles.formButton}>
 <Button onMouseDown={ list ? this.handleAddList : this.handleAddCard}
 variant="contained"
 sytle={{color:"white",backgroundColor:"#5aac44"}}>
 {buttonTitle}
 </Button>
 <h3 style={{marginLeft:8,cursor:"pointer"}} onClick={this.closeForm}>x</h3>
       </div>
   </div>

 }

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

const styles = {
  openForButtonGroup : {
    display:"flex",
    alignItems:"center",
    cursor:"pointer",
    borderRadius:3,
    height:36,
    width:272,
    paddingLeft:10
  },
  formButton : {
    marginTop:8,
    display:"flex",
    alignItems:"center"
  }
}




export default connect()(TrelloButton);
