import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import '../App.css';

var LineChart = require("react-chartjs").Line;


var chartOptions = {
  showTooltips: false}

class HighScore extends React.Component {
  state={
    games: [],
    chartDataLabels: [],
    chartData: []
  }

  componentDidMount() {
      let newData
    fetch('http://localhost:3000/api/v1/games')
    .then(u => u.json())
    .then(data => {
       newData = data.filter((d) => d.username === this.props.username);
       this.setState({games: newData}, () => {this.updateChart()})
    })
  }

  updateChart = () => {
    let newLabels = []
    let newData = []
    this.state.games.map((e, index) => {
       newLabels.push(index)
       newData.push(e.score)
    })
    this.setState({chartDataLabels: newLabels, chartData: newData})
  }


  render(){
    return(
        <div>
              <LineChart data={{
              	labels: this.state.chartDataLabels,
              	datasets: [
              		{
              			fillColor: "rgba(220,220,220,0.2)",
              			strokeColor: "rgba(220,220,220,1)",
              			pointColor: "rgba(220,220,220,1)",
              			pointStrokeColor: "#fff",
              			pointHighlightFill: "#fff",
              			pointHighlightStroke: "rgba(220,220,220,1)",
              			data: this.state.chartData
              		}
              	]
              }} options={chartOptions} width="800" height="500"/>
  

          <br/>
          <Button style={{size: "30vh", color: "green"}}  onClick={this.props.handlePlayAgain}>
            <Icon name="play circle"/> Play again!
          </Button>
        </div>
    )
  }
}



export default HighScore;
