import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './assets/components/home'

function App() {
  

  return (
    //flex in css
    <>
     <div className="min-h-screen w-full fixed inset-0  bg-blue-700">


      {/* <div className='flex justify-between'>
      <div>child 1</div>
      <div>child 2</div>
      <div>child 3</div>
     </div> */}


     {/*           implement grids    */}


     {/* <div className='grid grid-12'>
      <div
      className='bg-yellow-300 col-span-4' >child 1</div>
      <div className='bg-red-300 col-span-4'>child 2</div>
      <div className='bg-pink-300 col-span-4'>child 3</div>
     </div> */}

    <div className="text-8xl font bold p-20">
    <span className='text-green-300'>Webinar</span>
    <span className='text-white'>.gg</span>
    </div>
    <div className="text-5xl text-white px-15 py-15">Verify Your Age</div>

     <Home/>
    
    </div>
    </>
  )
}

export default App
