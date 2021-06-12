import React,{useContext} from 'react';
import ComC from './ComC';
import { FirstName,LastName } from './Com';
const ComB=()=>{
const fname=useContext(FirstName);
const lname=useContext(LastName);
    return (
     <> 
      <ComC/>  
       <h1>Hi My Name is {fname} {lname}</h1>
    </>
    );
}
export default ComB;