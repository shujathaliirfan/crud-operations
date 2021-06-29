
import React, { Component } from 'react'
import {connect} from 'react-redux'
// import './trelloStyle.css'
import TrelloButton  from './TrelloButton'

import TrelloCards from './TrelloCards'

 class TrelloList extends Component {
    render() {
        const {lists } = this.props;
        // console.log(lists)
        return (
           <div>
               <h2>trello client</h2>
            <div style={styles.listscontainer}>      
           
                    {lists.map(list => {
                // console.log(list.title);
                return <TrelloCards key={list.id} listID={list.id}
                  title={list.title} cards={list.cards} />
            })}

               <TrelloButton list/>
          
            </div>
            </div>
        )
    }
}


const styles = {
    listscontainer : {
       display:"flex",
        flexDirection:"row",
        marginRight:8
    }
}


const mapStateToProps =  state => ({
    lists : state.lists
})


export default connect(mapStateToProps)(TrelloList);