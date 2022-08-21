import React, { useState } from 'react';
import '../App.css';
import {useNavigate } from 'react-router-dom';

function Landing() {

  const [recipe,setRecipe] = useState('');
  const navigate = useNavigate();

  const submitForm = (event) => {
    event.preventDefault();
    navigate('/recipe/' + recipe)
  }


  return (
    <div class="landing-body">
      
      <div class="centered">
        
        <h1 class="landing-title">The Cutting Board</h1>
        <form>
          <input onChange={(event) => {setRecipe(event.target.value);console.log(recipe) } } class='search-input' type='search' placeholder='Find a Recipe'></input>
          <button onClick={submitForm} class='submit-btn' type='submit'><img src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E"/></button>
        </form>
        <br/>
        <p1 class='simple-p2'>
          Search for a recipe/ingredient <br/> <br/>
          Press enter or <img src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E"/> to search
        </p1>

      </div>

    </div>
  )
}

export default Landing
