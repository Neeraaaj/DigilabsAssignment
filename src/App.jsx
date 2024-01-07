import { useState } from 'react';
import './App.css'
import { IoIosArrowDown } from "react-icons/io";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brand from './components/Brand';
import Mid from './components/Mid';
import Mid2 from './components/Mid2';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <p className='mx-auto'><span className='bg-gray-200 p-1 rounded-xl m-1'>Announcement</span>we are happy to announce that we raise $2 Million in Seed Funding</p>
      <Navbar />
      <Hero />
      <Brand />
      <Mid />
      <Mid2 />
      <Stats />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
