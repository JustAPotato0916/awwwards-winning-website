import About from './components/About.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import React from 'react';

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
};
export default App;
