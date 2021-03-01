import React from 'react'


class Classes extends React.Component{
  constructor(){
    super();
    this.state={
      user:["Computer Vision","NLP","Stats","Advanced Stats","Causal Inference","Deep Learning"]

    }
  }

  render(){
    return(
      <div className="class-parent">
      <div>
        ComputerVision
      </div>
      <div>
        NLP
      </div>
      </div>      
    
    );
  }
}