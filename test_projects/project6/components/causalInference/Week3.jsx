import React from 'react'
import {Typography,List,ListItem,Link} from '@material-ui/core'


class Week3 extends React.Component{
  constructor(props){
    super(props);
    this.week3_outline=
    [
        'Matching',
        'Observational Studies',
        'Overview of Matching',
        'Practice Quiz',
        'Greedy (nearest neighbor) matching',
        'Optimal matching',
        'Assessing balance',
        'Analyzing data after matching',
        'Practice Quiz',
        'Sensitivty Analysis',
        'Data example in R',
        'Quiz (6 questions)',
        'Propensity Scores',
        'Propensity Scores',
        'Propensity score matching',
        'Propensity score matching in R',
        'Quiz (5 questions)',
        'Data Analysis Project (8 questions)'
      ]
  }

  add(){
    let arr=[]
    this.week3_outline.map(x=>arr.push(<ListItem>{x}</ListItem>))
    return arr;
  }

  render(){
    return(
    <div>
      <h2>Week3</h2>
    <List>
    {this.add()}
    </List>
    </div>
    )
  }
}

export default Week3;