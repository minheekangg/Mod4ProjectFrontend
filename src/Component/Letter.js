import React from 'react'
import PlaySound from './PlaySound'


export default class Letter extends React.Component{

  test = new Audio("https://github.com/minheekangg/Mod4ProjectBackend/blob/master/app/assets/images/sound/gSound.m4a?raw=true")
  render(){
    // console.log(this.props);
    // <Sound url={this.props.sound} />
    return(
      <>
      <div className="column"> <img src={(this.props.image)} alt={this.props.name} /> <br/><PlaySound name={this.props.name} id={this.props.id} /></div>
      </>
    )
  }
}
