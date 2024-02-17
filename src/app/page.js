import Image from "next/image";
import Hero from './components/Hero'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <div className="container mx-auto px-12 py-4">
        
        <Navbar />
        <div className="container mt-24 mx-auto">
          <Hero />
        </div>

      </div>
    </main>
  );
}
