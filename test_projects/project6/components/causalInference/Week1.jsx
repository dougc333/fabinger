import React from 'react'
import {Typography,List,ListItem,Link} from '@material-ui/core'

class Week1 extends React.Component{
  constructor(){
    super();

  }

  render(){
    return(
    <List>
    <ListItem>
    <Typography>Welcome to a crash course in Causality</Typography>
    </ListItem>
    <ListItem>
    <Typography>Confusion over Causality</Typography>
    </ListItem>
    <ListItem>
    <Typography>Potential Outcomes and Counterfactuals </Typography>
    </ListItem>
    <ListItem>
    <Typography>Hypothetical Interventions</Typography>
    </ListItem>
    <ListItem>
    <Typography>Causal Effects</Typography>
    </ListItem>
    <ListItem>
    <Link className="class-link" color="secondary" href={'http://localhost:3000/class.html#/week1_quiz1/'}>Quiz 1</Link>
    </ListItem>
    <ListItem>
    <Typography>Causal Assumptions</Typography>
    </ListItem>
    <ListItem>
    <Typography>Stratification</Typography>
    </ListItem>
    <ListItem>
    <Link className="class-link" color="secondary" href={'http://localhost:3000/class.html#/week1_quiz2/'}>Quiz 2</Link>

    </ListItem>
    <ListItem>
    <Typography>Incident User and active comparator designs</Typography>
    </ListItem>
    <ListItem>
    <Link className="class-link" color="secondary" href={'http://localhost:3000/class.html#/week1_quiz3/'}>Quiz 3</Link>

    </ListItem>
    
    <Link className="class-link" color="secondary" href={'http://localhost:3000/class.html#/causal/'}>Causal Inference</Link>
    </List>
    )
  }
}

export default Week1;