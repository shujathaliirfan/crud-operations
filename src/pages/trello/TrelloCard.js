import React from 'react'
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";


function TrelloCard({txt,id}) {
    return (
        <Card style = {styles.cardContainer}>
            <CardContent>
           <Typography  key={id} style = {styles.cardContainer} gutterBottom 
            component="h2">{txt}</Typography>
      </CardContent>
    </Card>

    )
}

const styles = {
    cardContainer : {
        marginBottom:8
    }
}

export default TrelloCard
