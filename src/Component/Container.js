import React from 'react'
import '../App.css';

import WordContainer from './WordContainer'
import Letter from './Letter'
import Game from './Game'
import EndGame from './EndGame'


export default class Container extends React.Component {
  state={
    currentIndex: 0,
    currLetter: "",
    currWords: [],
    points: 0
  }

  componentDidUpdate(prevProps) {
    if (this.props.letters.length !== prevProps.letters.length){
      let letter= this.props.letters[this.state.currentIndex] // ASSIGNS CURRENT LETTER
      this.setState({ currLetter: letter}, () => {console.log("state updated to:", this.state)})
    } else if (this.props.words.length !== prevProps.words.length) {
      this.createWordsArray()
    }
  }

  createWordsArray = () => {
    let right_answer = this.props.words.filter((e)=> e.letter.id === this.state.currLetter.id) // RIGHT ANSWER DETECTED
    let firstArr = this.props.words.filter((e) => {return e.letter_id !== this.state.currLetter.id})
    let incorrect_1 = firstArr[Math.floor(Math.random() * firstArr.length)] // FIRST OPTION
    let secondArr = firstArr.filter((s) => {return s.letter_id !== incorrect_1.letter_id})
    let incorrect_2 = secondArr[Math.floor(Math.random() * secondArr.length)] // SECOND OPTION
    right_answer.push(incorrect_1, incorrect_2) // ALL THREE INTO AN ARRAY
    this.setState({currWords: right_answer}, () => {console.log("state updated to:", this.state)})
  }


  resetGame = () => {
    this.setState({currentIndex: 0, currLetter: this.props.letters[0], points: 0}, () => {
      this.createWordsArray()
    })
  }

  handleClick = (e, props) => {
    if (props.letter_id === this.state.currLetter.id) {
      this.setState({points: (this.state.points+1), currentIndex:(this.state.currentIndex+1)}, () =>{
        let letter= this.props.letters[this.state.currentIndex]
        this.setState({ currLetter: letter}, ()=> {
          this.createWordsArray()
        })
      })
    } else {
      alert("Oh no! Wrong answer!")
      this.resetGame()
    }
  }


  handlePlayAgain = () => {
    this.resetGame()
  }

  displayGame = () => {
    const currL = this.state.currLetter
    const currWs = this.state.currWords
    if (currL.id > 0 && currL.id < 15) {
      return (<div>
              <div className="column">
                <Letter name={currL.name} image={currL.image} sound={currL.sound} id={currL.id}/>
              </div>
              <div className="Right-column">
                {currWs.length > 0 && currL.id < 15 ? <WordContainer words={currWs} handleClick={this.handleClick}/> : null}
              </div>
        </div>)
    } else if (currL.id === 15) {
      return <EndGame name={currL.name} image={currL.image} id={currL.id} handlePlayAgain={this.handlePlayAgain} />
    } else {
      return <div>Loading...</div>
    }
  }

  render(){
    return(
      <>
      <Game points={this.state.points}/>
        <div className="content-grid">
        { this.displayGame()  }
        </div>
      </>
    )
  }
}
