export type CampaignStatus = "Active" | "Completed" | "Planning" | "Paused";

export type Campaign = {
    id: string;
    name: string;
    region: string;
    status: CampaignStatus;
    players: number;
    nextSession: string;
    description: string;
    characters: string[];
    recentSessions: string[];
};
