import React from 'react';
import { motion } from 'framer-motion';

const HelloMessage = () => {
  return (
    <div id="hello" className="text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900"
      >
        Hello, World!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.08 }}
        className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto"
      >
        A minimal, beautiful starter to kick off your ideas with React + Tailwind.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.16 }}
        className="mt-8"
      >
        <a
          id="get-started"
          href="#features"
          className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-slate-900 text-white font-medium shadow hover:shadow-md hover:bg-slate-800 transition-all"
        >
          Get Started
        </a>
      </motion.div>
    </div>
  );
};

export default HelloMessage;
