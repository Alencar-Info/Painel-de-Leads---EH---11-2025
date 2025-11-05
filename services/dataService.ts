import type { Lead, DashboardData, CampaignPerformance } from '../types';

// =================================================================
// DADOS DE EXEMPLO (MOCK) - EXPANDIDOS
// =================================================================
const mockLeads: Lead[] = [
    // Semana 1
    { registrationDate: '2024-06-25', name: 'Juliana Paes', email: 'juliana.paes@example.com', utmSource: 'google', utmMedium: 'cpc', utmCampaign: 'promo-julho' },
    { registrationDate: '2024-06-25', name: 'Ricardo Neves', email: 'ricardo.neves@example.com', utmSource: 'insta', utmMedium: 'organic', utmCampaign: 'conteudo-semanal' },
    { registrationDate: '2024-06-26', name: 'Beatriz Almeida', email: 'beatriz.almeida@example.com', utmSource: 'facebook', utmMedium: 'cpc', utmCampaign: 'promo-julho' },
    { registrationDate: '2024-06-27', name: 'Thiago Ventura', email: 'thiago.ventura@example.com', utmSource: 'youtube', utmMedium: 'organic', utmCampaign: 'lancamento-verao' },
    { registrationDate: '2024-06-28', name: 'Fernanda Lima', email: 'fernanda.lima@example.com', utmSource: 'linkedin', utmMedium: 'organic', utmCampaign: 'artigo-blog' },
    { registrationDate: '2024-06-29', name: 'Lucas Martins', email: 'lucas.martins@example.com', utmSource: 'google', utmMedium: 'cpc', utmCampaign: 'remarketing-q2' },
    { registrationDate: '2024-06-30', name: 'Camila Souza', email: 'camila.souza@example.com', utmSource: 'insta', utmMedium: 'organic', utmCampaign: 'stories' },

    // Semana 2
    { registrationDate: '2024-07-01', name: 'Guilherme Rocha', email: 'guilherme.rocha@example.com', utmSource: 'tiktok', utmMedium: 'cpc', utmCampaign: 'webinar-agosto' },
    { registrationDate: '2024-07-01', name: 'Amanda Corrêa', email: 'amanda.correa@example.com', utmSource: 'insta', utmMedium: 'organic', utmCampaign: 'lancamento-verao' },
    { registrationDate: '2024-07-02', name: 'Rodrigo Bastos', email: 'rodrigo.bastos@example.com', utmSource: 'manychat', utmMedium: 'organic', utmCampaign: 'direct-message' },
    { registrationDate: '2024-07-03', name: 'Letícia Ribeiro', email: 'leticia.ribeiro@example.com', utmSource: 'google', utmMedium: 'cpc', utmCampaign: 'promo-julho' },
    { registrationDate: '2024-07-04', name: 'Felipe Azevedo', email: 'felipe.azevedo@example.com', utmSource: 'youtube', utmMedium: 'organic', utmCampaign: 'lancamento-verao' },
    { registrationDate: '2024-07-04', name: 'Laura Moreira', email: 'laura.moreira@example.com', utmSource: 'parceria-influencer', utmMedium: 'referral', utmCampaign: 'colab-verao' },
    { registrationDate: '2024-07-05', name: 'Vinícius Moraes', email: 'vinicius.moraes@example.com', utmSource: null, utmMedium: null, utmCampaign: null },
    { registrationDate: '2024-07-06', name: 'Sofia Castro', email: 'sofia.castro@example.com', utmSource: 'facebook', utmMedium: 'cpc', utmCampaign: 'webinar-agosto' },
    { registrationDate: '2024-07-07', name: 'Igor Santos', email: 'igor.santos@example.com', utmSource: 'insta', utmMedium: 'organic', utmCampaign: 'conteudo-semanal' },

    // Semana 3 - Pico do Lançamento
    { registrationDate: '2024-07-15', name: 'Ana Silva', email: 'ana.silva@example.com', utmSource: 'insta', utmMedium: 'organic', utmCampaign: 'lancamento-verao' },
    { registrationDate: '2024-07-15', name: 'Bruno Costa', email: 'bruno.costa@example.com', utmSource: 'google', utmMedium: 'cpc', utmCampaign: 'promo-julho' },
    { registrationDate: '2024-07-15', name: 'Clara Ferreira', email: 'clara.ferreira@example.com', utmSource: 'tiktok', utmMedium: 'cpc', utmCampaign: 'webinar-agosto' },
    { registrationDate: '2024-07-16', name: 'Carla Dias', email: 'carla.dias@example.com', utmSource: 'youtube', utmMedium: 'organic', utmCampaign: 'lancamento-verao' },
    { registrationDate: '2024-07-16', name: 'Daniel Alves', email: 'daniel.alves@example.com', utmSource: 'facebook', utmMedium: 'cpc', utmCampaign: 'promo-julho' },
    { registrationDate: '2024-07-16', name: 'Eduarda Lima', email: 'eduarda.lima@example.com', utmSource: 'insta', utmMedium: 'organic', utmCampaign: 'lancamento-verao' },
    { registrationDate: '2024-07-16', name: 'Renan Oliveira', email: 'renan.oliveira@example.com', utmSource: 'google', utmMedium: 'cpc', utmCampaign: 'remarketing-q2' },
    { registrationDate: '2024-07-17', name: 'Fábio Melo', email: 'fabio.melo@example.com', utmSource: 'spotify', utmMedium: 'organic', utmCampaign: 'podcast-semanal' },
    { registrationDate: '2024-07-17', name: 'Gabriela Nunes', email: 'gabriela.nunes@example.com', utmSource: 'google', utmMedium: 'cpc', utmCampaign: 'promo-julho' },
    { registrationDate: '2024-07-17', name: 'Paulo Sergio', email: 'paulo.sergio@example.com', utmSource: 'insta', utmMedium: 'organic', utmCampaign: 'stories' },
    { registrationDate: '2024-07-18', name: 'Heitor Pinto', email: 'heitor.pinto@example.com', utmSource: 'manychat', utmMedium: 'organic', utmCampaign: 'direct-message' },
    { registrationDate: '2024-07-18', name: 'Isabela Rocha', email: 'isabela.rocha@example.com', utmSource: 'insta', utmMedium: 'organic', utmCampaign: 'lancamento-verao' },
    { registrationDate: '2024-07-18', name: 'João Pereira', email: 'joao.pereira@example.com', utmSource: 'google', utmMedium: 'cpc', utmCampaign: 'remarketing-q2' },
    { registrationDate: '2024-07-18', name: 'Vanessa Dias', email: 'vanessa.dias@example.com', utmSource: 'facebook', utmMedium: 'cpc', utmCampaign: 'webinar-agosto' },
    { registrationDate: '2024-07-19', name: 'Larissa Moreira', email: 'larissa.moreira@example.com', utmSource: 'milagre-diario', utmMedium: 'organic', utmCampaign: 'parceria' },
    { registrationDate: '2024-07-19', name: 'Marcos Andrade', email: 'marcos.andrade@example.com', utmSource: 'youtube', utmMedium: 'organic', utmCampaign: 'lancamento-verao' },
    { registrationDate: '2024-07-19', name: 'Rafaela Gomes', email: 'rafaela.gomes@example.com', utmSource: 'linkedin', utmMedium: 'cpc', utmCampaign: 'artigo-blog' },
    { registrationDate: '2024-07-20', name: 'Natalia Barros', email: 'natalia.barros@example.com', utmSource: 'facebook', utmMedium: 'cpc', utmCampaign: 'promo-julho' },
    { registrationDate: '2024-07-20', name: 'Otávio Martins', email: 'otavio.martins@example.com', utmSource: 'insta', utmMedium: 'organic', utmCampaign: 'stories' },
    { registrationDate: '2024-07-20', name: 'Patrícia Souza', email: 'patricia.souza@example.com', utmSource: 'insta', utmMedium: 'organic', utmCampaign: 'stories' },
    { registrationDate: '2024-07-20', name: 'Pedro Gomes', email: 'pedro.gomes@example.com', utmSource: null, utmMedium: null, utmCampaign: null },
    
    // Semana 4
    { registrationDate: '2024-07-21', name: 'Yasmin Ferreira', email: 'yasmin.ferreira@example.com', utmSource: 'google', utmMedium: 'cpc', utmCampaign: 'remarketing-q2' },
    { registrationDate: '2024-07-21', name: 'Diego Barbosa', email: 'diego.barbosa@example.com', utmSource: 'youtube', utmMedium: 'organic', utmCampaign: 'conteudo-semanal' },
    { registrationDate: '2024-07-22', name: 'Manuela Pinto', email: 'manuela.pinto@example.com', utmSource: 'insta', utmMedium: 'organic', utmCampaign: 'lancamento-verao' },
    { registrationDate: '2024-07-22', name: 'Arthur Lopes', email: 'arthur.lopes@example.com', utmSource: 'tiktok', utmMedium: 'cpc', utmCampaign: 'webinar-agosto' },
    { registrationDate: '2024-07-23', name: 'Breno Cunha', email: 'breno.cunha@example.com', utmSource: 'facebook', utmMedium: 'cpc', utmCampaign: 'promo-julho' },
    { registrationDate: '2024-07-23', name: 'Elisa Farias', email: 'elisa.farias@example.com', utmSource: 'parceria-influencer', utmMedium: 'referral', utmCampaign: 'colab-verao' },
    { registrationDate: '2024-07-24', name: 'Caio Ribeiro', email: 'caio.ribeiro@example.com', utmSource: 'google', utmMedium: 'cpc', utmCampaign: 'promo-julho' },
    { registrationDate: '2024-07-24', name: 'Esther Ramos', email: 'esther.ramos@example.com', utmSource: 'insta', utmMedium: 'organic', utmCampaign: 'stories' },
    { registrationDate: '2024-07-25', name: 'Davi Castro', email: 'davi.castro@example.com', utmSource: 'linkedin', utmMedium: 'organic', utmCampaign: 'artigo-blog' },
    { registrationDate: '2024-07-25', name: 'Isadora Alves', email: 'isadora.alves@example.com', utmSource: null, utmMedium: null, utmCampaign: null },
    
    // Semana 5
    { registrationDate: '2024-07-26', name: 'Laura Mendes', email: 'laura.mendes@example.com', utmSource: 'google', utmMedium: 'cpc', utmCampaign: 'promo-julho' },
    { registrationDate: '2024-07-26', name: 'Vitor Hugo', email: 'vitor.hugo@example.com', utmSource: 'insta', utmMedium: 'organic', utmCampaign: 'conteudo-semanal' },
    { registrationDate: '2024-07-27', name: 'Mariana Costa', email: 'mariana.costa@example.com', utmSource: 'facebook', utmMedium: 'cpc', utmCampaign: 'webinar-agosto' },
    { registrationDate: '2024-07-27', name: 'Enzo Gabriel', email: 'enzo.gabriel@example.com', utmSource: 'bing', utmMedium: 'cpc', utmCampaign: 'remarketing-q2' },
    { registrationDate: '2024-07-28', name: 'Alice Rodrigues', email: 'alice.rodrigues@example.com', utmSource: 'youtube', utmMedium: 'organic', utmCampaign: 'lancamento-verao' },
    { registrationDate: '2024-07-29', name: 'Miguel Pereira', email: 'miguel.pereira@example.com', utmSource: 'email-mkt', utmMedium: 'email', utmCampaign: 'newsletter-julho' },
    { registrationDate: '2024-07-29', name: 'Sophia Carvalho', email: 'sophia.carvalho@example.com', utmSource: 'linkedin', utmMedium: 'cpc', utmCampaign: 'artigo-blog' },
    { registrationDate: '2024-07-30', name: 'Arthur Melo', email: 'arthur.melo@example.com', utmSource: 'insta', utmMedium: 'organic', utmCampaign: 'stories' },
    { registrationDate: '2024-07-31', name: 'Helena Dias', email: 'helena.dias@example.com', utmSource: null, utmMedium: null, utmCampaign: null },
    { registrationDate: '2024-07-31', name: 'Bernardo Barros', email: 'bernardo.barros@example.com', utmSource: 'google', utmMedium: 'cpc', utmCampaign: 'promo-julho' },

    // Semana 6 - Agosto
    { registrationDate: '2024-08-01', name: 'Valentina Ribeiro', email: 'valentina.ribeiro@example.com', utmSource: 'taboola', utmMedium: 'display', utmCampaign: 'webinar-agosto' },
    { registrationDate: '2024-08-01', name: 'Heitor Martins', email: 'heitor.martins@example.com', utmSource: 'insta', utmMedium: 'organic', utmCampaign: 'conteudo-semanal' },
    { registrationDate: '2024-08-02', name: 'Davi Luiz', email: 'davi.luiz@example.com', utmSource: 'facebook', utmMedium: 'social-paid', utmCampaign: 'q3-content' },
    { registrationDate: '2024-08-03', name: 'Lívia Andrade', email: 'livia.andrade@example.com', utmSource: 'google', utmMedium: 'cpc', utmCampaign: 'remarketing-q2' },
    { registrationDate: '2024-08-03', name: 'Théo Farias', email: 'theo.farias@example.com', utmSource: 'youtube', utmMedium: 'organic', utmCampaign: 'conteudo-semanal' },
    { registrationDate: '2024-08-04', name: 'Cecília Lima', email: 'cecilia.lima@example.com', utmSource: 'outbrain', utmMedium: 'display', utmCampaign: 'webinar-agosto' },
    { registrationDate: '2024-08-04', name: 'Isaac Moreira', email: 'isaac.moreira@example.com', utmSource: 'manychat', utmMedium: 'organic', utmCampaign: 'direct-message' },
    { registrationDate: '2024-08-05', name: 'Maitê Gomes', email: 'maite.gomes@example.com', utmSource: 'parceria-influencer', utmMedium: 'referral', utmCampaign: 'colab-agosto' },
    { registrationDate: '2024-08-05', name: 'Benjamin Alves', email: 'benjamin.alves@example.com', utmSource: 'google', utmMedium: 'cpc', utmCampaign: 'promo-julho' },

    // Semana 7
    { registrationDate: '2024-08-06', name: 'Isis Oliveira', email: 'isis.oliveira@example.com', utmSource: 'insta', utmMedium: 'organic', utmCampaign: 'stories' },
    { registrationDate: '2024-08-06', name: 'Emanuel Santos', email: 'emanuel.santos@example.com', utmSource: 'tiktok', utmMedium: 'cpc', utmCampaign: 'webinar-agosto' },
    { registrationDate: '2024-08-07', name: 'Liz Azevedo', email: 'liz.azevedo@example.com', utmSource: null, utmMedium: null, utmCampaign: null },
    { registrationDate: '2024-08-08', name: 'Guilherme Souza', email: 'guilherme.souza@example.com', utmSource: 'linkedin', utmMedium: 'organic', utmCampaign: 'artigo-blog' },
    { registrationDate: '2024-08-08', name: 'Eloá Costa', email: 'eloa.costa@example.com', utmSource: 'facebook', utmMedium: 'cpc', utmCampaign: 'q3-content' },
    { registrationDate: '2024-08-09', name: 'Nicolas Ferreira', email: 'nicolas.ferreira@example.com', utmSource: 'google', utmMedium: 'cpc', utmCampaign: 'remarketing-q2' },
    { registrationDate: '2024-08-10', name: 'Maria Alice', email: 'maria.alice@example.com', utmSource: 'spotify', utmMedium: 'organic', utmCampaign: 'podcast-semanal' },
    { registrationDate: '2024-08-10', name: 'Henrique Almeida', email: 'henrique.almeida@example.com', utmSource: 'insta', utmMedium: 'organic', utmCampaign: 'lancamento-verao' },

    // Semana 8
    { registrationDate: '2024-08-11', name: 'Yasmin Gonçalves', email: 'yasmin.goncalves@example.com', utmSource: 'google', utmMedium: 'cpc', utmCampaign: 'promo-agosto' },
    { registrationDate: '2024-08-11', name: 'Bryan Rodrigues', email: 'bryan.rodrigues@example.com', utmSource: 'youtube', utmMedium: 'organic', utmCampaign: 'conteudo-semanal' },
    { registrationDate: '2024-08-12', name: 'Júlia Nogueira', email: 'julia.nogueira@example.com', utmSource: 'taboola', utmMedium: 'display', utmCampaign: 'black-friday-preview' },
    { registrationDate: '2024-08-13', name: 'Pietro Cunha', email: 'pietro.cunha@example.com', utmSource: 'insta', utmMedium: 'organic', utmCampaign: 'stories' },
    { registrationDate: '2024-08-13', name: 'Alícia Fernandes', email: 'alicia.fernandes@example.com', utmSource: 'facebook', utmMedium: 'social-paid', utmCampaign: 'q3-content' },
    { registrationDate: '2024-08-14', name: 'Enzo Rocha', email: 'enzo.rocha@example.com', utmSource: 'email-mkt', utmMedium: 'email', utmCampaign: 'newsletter-agosto' },
    { registrationDate: '2024-08-14', name: 'Rebeca Barbosa', email: 'rebeca.barbosa@example.com', utmSource: 'google', utmMedium: 'cpc', utmCampaign: 'promo-agosto' },
    { registrationDate: '2024-08-15', name: 'Ryan Silva', email: 'ryan.silva@example.com', utmSource: 'bing', utmMedium: 'cpc', utmCampaign: 'remarketing-q2' },
    { registrationDate: '2024-08-15', name: 'Manuela Martins', email: 'manuela.martins@example.com', utmSource: 'parceria-influencer', utmMedium: 'referral', utmCampaign: 'colab-agosto' },
    { registrationDate: '2024-08-15', name: 'Felipe Santana', email: 'felipe.santana@example.com', utmSource: null, utmMedium: null, utmCampaign: null },
    
    // Semana 9
    { registrationDate: '2024-08-16', name: 'Ana Clara', email: 'ana.clara@example.com', utmSource: 'insta', utmMedium: 'organic', utmCampaign: 'conteudo-semanal' },
    { registrationDate: '2024-08-16', name: 'Leonardo Oliveira', email: 'leonardo.oliveira@example.com', utmSource: 'google', utmMedium: 'cpc', utmCampaign: 'promo-agosto' },
    { registrationDate: '2024-08-17', name: 'Marina Azevedo', email: 'marina.azevedo@example.com', utmSource: 'linkedin', utmMedium: 'cpc', utmCampaign: 'artigo-blog' },
    { registrationDate: '2024-08-17', name: 'Lucca Ribeiro', email: 'lucca.ribeiro@example.com', utmSource: 'youtube', utmMedium: 'organic', utmCampaign: 'lancamento-verao' },
    { registrationDate: '2024-08-18', name: 'Isabelly Castro', email: 'isabelly.castro@example.com', utmSource: 'facebook', utmMedium: 'social-paid', utmCampaign: 'black-friday-preview' },
    { registrationDate: '2024-08-18', name: 'Breno Correia', email: 'breno.correia@example.com', utmSource: 'manychat', utmMedium: 'organic', utmCampaign: 'direct-message' },
    { registrationDate: '2024-08-19', name: 'Stella Fogaça', email: 'stella.fogaca@example.com', utmSource: 'google', utmMedium: 'cpc', utmCampaign: 'promo-agosto' },
    { registrationDate: '2024-08-20', name: 'Cauã Almeida', email: 'caua.almeida@example.com', utmSource: 'outbrain', utmMedium: 'display', utmCampaign: 'webinar-agosto' },
    { registrationDate: '2024-08-20', name: 'Elisa Pinto', email: 'elisa.pinto@example.com', utmSource: 'insta', utmMedium: 'organic', utmCampaign: 'stories' },
    { registrationDate: '2024-08-21', name: 'Enrico Santos', email: 'enrico.santos@example.com', utmSource: null, utmMedium: null, utmCampaign: null },
    { registrationDate: '2024-08-22', name: 'Laís Pereira', email: 'lais.pereira@example.com', utmSource: 'google', utmMedium: 'cpc', utmCampaign: 'remarketing-q2' },
    { registrationDate: '2024-08-23', name: 'Anthony Moreira', email: 'anthony.moreira@example.com', utmSource: 'tiktok', utmMedium: 'cpc', utmCampaign: 'webinar-agosto' },
    { registrationDate: '2024-08-24', name: 'Catarina Lima', email: 'catarina.lima@example.com', utmSource: 'spotify', utmMedium: 'organic', utmCampaign: 'podcast-semanal' },
];

