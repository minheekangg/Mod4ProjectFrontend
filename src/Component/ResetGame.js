import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import '../App.css';

const ResetGame = (props) => {
  return (<div>
    <img className="end-game-background" src="https://i.pinimg.com/originals/f0/c3/48/f0c34842ae9283377408a872f279bf50.jpg" alt="reset"/>
    <div>
    <Button style={{size: "50vh", color: "green"}} onClick={props.handlePlayAgain}> <Icon name="play circle"/> Play again! </Button>
    <Button style={{size: "30vh", color: "blue"}} onClick={props.handleHighScores}> <Icon name="chart bar"/> My High Scores </Button>
    </div>
    </div>
  )}


  export default ResetGame;
