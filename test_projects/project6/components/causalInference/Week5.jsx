import React from 'react'
import {Typography,List,ListItem,Link} from '@material-ui/core'

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