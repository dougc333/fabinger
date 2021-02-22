import React from 'react'
import './Page.css'
//import Button from './Button';
import DivTest from './DivTest';
import {Button} from '@material-ui/core'

class Page extends React.Component{
  constructor(){
    super();
    this.state={
      color:"blue"
    }
    this.onChange = this.onChange.bind(this) 
    this.onSubmit = this.onSubmit.bind(this)
  }
  
  onChange=(e)=>{
    console.log("onChange:",e.target.value)
    this.setState({
      color:e.target.value
    });
  }

  onSubmit=(e)=>{
    console.log("asdfasdf")
    e.preventDefault()
    console.log("onSubmit:",e)
  }

  render(){
    return (
      <div>
        <div className="header">
          <div className="left">Practice Quiz</div>
        </div> 
        <h1>    Practice Quiz
        </h1>
        <form onSubmit={this.onSubmit}>
        <div className="question">
          <div className="question_1">
          1. Someone who was likely to be treated, given their covariates, but wasn't:
          <div >  
            <input
              type="radio"
              name="q1"
              onChange={this.onChange}
            />
            will have a small weight
          </div>
          <div >  
            <input
              type="radio"
              name="q1"
              onChange={this.onChange}
            />
            will have a large weight
          </div>
          </div>
          <div className="question_2">
          2. Marginal Structural Models are models of:
          <div>  
            <input
              type="radio"
              name="q2"
              value="green"
              checked={this.state.color==="green"}
              onChange={this.onChange}
            />
            the mean of the observed outcome
          </div>
          <div>  
            <input
              type="radio"
              name="q2"
              value="black"
              checked={this.state.color==="black"}
              onChange={this.onChange}
            />
            the mean of the potential outcome
          </div>
          </div>
          <div className="question3">
          3. IPTW estimation works because: 
          <div>  
            <input
              type="radio"
              name="q3"
              value="mauve"
              checked={this.state.color==="mauve"}
              onChange={this.onChange}
            />
            It does not assume the data are normally distributed
          </div>
          <div>  
            <input
              type="radio"
              name="q3"
              value="pink"
              checked={this.state.color==="pink"}
              onChange={this.onChange}
            />
             It creates an unconfoundec pseudo-population
          </div>
          <div>  
            <input
              type="radio"
              name="q3"
              value="yellow"
              checked={this.state.color==="yellow"}
              onChange={this.onChange}
            />
            it involves removing outliers
          </div>
          </div>
        </div>
        <Button onChange={this.onSubmit} >Sasdfsd</Button>
        <DivTest />
        </form>
      </div>
      
  );
  }

  
}

export default Page;




