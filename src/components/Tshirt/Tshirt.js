import React, { useState } from 'react';
import NavBar from '../Home/NavBar/NavBar';

import { useForm } from 'react-hook-form';
import './Tshirt.css'
const Tshirt = () => {
    
  const { register, handleSubmit } = useForm();

  const [names ,setName] =useState({});
  console.log(names)
  const onSubmit = (data)=>{
      setName(data)
  }
    return (
        <div className='container'>
          <NavBar></NavBar>

           <div className='picc '>
              <div >
    { <h3 className='inputText'>{names.name}</h3> }
              </div>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)}>
                    <input id="inputName" name="name" placeholder='add text' className="form-control" ref={register({ required: true })}/>
                    <br/>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        
</div>
           
    );
};

export default Tshirt;