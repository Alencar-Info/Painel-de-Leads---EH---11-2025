import React from 'react';
import type { DashboardData } from '../types';
import Scorecard from './Scorecard';
import LeadsOverTimeChart from './LeadsOverTimeChart';
import ChannelPieChart from './ChannelPieChart';
import TopSourcesBarChart from './TopSourcesBarChart';
import CampaignTable from './CampaignTable';
import RecentLeadsTable from './RecentLeadsTable';
import InsightsPanel from './InsightsPanel';
import { Users, Leaf, CreditCard, DollarSign, Target } from './Icons';


interface DashboardGridProps {
  data: DashboardData;
  onChannelFilter: (channel: string | null) => void;
  onSourceFilter: (source: string | null) => void;
}

const DashboardGrid: React.FC<DashboardGridProps> = ({ data, onChannelFilter, onSourceFilter }) => {
  return (
    <div className="space-y-6">
      {/* Section 0: Insights */}
      <InsightsPanel insights={data.insights} />

      {/* Section 1: Scorecards */}
      <div className="bg-slate-800/30 p-4 sm:p-6 rounded-2xl border border-cyan-500/30">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Scorecard 
                title="Total de Leads" 
                value={data.totalLeads} 
                change={data.totalLeadsChange}
                icon={<Users className="h-8 w-8 text-cyan-300" />} 
                iconBgClass="bg-cyan-900/50"
            />
            <Scorecard 
                title="Leads Orgânicos" 
                value={data.organicLeads} 
                change={data.organicLeadsChange}
                icon={<Leaf className="h-8 w-8 text-green-300" />} 
                iconBgClass="bg-green-900/50"
            />
            <Scorecard 
                title="Leads Pagos" 
                value={data.paidLeads} 
                change={data.paidLeadsChange}
                icon={<CreditCard className="h-8 w-8 text-amber-300" />} 
                iconBgClass="bg-amber-900/50"
            />
            <Scorecard 
                title="Custo por Lead (CPL)" 
                value={`R$ ${data.cpl.toFixed(2).replace('.', ',')}`}
                change={data.cplChange}
                icon={<DollarSign className="h-8 w-8 text-emerald-300" />} 
                iconBgClass="bg-emerald-900/50"
                subtitle="vs. período anterior"
            />
            <Scorecard 
                title="Progresso da Meta" 
                value={`${data.leadGoalProgress.toFixed(0)}%`} 
                icon={<Target className="h-8 w-8 text-indigo-300" />} 
                iconBgClass="bg-indigo-900/50"
                subtitle={
                  <>
                    <p>Meta: {data.totalLeads} de {data.leadGoal} leads</p>
                    <p>Projeção: {Math.round(data.projectedLeads)} leads</p>
                  </>
                }
            />
        </div>
      </div>

      {/* Section 2 & 3: Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-3 bg-slate-800 p-4 rounded-xl shadow-lg">
          <LeadsOverTimeChart data={data.leadsByDay} />
        </div>
        <div className="lg:col-span-1 bg-slate-800 p-4 rounded-xl shadow-lg">
          <ChannelPieChart data={data.channelDistribution} onFilter={onChannelFilter} />
        </div>
        <div className="lg:col-span-2 bg-slate-800 p-4 rounded-xl shadow-lg">
          <TopSourcesBarChart data={data.topSources} onFilter={onSourceFilter}/>
        </div>
      </div>
        
      {/* Section 4: Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-800 p-4 rounded-xl shadow-lg">
            <CampaignTable data={data.campaignPerformance} />
        </div>
        <div className="bg-slate-800 p-4 rounded-xl shadow-lg">
            <RecentLeadsTable data={data.recentLeads} />
        </div>
      </div>
    </div>
  );
};

export default DashboardGrid;