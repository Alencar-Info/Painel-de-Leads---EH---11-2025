
import React from 'react';
import type { CampaignPerformance } from '../types';

interface TableProps {
    data: CampaignPerformance[];
}

const CampaignTable: React.FC<TableProps> = ({ data }) => {
    const maxCount = Math.max(...data.map(item => item.count), 0);

    return (
        <div>
            <h3 className="text-lg font-semibold text-slate-200 mb-4">Performance por Campanha e Mídia</h3>
            <div className="overflow-y-auto h-[350px] pr-2">
                <table className="w-full text-sm text-left text-slate-400">
                    <thead className="text-xs text-slate-300 uppercase bg-slate-700 sticky top-0">
                        <tr>
                            <th scope="col" className="px-4 py-3">Campanha</th>
                            <th scope="col" className="px-4 py-3">Mídia</th>
                            <th scope="col" className="px-4 py-3 text-right">Leads</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="border-b border-slate-700 hover:bg-slate-700/50">
                                <td className="px-4 py-3 font-medium text-slate-200 whitespace-nowrap">{item.campaign}</td>
                                <td className="px-4 py-3">{item.medium}</td>
                                <td className="px-4 py-3 text-right font-semibold text-cyan-400">
                                    <div className="flex items-center justify-end gap-2">
                                        <span>{item.count}</span>
                                        <div className="w-20 bg-slate-600 rounded-full h-2">
                                            <div 
                                                className="bg-cyan-500 h-2 rounded-full"
                                                style={{ width: `${maxCount > 0 ? (item.count / maxCount) * 100 : 0}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                         {data.length === 0 && (
                            <tr>
                                <td colSpan={3} className="text-center py-8 text-slate-500">
                                    Nenhum dado para o período ou filtro selecionado.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CampaignTable;
