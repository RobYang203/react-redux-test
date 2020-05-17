import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

function App({string , changeString}) {
  return (
    <div>
      <div className="App">
        Hello {string}
      </div>
    <button onClick={()=>{changeString("Redux")}}>click Redux</button>
    <button onClick={()=>{changeString("World")}}>click World</button>
    </div>
  
  );
}


const mapStateToProps = (state)=>{
  
  return {
    string:state.hello
  }
};
const mapDispatchToProps = (dispatch)=>{
  return {
    changeString : (string)=> {dispatch(actionCreator(string))}
  }
};
const actionCreator = (string)=>{
  return {
    type:"string",
    payload:string
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
