import React from 'react'
import {FormControlLabel, Radio,Label,List,ListItem,RadioGroup,Button,FormControl,FormLabel} from '@material-ui/core'

export default function Week1Quiz1() {
    const [value1, setValue] = React.useState('disabled');
    const [value2,setValue2] = React.useState('disabled');
  
    const handleChange = (event) => {
      console.log("handleChange Week1Quiz1 value:",event.target.value)
      setValue(event.target.value);
      
    };
    const handleChange2 = (event) => {
        console.log("handleChange2 Week1Quiz1 value:",event.target.value)
        setValue2(event.target.value);
        
      };
    

    return (
    <div>
      <h3>Week 1 Quiz 1</h3>
      <FormControl component="fieldset">
        <FormLabel component="legend">1. Which of the following represents what the average outcome would have been had no one been treated? </FormLabel>
        <RadioGroup aria-label="w1_q1" name="w1_q1" value={value1} onChange={handleChange}>
          <FormControlLabel value="one" control={<Radio />} label="E(Y^1)-E(Y^0)" />
          <FormControlLabel value="two" control={<Radio />} label="E(Y^0)" />
          <FormControlLabel value="three" control={<Radio />} label="E(Y|A=0)" />
         
        </RadioGroup>
      </FormControl>
      <div>
          <br/>
          <br/>
      </div>
      <FormControl component="fieldset">
        <FormLabel component="legend">2. We can only observe one potential outcome for each person is:  </FormLabel>
        <RadioGroup aria-label="w1_q2" name="w1_q2" value={value2} onChange={handleChange2}>
          <FormControlLabel value="three" control={<Radio />} label="An example of reverse causality" />
          <FormControlLabel value="four" control={<Radio />} label="the fundamental problem of Causal Inference" />
          <FormControlLabel value="five" control={<Radio />} label="only true for immutable variables" />
        </RadioGroup>
      </FormControl>
      </div>
    );
  }