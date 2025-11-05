import React from 'react';
import { ArrowUp, ArrowDown } from './Icons';

interface ScorecardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  iconBgClass: string;
  subtitle?: React.ReactNode;
  change?: number;
}

const ChangeIndicator: React.FC<{ value?: number }> = ({ value }) => {
    if (value === undefined || isNaN(value) || !isFinite(value)) {
        return null;
    }

    const isPositive = value > 0;
    const isNegative = value < 0;
    const colorClass = isPositive ? 'text-green-400' : isNegative ? 'text-red-400' : 'text-slate-400';
    const Icon = isPositive ? ArrowUp : isNegative ? ArrowDown : null;

    return (
        <div className={`flex items-center text-sm font-semibold ${colorClass} mt-2`}>
            {Icon && <Icon className="h-4 w-4 mr-1" />}
            <span>{value.toFixed(1)}%</span>
            <span className="text-slate-400 ml-1.5 hidden sm:inline">vs. período anterior</span>
        </div>
    );
};


const Scorecard: React.FC<ScorecardProps> = ({ title, value, icon, iconBgClass, subtitle, change }) => {
  return (
    <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg flex items-center justify-between transition-all duration-300 hover:bg-slate-800 hover:shadow-xl hover:shadow-cyan-500/10">
      <div>
        <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">{title}</p>
        <p className="text-5xl font-bold text-slate-100 mt-1">{value}</p>
        {change !== undefined ? <ChangeIndicator value={change} /> : subtitle && <div className="text-sm text-slate-400 mt-2 space-y-1">{subtitle}</div>}
      </div>
      <div className={`p-4 rounded-full ${iconBgClass}`}>
        {icon}
      </div>
    </div>
  );
};

export default Scorecard;