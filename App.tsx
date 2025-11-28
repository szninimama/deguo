import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BackgroundInfo } from './components/BackgroundInfo';
import { Comparison } from './components/Comparison';
import { Services } from './components/Services';
import { AIPlanner } from './components/AIPlanner';
import { Contact } from './components/Contact';
import { PainPoints } from './components/PainPoints';
import { Requirements } from './components/Requirements';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-gray-100 font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PainPoints />
        <BackgroundInfo />
        {/* Divider with gradient */}
        <div className="h-1 bg-gradient-to-r from-black via-neon to-black opacity-50"></div>
        <Comparison />
        <Requirements />
        <Process />
        <Services />
        <FAQ />
        <AIPlanner />
        <Contact />
      </main>
    </div>
  );
}

export default App;