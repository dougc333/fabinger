import React from 'react';
import {
   Typography,Link,List,ListItem
} from '@material-ui/core';
import './CausalInference.css';
import Week1 from './Week1';

class CausalInference extends React.Component {
  constructor(){
    super();
  }

  render(){
    return(
        
        <List>
        <ListItem>
        <Link href={'http://localhost:3000/class.html#/week1/'}>Week 1 Welcome and Introduction to Causal Effects</Link>
        </ListItem>
        <ListItem>
        <Link href={'http://localhost:3000/class.html#/week2/'}>Week 2 Confounding and Directed Acyclic Graphs</Link>
        </ListItem>
        <ListItem>
        <Link href={'http://localhost:3000/class.html#/week3/'}>Week 3 Matching and Propensity Scores</Link>
        </ListItem>
        <ListItem>
        <Link href={'http://localhost:3000/class.html#/week4/'}>Week 4 Inverse Probability of Treatment Weighting</Link>
        </ListItem>
        <ListItem>
        <Link href={'http://localhost:3000/class.html#/week5/'}>Week 5 Instrumental Variables Methods</Link>
        </ListItem>
        </List>
    );
  };


}
export default CausalInference;