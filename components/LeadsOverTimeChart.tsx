import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
import type { LeadsByDay } from '../types';

interface ChartProps {
  data: LeadsByDay[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-700 p-3 rounded-lg border border-slate-600">
        <p className="label text-slate-300">{`Data: ${label}`}</p>
        {payload.find(p => p.dataKey === 'count') && <p className="intro text-cyan-400">{`Novos Leads: ${payload.find(p => p.dataKey === 'count').value}`}</p>}
        {payload.find(p => p.dataKey === 'cumulative') && <p className="intro text-amber-400">{`Total Acumulado: ${payload.find(p => p.dataKey === 'cumulative').value}`}</p>}
        {payload.find(p => p.dataKey === 'pacing') && <p className="intro text-red-400">{`Ritmo da Meta: ${payload.find(p => p.dataKey === 'pacing').value.toFixed(0)}`}</p>}
      </div>
    );
  }
  return null;
};

const LeadsOverTimeChart: React.FC<ChartProps> = ({ data }) => {
  return (
    <>
      <h3 className="text-lg font-semibold text-slate-200 mb-4">Leads Capturados por Dia</h3>
      <div style={{ width: '100%', height: 350 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 5,
              right: 20,
              left: -10,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="date" stroke="#94a3b8" tick={{ fontSize: 12 }} />
            <YAxis yAxisId="left" stroke="#94a3b8" tick={{ fontSize: 12 }} />
            <YAxis yAxisId="right" orientation="right" stroke="#94a3b8" tick={{ fontSize: 12 }} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{fontSize: "14px"}}/>
            <defs>
              <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area yAxisId="left" type="monotone" dataKey="count" name="Novos Leads" stroke="#22d3ee" fill="url(#colorCount)" strokeWidth={2} />
            <Line yAxisId="right" type="monotone" dataKey="cumulative" name="Total Acumulado" stroke="#fbbf24" strokeWidth={2} dot={false} />
            <Line yAxisId="right" type="monotone" dataKey="pacing" name="Ritmo da Meta" stroke="#f43f5e" strokeWidth={2} dot={false} strokeDasharray="5 5" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default LeadsOverTimeChart;