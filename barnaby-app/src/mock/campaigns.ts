import type { Campaign } from "@/src/types/campaign";

export const campaigns: Campaign[] = [
	{
		id: "mosslight-market",
		name: "The Mosslight Market Affair",
		region: "Stirland Borderlands",
		status: "Active",
		players: 5,
		nextSession: "Wellentag, 7:30 PM",
		description:
			"A traveling night market appears only under heavy fog, selling strange wares and whispered promises. Livestock vanish, children dream of antlered figures, and the local magistrate insists nothing is wrong.",
		characters: ["Hedda the Ratcatcher", "Ulrich Voss", "Brunna Coal-Eye", "Pieter Grimm", "Sister Alayne"],
		recentSessions: [
			"The Lantern That Blinked",
			"A Goat With Too Many Teeth",
			"The Vendor Who Never Blinked",
		],
	},
	{
		id: "clockwork-duke",
		name: "The Clockwork Duke’s Misfortune",
		region: "Nuln Outskirts",
		status: "Active",
		players: 4,
		nextSession: "Marktag, 8:00 PM",
		description:
			"A minor noble obsessed with mechanical perfection has sealed himself inside his estate. Servants whisper that the clocks now tick out of sync with reality, and something inside the walls has begun answering back.",
		characters: ["Elsa Wirth", "Gregor Blackthumb", "Marta Feld", "Jannik the Quiet"],
		recentSessions: [
			"The Locked Conservatory",
			"An Hour That Lasted Too Long",
			"The Butler’s Second Shadow",
		],
	},
	{
		id: "amber-road-mystery",
		name: "Trouble on the Amber Road",
		region: "Talabecland Forest Route",
		status: "Planning",
		players: 4,
		nextSession: "TBD",
		description:
			"Caravans vanish along the Amber Road, leaving behind perfectly arranged camps and untouched supplies. Witnesses claim the trees move when no one is watching.",
		characters: ["Klara Weiss", "Otto Feldman", "Rudi Kessler", "Anja Thorn"],
		recentSessions: [
			"The Camp With No Footprints",
			"The Silent Treeline",
		],
	},
	{
		id: "laughing-well",
		name: "The Laughing Well of Grunewald",
		region: "Grunewald Village",
		status: "Completed",
		players: 3,
		nextSession: "Backertag, 6:00 PM",
		description:
			"A village well has begun echoing laughter at night. Buckets come up filled with black water, and anyone who drinks it starts telling jokes that no one else understands.",
		characters: ["Frieda Hopp", "Tomas Krane", "Lukas Bell"],
		recentSessions: [
			"The First Laugh",
			"A Joke Without Meaning",
			"The Man Who Wouldn’t Stop Smiling",
		],
	},
	{
		id: "feathered-taxman",
		name: "The Feathered Taxman",
		region: "Averland Countryside",
		status: "Paused",
		players: 5,
		nextSession: "Unknown",
		description:
			"A tax collector arrived with impeccable records and a polite demeanor. By the third visit, villagers noticed his shadow had feathers. By the fourth, he stopped casting one entirely.",
		characters: ["Magda Rook", "Ulrich Dane", "Sven Halber", "Elsbeth Crowe", "Pavel Dorn"],
		recentSessions: [
			"The First Collection",
			"The Ledger That Bled Ink",
			"The Visit at Dusk",
		],
	},
];