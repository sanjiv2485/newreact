import React from 'react';

const SearchResult=(props)=>{
    const src=`https://source.unsplash.com/400x400/?${props.img}`;
    return (
     <>   
       <h1>Serach Result</h1>
       <img src={src} alt="Serach Result" />
    </>
    );
}
export default SearchResult;