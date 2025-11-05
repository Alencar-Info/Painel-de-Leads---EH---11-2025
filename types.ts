export interface Lead {
  registrationDate: string;
  name: string;
  email: string;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
}

export interface LeadsByDay {
  date: string;
  count: number;
  cumulative: number;
  pacing: number;
}

export interface ChannelDistribution {
  name: string;
  value: number;
}

export interface TopSource {
  name: string;
  count: number;
}

export interface CampaignPerformance {
    campaign: string;
    medium: string;
    count: number;
}

export interface DashboardData {
  totalLeads: number;
  totalLeadsChange: number;
  organicLeads: number;
  organicLeadsChange: number;
  paidLeads: number;
  paidLeadsChange: number;
  cpl: number;
  cplChange: number;
  leadsByDay: LeadsByDay[];
  channelDistribution: ChannelDistribution[];
  topSources: TopSource[];
  campaignPerformance: CampaignPerformance[];
  recentLeads: Lead[];
  leadGoal: number;
  leadGoalProgress: number;
  projectedLeads: number;
  allCampaigns: string[];
  allMediums: string[];
  insights: string[];
}