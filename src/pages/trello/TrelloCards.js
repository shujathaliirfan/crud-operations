import React from "react";
import './trelloStyle.css'
import TrelloCard from "./TrelloCard";
import TrelloButton  from './TrelloButton'

function TrelloCards({title, cards ,listID}) {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>      
      {cards.map(card =><TrelloCard key={card.id} id={card.id} txt={card.text}  />)}
      <TrelloButton listID={listID} />
    </div>
  
  );
}

const styles = {
  container : {
      backgroundColor:"#ccc",
      borderRadius:3,
      width:300,
      padding:8,
      height:"100%",
      marginRight:8
  }
}
export default TrelloCards;
