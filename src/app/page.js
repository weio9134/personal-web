"use client"
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Fade } from 'react-awesome-reveal';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-gradient-to-tr from-[#070F2B] to-[#535C91]'>
      <div className="container mx-auto px-12 py-4">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4 space-y-10">
            <Hero />
            <Fade direction='left'> <About /> </Fade>
            <Fade direction='right'> <Projects /> </Fade>
            <Fade direction='left'> <Contact /> </Fade>
        </div>
      </div>
    </main>
  );
}
