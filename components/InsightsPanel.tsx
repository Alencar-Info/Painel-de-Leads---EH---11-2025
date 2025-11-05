import React from 'react';
import { Lightbulb } from './Icons';

interface InsightsPanelProps {
  insights: string[];
}

const InsightsPanel: React.FC<InsightsPanelProps> = ({ insights }) => {
    if (insights.length === 0) {
        return null;
    }

    return (
        <div className="bg-slate-800/30 p-4 sm:p-6 rounded-2xl border border-indigo-500/30">
            <h3 className="text-lg font-semibold text-slate-200 mb-3 flex items-center">
                <Lightbulb className="h-6 w-6 mr-3 text-indigo-400" />
                Insights Automatizados
            </h3>
            <ul className="space-y-2 text-slate-300 text-sm sm:text-base">
                {insights.map((insight, index) => (
                    <li key={index} className="flex items-start">
                        <span className="text-indigo-400 mr-2 mt-1">▸</span>
                        <span>{insight}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InsightsPanel;