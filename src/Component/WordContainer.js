import React from 'react'
import Word from './Word'

export default class WordContainer extends React.Component{


  // HELPER FUNCTION SHUFFLE:
 shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }


  renderEachWord(){
    const shuffledWords = this.shuffle(this.props.words)
    // console.log("INSIDE WORDS CONTAINER PROPS ARE", this.props, shuffledWords)
    return shuffledWords.map((w)=> {
      return <Word key={w.name} image={w.image} name={w.name} id={w.id} handleClick={this.props.handleClick} letter_id={w.letter_id}/>
    })
  }

  render(){
    // console.log("IN WORD CONTAINER", this.props);
    return(
      <div> {this.renderEachWord()} </div>
    )
  }
}
