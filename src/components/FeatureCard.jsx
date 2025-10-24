import React from 'react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-slate-100 text-slate-900 p-2 group-hover:bg-slate-900 group-hover:text-white transition-colors">
          <Icon size={18} />
        </div>
        <h3 className="font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
