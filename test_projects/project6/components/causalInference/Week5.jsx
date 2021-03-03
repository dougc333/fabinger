import React from 'react'
import {Typography,List,ListItem,Link} from '@material-ui/core'

var week5_outline=[
  'Instrumantal Vaiables Methods',
  'Intro to Instrumental Variables',
  'Randomized trials with noncompliance',
  'Compliance Classes',
  'Assumptions',
  'Quiz',
  'Causal Effect Identification and estimation',
  'IVs in observational studies',
  '2 stage least squares',
  'Weak instruments',
  'Quiz 2 questions',
  'IV analysis in R',
  'Instrumental Variables/Causal effects in randomized trials with non-compliance'
]



class Week5 extends React.Component{
  constructor(){
    super();

  }

  render(){
    return(
    <List>
    <ListItem>
    <Typography>Confounding</Typography>
    </ListItem>
    <ListItem>
    <Typography>Causal Graphs</Typography>
    </ListItem>
    <ListItem>
    <Typography>Relationships between DAGS and probabilituy Distributions </Typography>
    </ListItem>
    <ListItem>
    <Typography>Paths and Associations</Typography>
    </ListItem>
    <ListItem>
    <Typography>Conditional Independence</Typography>
    </ListItem>
    <ListItem>
    <Link className="class-link" color="secondary" href={'http://localhost:3000/class.html#/week2_quiz1/'}>Quiz 1</Link>
    </ListItem>
    <ListItem>
    <Typography>Confounding Revisited</Typography>
    </ListItem>
    <ListItem>
    <Typography>Backdoor Path Criteria</Typography>
    </ListItem>
    <ListItem>
    <Typography>Disjunctive Cause Criteria</Typography>
    </ListItem>
    <ListItem>
    <Typography>Identify from DAGs sufficient sets of confounders</Typography>
    </ListItem>

    <ListItem>
    <Link className="class-link" color="secondary" href={'http://localhost:3000/class.html#/week1_quiz3/'}>Quiz 3</Link>
    </ListItem>
    
    <Link className="class-link" color="secondary" href={'http://localhost:3000/class.html#/causal/'}>Causal Inference</Link>
    </List>
    )
  }
}

export default Week5;