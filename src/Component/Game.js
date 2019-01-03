import React from 'react'
import '../App.css';
import '../semantic/dist/semantic.min.css'

class Game extends React.Component{


  render(){
    let percentage = Math.round(((this.props.points)/14)*100)
  
    return(
    <>
      <div className="App-header"> Your Progress:
        <div className="ui red progress" >
          <div className="bar" style={{width: `${percentage}%`, size: "15px", padding: "3vh"}} >
            <div className="progress">{percentage}%</div>
          </div>
        </div>
      </div>
    </>
    )
  }
}

export default Game
