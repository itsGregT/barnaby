"use client";

import { useCallback, useMemo, useState } from "react";
import { CampaignList } from "@/src/features/campaigns/components/CampaignList";
import { CampaignDetails } from "@/src/features/campaigns/components/CampaignDetails";
import { Campaign } from "@/src/types/campaign";
import { useQuery } from "@tanstack/react-query";
import { getCampaigns } from "@/src/features/campaigns/api/getCampaigns";
import  { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCampaignName } from "@/src/features/campaigns/api/updateCampaign";
import { Button } from "@/src/components/ui/button";

export default function Page() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["campaigns"],
        queryFn: getCampaigns,
    });

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: ({id, name}: {id: string, name: string}) => 
            updateCampaignName(id, name), 

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["campaigns"] });
        }
    });

    const campaigns = data ?? [];

	const [selectedCampaignId, setSelectedCampaignId] = useState<string | null>(campaigns[0]?.id ?? null)

	const selectedCampaign = useMemo(() => campaigns.find(
		(campaign: Campaign) => campaign.id === selectedCampaignId
	), [campaigns, selectedCampaignId]);

    const handleSelect = useCallback((id: string) => {
		setSelectedCampaignId(id);
	}, []);

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
                
                {mutation.error && (
                    <p className="text-red-400">Failed to update campaign</p>
                )}
			</section>
			
			<section className="grid gap-6 lg:grid-cols-[360px_1fr]">
				<CampaignList 
					campaigns={campaigns}
					selectedCampaignId={selectedCampaignId}
					onSelectCampaign={handleSelect}
				/>
				<CampaignDetails campaign={selectedCampaign} />
			</section>
		</div>
	);
}
