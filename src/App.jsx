import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    //flex in css
    <>
     <div className='bg-blue-300'>hi</div>


      {/* <div className='flex justify-between'>
      <div>child 1</div>
      <div>child 2</div>
      <div>child 3</div>
     </div> */}


     {/*           implement grids    */}


     <div className='grid grid-12'>
      <div
      className='bg-yellow-300 col-span-4' >child 1</div>
      <div className='bg-red-300 col-span-4'>child 2</div>
      <div className='bg-pink-300 col-span-4'>child 3</div>
     </div>
    </>
  )
}

export default App
