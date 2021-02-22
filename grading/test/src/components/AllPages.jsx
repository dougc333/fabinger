import React from 'react'

const data = require('./data.json')

class AllPages extends React.Component{
  constructor(){
    super()
    this.state={
       user:"",
       week:1

    }
  }
  
  make() {
    let arr=[];
    const w = ["week1","week2","week3","week4"]
    for (let i=0;i<w.length;i++){
      arr.push(
        <div> 
            {w[i]}
        </div>
      )
    }
    return arr;    
  }

  render(){
    return(
      <div>
      {this.make()}
      </div>
    );
  }
}

export default AllPages