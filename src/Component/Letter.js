import React from 'react'
import PlaySound from './PlaySound'


export default class Letter extends React.Component{


  render(){
    return(
      <>
      <div className="column"> <img src={(this.props.image)} alt={this.props.name} /> <br/><PlaySound name={this.props.name} id={this.props.id} /></div>
      </>
    )
  }
}
