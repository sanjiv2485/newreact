import React from 'react';
import Clock from 'react-digital-clock';
import './MyClock.css';

const MyClock=()=>{
return <>
<h1>Test Project</h1>
<div className="clock"><Clock /></div>
<span className="btn btn-success">Success</span>
    </>
}

export default MyClock;