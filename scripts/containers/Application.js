import React, {Component} from 'react';
import {connect} from 'react-redux';

import CircularProgress from 'material-ui/lib/circular-progress';

import {initialize} from '../actions';


class Application extends Component{

  constructor(props){

    super(props);

  }

  componentDidMount(){
    
    setTimeout( () => {
      
    	this.props.initialize(true);

    },4000);

  }

  render(){

    let output;

    if( this.props.loaded ){

      output = <h1>loaded!</h1>;

    }else{

      output = <div><CircularProgress size={2} className={"s3d-loader"}/></div>;
    }

    return output;  
    
  }
    
}

const mapStateToProps = (state) => {

  let ret = {
    loaded:state.loaded,
  }

  return ret;
}

const mapDispatchToProps = (dispatch) => {
  return{
    initialize: (status)=>{
      dispatch(initialize(status));
    },
  }
}

const ApplicationContainer = connect(mapStateToProps,mapDispatchToProps)(Application);

export default ApplicationContainer;
