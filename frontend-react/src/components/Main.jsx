import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Button from './Button'


const Main = () =>{
  return (
      <>
         <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                 <h1 className='text-light'>Stock Prediction Portal</h1>
                 <p className='text-light lead'>The Stock Prediction App is a web-based application designed to help users make informed investment decisions by forecasting future stock prices using historical data and machine learning models. </p>
                 <Button text='Login' class="btn-outline-info" />

            </div>
         </div>
      </>
  )
}

export default Main
