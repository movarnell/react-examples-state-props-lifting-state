import React, { useState } from 'react'

export default function StateExample() {
  // Use the `useState` hook to create a state variable `state` with an initial value of `0`
  const [state, setState] = useState(0)

  // Define a function `increment` that increments the `state` by 1 and updates the state
  function increment() {
    return setState(state + 1);
  }

  // Define a function `decrement` that decrements the `state` by 1 and updates the state
  function decrement() {
    return setState(state - 1);
  }

  // Render the dynamic count value and two buttons that trigger the `increment` and `decrement` functions
  return (
    <>
{/* When you want to use items in the same way as in JavaScript, you need to wrap them in curly braces. 
     The <span> is just in place to change the look.*/}   
        <div className='fw-bold'>Your dynamic count is: <span className='display-6'>{state}</span></div>  
        <button className='btn btn-primary m-2' onClick={increment}>Increase</button>
        <button className='btn btn-primary m-2' onClick={decrement}>Decrease</button>
    </>
  )
}
