import React, { useState,useEffect } from 'react';
import './App.css';
import axios from 'axios';


function App() {
const [movieName, setMovieName]= useState('')
const [review, setReview]= useState('')
const [moviereviewList,setMoviereviewList]=useState([])

useEffect(()=>{
  axios.get("http://localhost:3001/api/get")
  .then(({ data }) => setMoviereviewList(data))
  .catch((err) => console.log(err));
}, []);

const submitReview=()=>{
axios.post("http://localhost:3001/api/insert",{
  movieName:movieName,
  movieReview:review} )
  .then(()=>{
    alert ('seccess');
  })
  .catch((err) => console.log(err));
};


  return (
    <div className= "App"> 
    <h1>application</h1>

    <div className='form'>
    <label htmlFor="">Movie Name:</label>
    <input type="text" name='movieName' onChange={(event)=>{
      setMovieName(event.target.value)
    }}/>
    <label htmlFor="">Food desc</label>
    <input type="text" name='FodName' onChange={(event)=>{
      setReview(event.target.value)
    }}/>
    <button onClick={submitReview}>Submit</button>
    {moviereviewList.map((e)=>{
      return (
        <h1> MovieName: {e.movieName} | MovieReview: {e.movieReview} </h1>
      )
    })}

    </div>
    </div>
  );
}

export default App;
