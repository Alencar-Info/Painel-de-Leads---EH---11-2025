import React, { useState, useEffect } from 'react';
import { getDashboardData } from './services/dataService';
import type { DashboardData } from './types';
import DashboardGrid from './components/DashboardGrid';
import DateRangePicker from './components/DateRangePicker';

const App: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // Date range state
  const today = new Date().toISOString().split('T')[0];
  const thirtyDaysAgo = new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().split('T')[0];
  const [dateRange, setDateRange] = useState({ start: thirtyDaysAgo, end: today });

  // Cross-filtering state
  const [channelFilter, setChannelFilter] = useState<string | null>(null);
  const [sourceFilter, setSourceFilter] = useState<string | null>(null);
  const [campaignFilter, setCampaignFilter] = useState<string | null>(null);
  const [mediumFilter, setMediumFilter] = useState<string | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const dashboardData = await getDashboardData(dateRange, channelFilter, sourceFilter, campaignFilter, mediumFilter);
        setData(dashboardData);
        setError(null);
      } catch (err) {
        setError('Falha ao carregar os dados do painel.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dateRange, channelFilter, sourceFilter, campaignFilter, mediumFilter]);

  const handleResetFilters = () => {
    setChannelFilter(null);
    setSourceFilter(null);
    setCampaignFilter(null);
    setMediumFilter(null);
  }

  const activeFilterCount = [channelFilter, sourceFilter, campaignFilter, mediumFilter].filter(Boolean).length;


  return (
    <div className="min-h-screen bg-slate-900 text-white p-4 sm:p-6 lg:p-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-slate-100">Painel de Captação de Leads</h1>
        <p className="text-slate-400 mt-1">Análise de performance em tempo real.</p>
      </header>
      
      <div className="flex flex-wrap gap-4 items-center mb-6 bg-slate-800/50 p-4 rounded-xl">
        <DateRangePicker value={dateRange} onChange={setDateRange} />
        
        {data && (
            <>
                <select 
                    value={campaignFilter || ''} 
                    onChange={(e) => setCampaignFilter(e.target.value || null)}
                    className="bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-sm w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                    <option value="">Todas Campanhas</option>
                    {data.allCampaigns.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <select 
                    value={mediumFilter || ''}
                    onChange={(e) => setMediumFilter(e.target.value || null)}
                    className="bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-sm w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                    <option value="">Todas Mídias</option>
                    {data.allMediums.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
            </>
        )}

        {activeFilterCount > 0 && (
          <button 
            onClick={handleResetFilters}
            className="w-full sm:w-auto bg-red-600/80 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Limpar Filtros ({activeFilterCount})
          </button>
        )}
      </div>

      <main>
        {loading && (
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-cyan-500"></div>
          </div>
        )}
        {error && <div className="text-center text-red-500 bg-red-900/20 p-4 rounded-lg">{error}</div>}
        {data && !loading && !error && (
            <DashboardGrid 
                data={data} 
                onChannelFilter={setChannelFilter}
                onSourceFilter={setSourceFilter}
            />
        )}
      </main>
       <footer className="text-center mt-12 text-slate-500 text-sm">
        <p>Painel de Leads &copy; 2024</p>
      </footer>
    </div>
  );
};

export default App;