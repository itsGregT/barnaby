import type { Campaign } from "@/src/types/campaign";
import { campaigns } from "@/src/mock/campaigns";

export async function getCampaigns(): Promise<Campaign[]> {
	
    await new Promise((res) => setTimeout(res, 1000));

	return campaigns;
}