const TOTAL_INVESTMENT = 550; 
const LEAD_GOAL = 150;

const getMainChannel = (lead: Lead): 'Orgânico' | 'Pago' | 'Outros' => {
  const paidMediums = ['cpc', 'paid', 'ads', 'display', 'social-paid'];
  const organicMediums = ['organic', 'referral', 'email'];

  if (lead.utmMedium && paidMediums.some(m => lead.utmMedium.includes(m))) {
    return 'Pago';
  }
  if (lead.utmMedium && organicMediums.some(m => lead.utmMedium.includes(m))) {
    return 'Orgânico';
  }
  // Fallback for sources known to be organic if medium is missing/ambiguous
  const organicSources = ['insta', 'youtube', 'spotify', 'manychat', 'milagre-diario'];
  if (lead.utmSource && organicSources.some(s => lead.utmSource.includes(s))) {
      return 'Orgânico';
  }
  
  return 'Outros'; // For nulls/direct
};

const calculateKpis = (leads: Lead[], investment: number) => {
    const uniqueLeads = Array.from(new Map(leads.map(lead => [lead.email, lead])).values());
    const totalLeads = uniqueLeads.length;
    const organicLeads = uniqueLeads.filter(lead => getMainChannel(lead) === 'Orgânico').length;
    const paidLeads = uniqueLeads.filter(lead => getMainChannel(lead) === 'Pago').length;
    const cpl = paidLeads > 0 ? investment / paidLeads : 0;
    return { totalLeads, organicLeads, paidLeads, cpl, uniqueLeads };
};

