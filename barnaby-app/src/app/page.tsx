"use client";

import { useState } from "react";
//import { campaigns } from "@/src/mock/campaigns";
import { CampaignList } from "@/src/features/campaigns/components/CampaignList";
import { CampaignDetails } from "@/src/features/campaigns/components/CampaignDetails";
import { Campaign } from "@/src/types/campaign";
import { useQuery } from "@tanstack/react-query";
import { getCampaigns } from "@/src/features/campaigns/api/getCampaigns";

export default function Page() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["campaigns"],
        queryFn: getCampaigns,
    });

    const campaigns = data ?? [];

	const [selectedCampaignId, setSelectedCampaignId] = useState<string | null>(campaigns[0]?.id ?? null)

	const selectedCampaign = campaigns.find(
		(campaign: Campaign) => campaign.id === selectedCampaignId
	);

    if (isLoading) {
        return <p className="text-slate-400">Loading campaigns...</p>;
    }

    if (error) {
        return <p className="text-red-400">Failed to load campaigns</p>;
    }

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
