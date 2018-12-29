import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import '../App.css';

const EndGame = (props) => {

  return(<div className="end-game-div">
    <img className="end-game-background" src="https://static1.squarespace.com/static/5a5468dff09ca49662cca31d/5a5701949140b755af502dbb/5a5701a6419202b1699fdcdc/1515651497942/GC042_Boom_lori-danelle.jpg?format=750w" alt={props.name}/>
    <img className="end-game-sticker"src={props.image} alt={props.name}/>
    <br  />
    <Button style={{size: "30vh", color: "green"}} onClick={props.handlePlayAgain}> <Icon name="play circle"/> Play again! </Button>
    </div>)
}

export default EndGame;
