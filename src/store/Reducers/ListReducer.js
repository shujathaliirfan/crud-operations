import {CONSTANTS } from "../Actions"

let listID = 2;
let cardID = 4;
const initialState = [

    {
        title : "Last Episode",
        id:0,
        cards : [
            {

           
           id:0,
           text:"we created a static and a static card"
        },
        {

           
            id:1,
            text:"we used a mix between material ui "
        }
        ]
    },
    {
        title : "this Episode",
        id:1,
        cards : [
            {

           
           id:0,
           text:"we created a static and a static card"
        },
        {

           
            id:1,
            text:"we used a mix between material ui "
        },
        {

           
            id:2,
            text:"we created a static and a static card"
         },
         {

           
            id:3,
            text:"we created a static and a static card"
         }
        ]
    }
    
]





const  ListReducer = (state=initialState , action) => {
    switch(action.type) {

     case CONSTANTS.ADD_LIST : 
     
     const newList = {
         title:action.payload,
         cards:[],
         id:listID
        }
        listID += 1;

    console.log(newList,"list" + listID)
        return [
            ...state,
            newList
        ];

        case CONSTANTS.ADD_CARD :
            const newCard = {
                text:action.payload,
                id:cardID
            };
            cardID +=1;

               console.log(cardID + "cardif" +  newCard.id);
          
          const newState = state.map(list=> {
                if(list.id === action.payload.listID){
                    return {
                        ...list,
                        cards:[ ...list.cards, newCard]
                } 
                
            } else {
                    return list;
                }
                
          });

            return newState;

        default : 
        return state
    }
};

export default ListReducer