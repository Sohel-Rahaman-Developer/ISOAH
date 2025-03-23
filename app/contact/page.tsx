import React from 'react'
import Cursor from '../Cursor'
import Navbar from '../components/Header/Navbar'
import { Footer } from '../components/Footer'
import Contact from './Contact'


const page = () => {
  return (
    <main className=" flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <Cursor />
      <div className="test">
        <Navbar />
        <div className=' relative z-10 text-white'><Contact /></div>
        <Footer />
      </div>
    </main>
  )
}

export default page