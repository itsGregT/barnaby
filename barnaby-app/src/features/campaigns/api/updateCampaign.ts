import type { Campaign } from "@/src/types/campaign";
import { campaigns } from "@/src/mock/campaigns";

export async function updateCampaignName(id: string, newName: string) : Promise<Campaign> {
    await new Promise((res) => setTimeout(res, 800)); // 

    const campaign = campaigns.find((c) => c.id === id);

    if (!campaign) {
        throw new Error("Campaign not found");
    }

    campaign.name = newName;

    return campaign;
}