const calculateChange = (current: number, previous: number) => {
    if (previous === 0) return current > 0 ? 100 : 0;
    return ((current - previous) / previous) * 100;
};

const generateInsights = (currentKpis: any, prevKpis: any, topSources: any[], campaignPerformance: any[], projectedLeads: number, leadGoal: number): string[] => {
    const insights: string[] = [];

    // Insight 1: Best source
    if (topSources.length > 0 && currentKpis.totalLeads > 0) {
        const bestSource = topSources[0];
        const percentage = (bestSource.count / currentKpis.totalLeads) * 100;
        if (percentage > 25) {
            insights.push(`A fonte "${bestSource.name}" é a de melhor performance, responsável por ${percentage.toFixed(0)}% dos leads do período.`);
        }
    }

    // Insight 2: CPL Anomaly
    const cplChangeRaw = calculateChange(currentKpis.cpl, prevKpis.cpl);
    if (cplChangeRaw > 10) {
        insights.push(`Atenção: O CPL subiu ${cplChangeRaw.toFixed(0)}% para R$${currentKpis.cpl.toFixed(2)}, indicando menor eficiência nos anúncios.`);
    } else if (cplChangeRaw < -10) {
        insights.push(`Ótimo! O CPL caiu ${Math.abs(cplChangeRaw).toFixed(0)}% para R$${currentKpis.cpl.toFixed(2)}, maximizando o investimento.`);
    }

    // Insight 3: Pacing/Projection
    const projectionPercentage = (projectedLeads / leadGoal) * 100;
    if (currentKpis.totalLeads > 5) { // Only show insight if there's some data
      if (projectionPercentage < 90) {
          insights.push(`Alerta de Ritmo: Com a média atual, a projeção é de ${Math.round(projectedLeads)} leads, apenas ${projectionPercentage.toFixed(0)}% da meta. Acelere a captação!`);
      } else if (projectionPercentage > 110) {
          insights.push(`Performance Forte: No ritmo atual, a projeção é de superar a meta em ${(projectionPercentage - 100).toFixed(0)}%, alcançando ${Math.round(projectedLeads)} leads.`);
      }
    }

    return insights.slice(0, 3);
};


