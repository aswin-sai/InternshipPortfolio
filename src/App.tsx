import React from 'react';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { TechStack } from './components/TechStack';
import { Achievements } from './components/Achievements';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Hero />
      <Timeline />
      <TechStack />
      <Achievements />
      <Footer />
    </div>
  );
}

export default App;