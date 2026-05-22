import type { CampaignStatus } from "@/src/types/campaign";

export function getStatusStyles(status: CampaignStatus) {
	switch (status) {
		case "Active":
			return "border-emerald-400/60 text-emerald-300 bg-emerald-950/30";
		case "Planning":
			return "border-amber-400/60 text-amber-300 bg-amber-950/30";
		case "Paused":
			return "border-slate-500/60 text-slate-300 bg-slate-800/40";
        case "Completed":
			return "border-blue-500/60 text-blue-300 bg-blue-800/40";
		default:
			return "";
	}
}