import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="">© {year} Hello World Starter</p>
        <p className="">Built with React + Tailwind</p>
      </div>
    </footer>
  );
};

export default Footer;
