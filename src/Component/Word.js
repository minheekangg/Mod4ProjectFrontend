import React from 'react'
import { Button, Icon, Card } from 'semantic-ui-react'
import '../App.css';
export default class Word extends React.Component{



  render(){
    // console.log("IN WORD PROPS ARE", this.props);
    return(
      <div>
      <img className="word-card" src={this.props.image} alt={this.props.name} onClick={(e)=>this.props.handleClick(e, this.props)}/>
      <Button > <Icon name="volume up"/> </Button>

      </div>
    )
  }
}
