import React from 'react';
import Header from './components/Header.jsx';
import HelloMessage from './components/HelloMessage.jsx';
import FeaturesGrid from './components/FeaturesGrid.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900 flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="px-6 md:px-10 max-w-6xl mx-auto py-16 md:py-24">
          <HelloMessage />
        </section>

        <section className="px-6 md:px-10 max-w-6xl mx-auto pb-16 md:pb-24">
          <FeaturesGrid />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
