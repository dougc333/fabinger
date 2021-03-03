import React from 'react';
import {
  AppBar, Toolbar, Typography,Checkbox
} from '@material-ui/core';
import './TopBar.css';

/**
 * Define TopBar, a React componment of CS142 project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      prevProps:props,
      name:'',
      old:'',
      checked:false,
      admin:false,
    }
  }

  componentDidUpdate(){
    //console.log("topbar componentdidupdate props:",this.state.prevProps)
    //console.log("topbar this.props.photoInfo;",this.props.photoInfo)
    if (this.state.old!==this.props.photoInfo){
      if(this.props.photoInfo===true){
        this.setState({name:"Photo",old:this.props.photoInfo})
      }else{
        this.setState({name:"Name",old:this.props.photoInfo})
      }
    }
  }

  handleChange=(e)=>{
    console.log("topbar handleChange e.currentTarget.value:",e.currentTarget.value)
    console.log("handleChange topbar checked before setState this.state.checked:",this.state.checked)
    console.log("handleChange topbar checked before setState this.state.admin:",this.state.admin)
    
    console.log("topbar handleChange event.currentTarget.getAttribute('value')",e.currentTarget.getAttribute('value'))
    this.setState({checked:!this.state.checked},function(){
      this.props.onCheckBox(this.state.checked); 
      console.log("topBar handleChange checked:",this.state.checked)
    })
  }
  
  handleChangeAdmin=(e)=>{
    console.log("topbar handleChange e.currentTarget.value:",e.currentTarget.value)
    console.log("handleChange topbar checked before setState this.state.checked:",this.state.checked)
    console.log("handleChange topbar checked before setState this.state.admin:",this.state.admin)
    
    console.log("topbar handleChange event.currentTarget.getAttribute('value')",e.currentTarget.getAttribute('value'))
    this.setState({admin:!this.state.admin},function(){
      this.props.onAdmin(this.state.admin); 
      console.log("topBar handleChange this.state.admin:",this.state.admin)
    })
  }
  render() {
    return (
      <AppBar className="topbar-appBar" position="absolute" >
        <Toolbar>
          <Typography variant="h5" color="inherit" component='span' style={{ flex: 1 }}>
          Class Grading Site
          </Typography>
          Engage
          <Checkbox
            onChange={this.handleChange}
            value="checkedA"
            inputProps={{ 'aria-label': 'Checkbox A' }}
          />
          Admin
          <Checkbox
            onChange={this.handleChangeAdmin}
            value="Admin"
            inputProps={{ 'aria-label': 'Checkbox B' }}
          />
          <Typography variant="h5" color="inherit" component='span' style={{ flex: 1 }}>
          User {this.state.name} :{this.props.usrid}
          </Typography>
        </Toolbar>
        
      </AppBar>
    );
  }
}

export default TopBar;
