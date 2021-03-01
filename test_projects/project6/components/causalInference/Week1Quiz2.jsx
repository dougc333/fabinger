import React from 'react'
import {FormControlLabel, Radio,RadioGroup,FormControl,FormLabel} from '@material-ui/core'

export default function Week1Quiz12() {
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
        <FormLabel component="legend">1. Which assumption is also referred to as the no unmeasured confounders assumption? </FormLabel>
        <RadioGroup aria-label="w1_q1" name="w1_q1" value={value1} onChange={handleChange}>
          <FormControlLabel value="one" control={<Radio />} label="SUTVA" />
          <FormControlLabel value="two" control={<Radio />} label="consistency" />
          <FormControlLabel value="three" control={<Radio />} label="ignorability" />
          <FormControlLabel value="four" control={<Radio />} label="positivity" />
        </RadioGroup>
      </FormControl>
      <div>
          <br/>
          <br/>
      </div>
      <FormControl component="fieldset">
        <FormLabel component="legend">2. Which causal assumption requires that there is no interference between units:  </FormLabel>
        <RadioGroup aria-label="w2_q2" name="w2_q2" value={value2} onChange={handleChange2}>
          <FormControlLabel value="five" control={<Radio />} label="positivity" />
          <FormControlLabel value="six" control={<Radio />} label="SUTVA" />
          <FormControlLabel value="seven" control={<Radio />} label="ignorability" />
          <FormControlLabel value="eight" control={<Radio />} label="consistency" />
          
        </RadioGroup>
      </FormControl>
    
      </div>
    );
  }