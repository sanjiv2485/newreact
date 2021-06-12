import React from 'react';
import { FirstName,LastName } from './Com';
const ComC=()=>{
    return (
    <> 
    <FirstName.Consumer>{(fname)=>{
    return (
    <LastName.Consumer>
        {(lname)=>{    
        return <h1>Hi My Name is {fname} {lname}</h1>
        }
        }
        </LastName.Consumer>);
        }}
    </FirstName.Consumer>  
    
    
    </>
    );
}
export default ComC;