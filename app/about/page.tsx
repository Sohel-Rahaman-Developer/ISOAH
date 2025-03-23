import React from 'react'
import About from '../components/about/About'
import Cursor from '../Cursor'
import Navbar from '../components/Header/Navbar'
import { Footer } from '../components/Footer'


const page = () => {
  return (
    <main className=" flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <Cursor />
      <div className="test">
        <Navbar />
        <div className='max-w-7xl mx-auto relative z-10 text-white'><About /></div>
        <Footer />
      </div>
    </main>
  )
}

export default page