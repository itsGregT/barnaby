"use client";

import { useState } from "react";
import { campaigns } from "@/src/mock/campaigns";
import { CampaignList } from "@/src/features/campaigns/components/CampaignList";
import { CampaignDetails } from "@/src/features/campaigns/components/CampaignDetails";
import { Campaign } from "@/src/types/campaign";

export default function Page() {
	const [selectedCampaignId, setSelectedCampaignId] = useState<string | null>(campaigns[0]?.id ?? null)

	const selectedCampaign = campaigns.find(
		(campaign: Campaign) => campaign.id === selectedCampaignId
	);

	return (
		<div className="space-y-8">
			<section>
				<p className="text-sm uppercase tracking-[0.3em] text-amber-400">
					Barnaby
				</p>
				<h1 className="mt-2 font-heading text-4xl font-bold text-slate-100">
					Campaign Ledger
				</h1>
				<p className="mt-2 max-w-4xl text-slate-400">
					A Game Master control panel for tracking campaigns, characters, sessions, and encounters in the Old World.
				</p>
			</section>
			
			<section className="grid gap-6 lg:grid-cols-[360px_1fr]">
				<CampaignList 
					campaigns={campaigns}
					selectedCampaignId={selectedCampaignId}
					onSelectCampaign={setSelectedCampaignId}
				/>
				<CampaignDetails campaign={selectedCampaign} />
			</section>
		</div>
	);
}
