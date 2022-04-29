import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateUserAction } from 'redux-store/action/userAction';
import Styles from './home.module.scss';

const Home = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState()
    const [age, setAge] = useState()

    const updateUser = () => {
        let request = {
            name,
            age
        }

        name && age && dispatch(updateUserAction(request));
    }

    return (
        <div className={`d-flex flex-column align-items-center justify-content-center ${Styles.homeContainer}`}>
            <div className='d-flex'>
                <input
                    onChange={(e) => { setName(e.target.value) }}
                    className='form-control me-2'
                    placeholder='Enter Your Name' />

                <input
                    onChange={(e) => { setAge(e.target.value) }}
                    className='form-control'
                    placeholder='Enter Your Age' />
            </div>
            <div>
                <button className='btn btn-primary mt-3' onClick={updateUser}>Press Me!</button>
            </div>
        </div>
    )
}

export default Home
