import React ,{createContext,useEffect,useState} from 'react';
import './App.css';
//import MyClock from './MyClock';
import ComA from './ComA';
import {Route} from "react-router-dom";
const FirstName=createContext();
const LastName=createContext();
function App() {
  const [num1,changeNum1]=useState(0);
  const [num2,changeNum2]=useState(0);
  useEffect(()=>{
    document.title=`Click ${num1}`;
  },[num1]); 
  const justClick1=()=>{
    changeNum1(num1+1);
  }
  const justClick2=()=>{
    changeNum2(num2+1);
  }
  return (
    <>
    <Route path="/" component="{AboutUs}" />
    <Route path="/contactus" component="{ContactUs}" />
    <FirstName.Provider value={"Sanjiv"}>
    <LastName.Provider value={"Tripathi"}>
      <ComA/>
    </LastName.Provider>
    </FirstName.Provider>
    <button className="btn btn-primary" onClick={justClick1}>Click Me {num1}</button>
    <button className="btn btn-primary" onClick={justClick2}>Click Me {num2}</button>
    </>
  );
}

export default Com;
export {FirstName,LastName}; 
