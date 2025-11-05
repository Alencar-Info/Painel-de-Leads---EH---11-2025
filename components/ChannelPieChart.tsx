
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { ChannelDistribution } from '../types';

interface ChartProps {
  data: ChannelDistribution[];
  onFilter: (channel: string | null) => void;
}

const COLORS = ['#22c55e', '#f59e0b', '#64748b']; // Green for Organic, Amber for Paid, Slate for Others

const ChannelPieChart: React.FC<ChartProps> = ({ data, onFilter }) => {
  return (
     <>
      <h3 className="text-lg font-semibold text-slate-200 mb-4">Distribuição de Leads</h3>
      <div style={{ width: '100%', height: 350 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
              onClick={(d) => onFilter(d.name)}
              cursor="pointer"
              label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
                  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                  const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
                  const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
                  return (
                    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                      {`${(percent * 100).toFixed(0)}%`}
                    </text>
                  );
                }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(30, 41, 59, 0.9)',
                borderColor: '#475569',
                borderRadius: '0.5rem'
              }}
            />
            <Legend wrapperStyle={{fontSize: "14px"}}/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default ChannelPieChart;
