import React from 'react'
import '../App.css';
import PlayWordSound from './PlayWordSound'


export default class Word extends React.Component{

  render(){
    console.log("IN WORD PROPS ARE", this.props);
    return(
      <div className="ui icon button" data-tooltip="Click the image of a word that starts with the given letter!">
      <img className="word-card" src={this.props.image} alt={this.props.name} onClick={(e)=>this.props.handleClick(e, this.props)}/>
      <PlayWordSound id={this.props.id} name={this.props.name} />

      </div>
    )
  }
}