export const getDashboardData = async (
  dateRange: { start: string, end: string },
  channelFilter: string | null,
  sourceFilter: string | null,
  campaignFilter: string | null,
  mediumFilter: string | null,
): Promise<DashboardData> => {
  await new Promise(resolve => setTimeout(resolve, 500));

  const allLeads: Lead[] = mockLeads;

  // Get all campaigns and mediums for filter dropdowns
  const allCampaigns = [...new Set(allLeads.map(lead => lead.utmCampaign || 'N/A').filter(Boolean))].sort();
  const allMediums = [...new Set(allLeads.map(lead => lead.utmMedium || 'N/A').filter(Boolean))].sort();


  // --- Calculate stats for current and previous period for comparison ---
  const { start, end } = dateRange;
  const startDate = new Date(start);
  const endDate = new Date(end);
  const diffDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;

  const prevEndDate = new Date(startDate);
  prevEndDate.setDate(prevEndDate.getDate() - 1);
  const prevStartDate = new Date(prevEndDate);
  prevStartDate.setDate(prevStartDate.getDate() - (diffDays > 0 ? diffDays - 1 : 0));

  const leadsInCurrentPeriod = allLeads.filter(lead => {
    const leadDate = new Date(lead.registrationDate);
    return leadDate >= startDate && leadDate <= endDate;
  });

  const leadsInPrevPeriod = allLeads.filter(lead => {
    const leadDate = new Date(lead.registrationDate);
    return leadDate >= prevStartDate && leadDate <= prevEndDate;
  });
  
  // Prorate investment for comparison
  const paidLeadsInTotal = allLeads.filter(l => getMainChannel(l) === 'Pago').length;
  const investmentPerPaidLead = paidLeadsInTotal > 0 ? TOTAL_INVESTMENT / paidLeadsInTotal : 0;
  
  const paidLeadsInCurrentPeriod = leadsInCurrentPeriod.filter(l => getMainChannel(l) === 'Pago').length;
  const currentInvestment = investmentPerPaidLead * paidLeadsInCurrentPeriod;

  const paidLeadsInPrevPeriod = leadsInPrevPeriod.filter(l => getMainChannel(l) === 'Pago').length;
  const prevInvestment = investmentPerPaidLead * paidLeadsInPrevPeriod;


  const currentKpis = calculateKpis(leadsInCurrentPeriod, currentInvestment);
  const prevKpis = calculateKpis(leadsInPrevPeriod, prevInvestment);

  const totalLeadsChange = calculateChange(currentKpis.totalLeads, prevKpis.totalLeads);
  const organicLeadsChange = calculateChange(currentKpis.organicLeads, prevKpis.organicLeads);
  const paidLeadsChange = calculateChange(currentKpis.paidLeads, prevKpis.paidLeads);
  // For CPL, a decrease is good (negative change), so we invert the sign.
  const cplChange = -calculateChange(currentKpis.cpl, prevKpis.cpl);

  // --- Apply cross-filters to the current period data for display ---
  let filteredLeads = leadsInCurrentPeriod;
  if (channelFilter) {
      filteredLeads = filteredLeads.filter(lead => getMainChannel(lead) === channelFilter);
  }
  if (sourceFilter) {
      filteredLeads = filteredLeads.filter(lead => (lead.utmSource || 'Direto') === sourceFilter);
  }
  if (campaignFilter) {
      filteredLeads = filteredLeads.filter(lead => (lead.utmCampaign || 'N/A') === campaignFilter);
  }
  if (mediumFilter) {
      filteredLeads = filteredLeads.filter(lead => (lead.utmMedium || 'N/A') === mediumFilter);
  }

  const { uniqueLeads } = calculateKpis(filteredLeads, currentInvestment);
  const totalLeads = uniqueLeads.length;
  const organicLeads = uniqueLeads.filter(lead => getMainChannel(lead) === 'Orgânico').length;
  const paidLeads = uniqueLeads.filter(lead => getMainChannel(lead) === 'Pago').length;

  const leadsByDayMap = new Map<string, number>();
  // Create a map for all days in the range to ensure continuity in the chart
  const fullDateRangeMap = new Map<string, number>();
  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    fullDateRangeMap.set(new Date(d).toISOString().split('T')[0], 0);
  }
  
  uniqueLeads.forEach(lead => {
    const date = lead.registrationDate;
    fullDateRangeMap.set(date, (fullDateRangeMap.get(date) || 0) + 1);
  });
  
  const sortedDates = Array.from(fullDateRangeMap.keys()).sort();
  let cumulative = 0;
  
  // Pacing calculation
  const requiredDailyAverage = LEAD_GOAL / (diffDays > 0 ? diffDays : 1);
  const leadsByDay = sortedDates.map((date, index) => {
    const count = fullDateRangeMap.get(date)!;
    cumulative += count;
    return { date, count, cumulative, pacing: (index + 1) * requiredDailyAverage };
  });

  const othersLeads = totalLeads - organicLeads - paidLeads;
  const channelDistribution = [
    { name: 'Orgânico', value: organicLeads },
    { name: 'Pago', value: paidLeads },
    { name: 'Outros', value: othersLeads },
  ].filter(c => c.value > 0);

  const topSourcesMap = new Map<string, number>();
  uniqueLeads.forEach(lead => {
    const source = lead.utmSource || 'Direto';
    topSourcesMap.set(source, (topSourcesMap.get(source) || 0) + 1);
  });
  const topSources = Array.from(topSourcesMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  const campaignMap = new Map<string, number>();
   uniqueLeads.forEach(lead => {
      const key = `${lead.utmCampaign || 'N/A'}|${lead.utmMedium || 'N/A'}`;
      campaignMap.set(key, (campaignMap.get(key) || 0) + 1);
  });
  const campaignPerformance: CampaignPerformance[] = Array.from(campaignMap.entries())
      .map(([key, count]) => {
          const [campaign, medium] = key.split('|');
          return { campaign, medium, count };
      })
      .sort((a, b) => b.count - a.count);

  const recentLeads = [...uniqueLeads].sort((a, b) => new Date(b.registrationDate).getTime() - new Date(a.registrationDate).getTime()).slice(0, 10);
  
  const cpl = paidLeads > 0 ? (investmentPerPaidLead * paidLeads) / paidLeads : 0;
  
  // Projection Calculation
  const daysSoFarInPeriod = (new Date().getTime() - startDate.getTime()) / (1000 * 3600 * 24);
  const daysElapsed = Math.min(diffDays, Math.max(0, daysSoFarInPeriod));
  const averageDailyLeads = daysElapsed > 0 ? currentKpis.totalLeads / daysElapsed : 0;
  const daysRemaining = diffDays - daysElapsed;
  const projectedLeads = currentKpis.totalLeads + (averageDailyLeads * (daysRemaining > 0 ? daysRemaining : 0));
  
  // Generate insights based on UNFILTERED data for the period
  const unfilteredTopSources = Array.from(calculateKpis(leadsInCurrentPeriod, currentInvestment).uniqueLeads.reduce((map, lead) => {
      const source = lead.utmSource || 'Direto';
      map.set(source, (map.get(source) || 0) + 1);
      return map;
  }, new Map<string, number>())).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count);
  const insights = generateInsights(currentKpis, prevKpis, unfilteredTopSources, campaignPerformance, projectedLeads, LEAD_GOAL);

  return {
    totalLeads: currentKpis.totalLeads, // Show unfiltered totals on scorecards
    totalLeadsChange,
    organicLeads: currentKpis.organicLeads,
    organicLeadsChange,
    paidLeads: currentKpis.paidLeads,
    paidLeadsChange,
    cpl: currentKpis.cpl,
    cplChange,
    leadsByDay, // Charts and tables use filtered data
    channelDistribution,
    topSources,
    campaignPerformance,
    recentLeads,
    leadGoal: LEAD_GOAL,
    leadGoalProgress: (currentKpis.totalLeads / LEAD_GOAL) * 100, // Goal progress uses unfiltered total
    projectedLeads,
    allCampaigns,
    allMediums,
    insights,
  };
};