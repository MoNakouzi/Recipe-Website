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
          <button onClick={submitForm} class='submit-btn' type='submit'>Search</button>
        </form>
        <br/>
        <p1 class='simple-p2'>Press enter to search</p1>

      </div>

    </div>
  )
}

export default Landing
