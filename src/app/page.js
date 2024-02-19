import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About';

export default function Home() {
  return (
    <main className='lex min-h-screen flex-col bg-[#121212]'>
      <div className="container mx-auto px-12 py-4">
        
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <Hero />
          <About />
        </div>
      </div>
    </main>
  );
}
