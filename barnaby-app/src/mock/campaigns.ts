import type { Campaign } from "@/src/types/campaign";

export const campaigns: Campaign[] = [
	{
		id: "enemy-within",
		name: "The Enemy Within",
		region: "Reikland",
		status: "Active",
		players: 5,
		nextSession: "Hexensnacht, 8:00 PM",
		description:
			"A grim investigation through corruption, cult activity, and political rot in the Empire.",
		characters: ["Otto", "Elsbeth", "Lukas", "Magda", "Rudi"],
		recentSessions: [
			"The Coach and Horses",
			"Shadows in Bögenhafen",
			"Signs of Corruption",
		],
	},
	{
		id: "death-on-reik",
		name: "Death on the Reik",
		region: "The Reik",
		status: "Planning",
		players: 4,
		nextSession: "TBD",
		description:
			"A river-bound campaign of smugglers, mutants, and secrets drifting through the heart of the Empire.",
		characters: ["Gregor", "Anya", "Bertold", "Klara"],
		recentSessions: ["River Trouble", "The Toll House"],
	},
];