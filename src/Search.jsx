import React, { useState } from 'react';
import SearchResult from './SearchResult';

const Search=()=>{

const [search,setImg]=useState('mango');

const getSearch=(event)=>{
const sval=event.target.value;
console.log(sval);
setImg(sval);
}
    return <div class="container">
        <h1>Search</h1>
    <div class="row align-items-start">
      <div class="col">
        Search
      </div>
      <div class="col">
        <input type="text" name="search" placeholder="Search Anything.." 
        value={search} onChange={getSearch} />
        <SearchResult img={search}/>
      </div>
    </div>
   
    
  </div>
    
}
export default Search;