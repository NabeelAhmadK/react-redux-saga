import React from 'react'
import '@assets/scss/app.scss';
import Home from '@pages/home';
import { useSelector } from 'react-redux';

const App = () => {

  const { name, age } = useSelector(state => state.user)

  return (
    <div className='container text-center pt-4'>
      <h3>React with Redux-Saga</h3>

      <div className='mt-5 d-flex flex-column align-items-start'>
        {name && <p className='m-0'>Name: <span className='fw-bold'>{name}</span></p>}
        {age && <p className='m-0'>Age: <span className='fw-bold'>{age}</span></p>}
      </div>
      <Home />
    </div>
  )
}

export default App