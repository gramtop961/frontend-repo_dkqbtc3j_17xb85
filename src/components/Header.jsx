import React from 'react';
import { Rocket } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b border-slate-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-slate-900 text-white">
            <Rocket size={18} />
          </div>
          <span className="font-semibold tracking-tight">Hello World</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#hello" className="hover:text-slate-900 transition-colors">Home</a>
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#get-started" className="hover:text-slate-900 transition-colors">Get Started</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
