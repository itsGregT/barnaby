export type Campaign = {
  id: string;
  name: string;
  region: string;
  status: string;
  players: number;
  nextSession: string;
  description: string;
  characters: string[];
  recentSessions: string[];
};