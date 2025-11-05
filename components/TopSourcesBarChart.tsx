
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import type { TopSource } from '../types';

interface ChartProps {
  data: TopSource[];
  onFilter: (source: string | null) => void;
}

const TopSourcesBarChart: React.FC<ChartProps> = ({ data, onFilter }) => {
  const sortedData = [...data].sort((a, b) => a.count - b.count);
    
  return (
    <>
      <h3 className="text-lg font-semibold text-slate-200 mb-4">Top Fontes de Leads (UTM Source)</h3>
      <div style={{ width: '100%', height: 350 }}>
        <ResponsiveContainer>
          <BarChart 
            layout="vertical" 
            data={sortedData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
            <XAxis type="number" stroke="#94a3b8" tick={{ fontSize: 12 }} />
            <YAxis 
              type="category" 
              dataKey="name" 
              stroke="#94a3b8" 
              width={80}
              tick={{ fontSize: 12 }}
            />
            <Tooltip
                contentStyle={{
                    backgroundColor: 'rgba(30, 41, 59, 0.9)',
                    borderColor: '#475569',
                    borderRadius: '0.5rem'
                }}
                cursor={{fill: 'rgba(100, 116, 139, 0.1)'}}
            />
            <Bar dataKey="count" name="Leads" fill="#0891b2" cursor="pointer" onClick={(d) => onFilter(d.name)}>
                <LabelList dataKey="count" position="right" style={{ fill: '#e2e8f0', fontSize: 12 }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default TopSourcesBarChart;
