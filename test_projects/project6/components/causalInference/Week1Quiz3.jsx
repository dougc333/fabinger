

import React from 'react'
import {FormControlLabel, Radio,RadioGroup,FormControl,FormLabel} from '@material-ui/core'

export default function Week1Quiz12() {
    const [value1, setValue] = React.useState('disabled');
    const [value2,setValue2] = React.useState('disabled');
    const [value3,setValue3] = React.useState('disabled');
    const [value4,setValue4] = React.useState('disabled');
    const [value5,setValue5] = React.useState('disabled');
    const [value6,setValue6] = React.useState('disabled');
    const [value7,setValue7] = React.useState('disabled');
    const [value8,setValue8] = React.useState('disabled');
    const [value9,setValue9] = React.useState('disabled');
  
    const handleChange = (event) => {
      console.log("handleChange Week1Quiz1 value:",event.target.value)
      setValue(event.target.value);
      
    };
    const handleChange2 = (event) => {
        console.log("handleChange2 Week1Quiz1 value:",event.target.value)
        setValue2(event.target.value);    
    };
    const handleChange3 = (event) => {
      console.log("handleChange2 Week1Quiz1 value:",event.target.value)
      setValue3(event.target.value);    
  };
  const handleChange4 = (event) => {
    console.log("handleChange2 Week1Quiz1 value:",event.target.value)
    setValue4(event.target.value);    
};
const handleChange5 = (event) => {
  console.log("handleChange2 Week1Quiz1 value:",event.target.value)
  setValue5(event.target.value);    
};
const handleChange6 = (event) => {
  console.log("handleChange2 Week1Quiz1 value:",event.target.value)
  setValue6(event.target.value);    
};
const handleChange7 = (event) => {
  console.log("handleChange2 Week1Quiz1 value:",event.target.value)
  setValue7(event.target.value);    
};
const handleChange8 = (event) => {
  console.log("handleChange2 Week1Quiz1 value:",event.target.value)
  setValue8(event.target.value);    
};
const handleChange9 = (event) => {
  console.log("handleChange2 Week1Quiz1 value:",event.target.value)
  setValue9(event.target.value);    
};

    

    return (
    <div>
      <h3>Week 1 Quiz 3</h3>
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
      <div>
          <br/>
          <br/>
      </div>
      <FormControl component="fieldset">
        <FormLabel component="legend">3. Which causal assumption requires that there is no interference between units:  </FormLabel>
        <RadioGroup aria-label="w1_q3" name="w1_q3" value={value3} onChange={handleChange3}>
          <FormControlLabel value="five" control={<Radio />} label="positivity" />
          <FormControlLabel value="six" control={<Radio />} label="SUTVA" />
          <FormControlLabel value="seven" control={<Radio />} label="ignorability" />
          <FormControlLabel value="eight" control={<Radio />} label="consistency" />
        </RadioGroup>
      </FormControl>
      <div>
          <br/>
          <br/>
      </div>
      <FormControl component="fieldset">
        <FormLabel component="legend">4. Which causal assumption requires that there is no interference between units:  </FormLabel>
        <RadioGroup aria-label="w2_q4" name="w2_q4" value={value4} onChange={handleChange4}>
          <FormControlLabel value="five" control={<Radio />} label="positivity" />
          <FormControlLabel value="six" control={<Radio />} label="SUTVA" />
          <FormControlLabel value="seven" control={<Radio />} label="ignorability" />
          <FormControlLabel value="eight" control={<Radio />} label="consistency" />
        </RadioGroup>
      </FormControl>
      <div>
          <br/>
          <br/>
      </div>
      <FormControl component="fieldset">
        <FormLabel component="legend">5. Which causal assumption requires that there is no interference between units:  </FormLabel>
        <RadioGroup aria-label="w2_q5" name="w2_q5" value={value5} onChange={handleChange5}>
          <FormControlLabel value="five" control={<Radio />} label="positivity" />
          <FormControlLabel value="six" control={<Radio />} label="SUTVA" />
          <FormControlLabel value="seven" control={<Radio />} label="ignorability" />
          <FormControlLabel value="eight" control={<Radio />} label="consistency" />
        </RadioGroup>
      </FormControl>
      <div>
          <br/>
          <br/>
      </div>
      <FormControl component="fieldset">
        <FormLabel component="legend">6. Which causal assumption requires that there is no interference between units:  </FormLabel>
        <RadioGroup aria-label="w2_q6" name="w2_q6" value={value6} onChange={handleChange6}>
          <FormControlLabel value="five" control={<Radio />} label="positivity" />
          <FormControlLabel value="six" control={<Radio />} label="SUTVA" />
          <FormControlLabel value="seven" control={<Radio />} label="ignorability" />
          <FormControlLabel value="eight" control={<Radio />} label="consistency" />
        </RadioGroup>
      </FormControl>
      <div>
          <br/>
          <br/>
      </div>
      <FormControl component="fieldset">
        <FormLabel component="legend">7. Which causal assumption requires that there is no interference between units:  </FormLabel>
        <RadioGroup aria-label="w2_q7" name="w2_q7" value={value7} onChange={handleChange7}>
          <FormControlLabel value="five" control={<Radio />} label="positivity" />
          <FormControlLabel value="six" control={<Radio />} label="SUTVA" />
          <FormControlLabel value="seven" control={<Radio />} label="ignorability" />
          <FormControlLabel value="eight" control={<Radio />} label="consistency" />
        </RadioGroup>
      </FormControl>
      <div>
          <br/>
          <br/>
      </div>
      <FormControl component="fieldset">
        <FormLabel component="legend">8. Which causal assumption requires that there is no interference between units:  </FormLabel>
        <RadioGroup aria-label="w2_q8" name="w2_q8" value={value8} onChange={handleChange8}>
          <FormControlLabel value="five" control={<Radio />} label="positivity" />
          <FormControlLabel value="six" control={<Radio />} label="SUTVA" />
          <FormControlLabel value="seven" control={<Radio />} label="ignorability" />
          <FormControlLabel value="eight" control={<Radio />} label="consistency" />
        </RadioGroup>
      </FormControl>
      <div>
          <br/>
          <br/>
      </div>
      <FormControl component="fieldset">
        <FormLabel component="legend">9. Which causal assumption requires that there is no interference between units:  </FormLabel>
        <RadioGroup aria-label="w2_q9" name="w2_q9" value={value9} onChange={handleChange9}>
          <FormControlLabel value="five" control={<Radio />} label="positivity" />
          <FormControlLabel value="six" control={<Radio />} label="SUTVA" />
          <FormControlLabel value="seven" control={<Radio />} label="ignorability" />
          <FormControlLabel value="eight" control={<Radio />} label="consistency" />
        </RadioGroup>
      </FormControl>
    
      </div>
    );
  }