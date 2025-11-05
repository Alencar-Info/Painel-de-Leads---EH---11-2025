
import React from 'react';
import type { Lead } from '../types';

interface TableProps {
  data: Lead[];
}

const RecentLeadsTable: React.FC<TableProps> = ({ data }) => {
  return (
    <div>
        <h3 className="text-lg font-semibold text-slate-200 mb-4">Últimos Leads Cadastrados</h3>
        <div className="overflow-y-auto h-[350px] pr-2">
            <table className="w-full text-sm text-left text-slate-400">
                <thead className="text-xs text-slate-300 uppercase bg-slate-700 sticky top-0">
                    <tr>
                        <th scope="col" className="px-4 py-3">Data Cadastro</th>
                        <th scope="col" className="px-4 py-3">Nome</th>
                        <th scope="col" className="px-4 py-3 hidden sm:table-cell">Email</th>
                        <th scope="col" className="px-4 py-3">Fonte (UTM)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((lead, index) => (
                        <tr key={index} className="border-b border-slate-700 hover:bg-slate-700/50">
                            <td className="px-4 py-3">{lead.registrationDate}</td>
                            <td className="px-4 py-3 font-medium text-slate-200 whitespace-nowrap">{lead.name}</td>
                            <td className="px-4 py-3 hidden sm:table-cell">{lead.email}</td>
                            <td className="px-4 py-3">{lead.utmSource || 'N/A'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default RecentLeadsTable;
