import React, { useState } from 'react';
import NavBar from '../Home/NavBar/NavBar';
import picture from '../../images/tshirt.jpg' 
const Tshirt = () => {
    const [newTodo, setNewTodo] = useState('')

  const [todos, setTodos] = useState([]);

  const addText = (a) => {
    console.log(a)
    
  }
    return (
        <div className='container'>
            <NavBar></NavBar>
           <div className=''>
           <img src={picture} class="img-fluid rounded mx-auto d-block" alt="Responsive image"/>
           <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Add Text" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <div class="input-group-append">
        <button class="btn btn-outline-secondary" onClick={addText} type="button" id="button-addon2">Button</button>
  </div>
</div>
           </div>
        </div>
    );
};

export default Tshirt;