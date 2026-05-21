import { CampaignCard } from './CampaignCard';
import { Campaign } from '@/src/types/campaign';

type Props = {
    campaigns: Campaign[];
    selectedCampaignId: string | null;
    onSelectCampaign: (campaignId: string) => void;
}

export function CampaignList({ campaigns, selectedCampaignId, onSelectCampaign }: Props) {
    return (
        <div className="space-y-4">
            <div>
                <p className="text-xs uppercase tracking-widest text-amber-400">
                    Campaign Ledger
                </p>
                <h2 className="font-heading text-2xl text-slate-100">
                    Active Campaigns
                </h2>
            </div>
            <div className="space-y-3">
                {campaigns.map((campaign) => (
                    <CampaignCard
                        key={campaign.id}
                        campaign={campaign}
                        isSelected={selectedCampaignId === campaign.id}
                        onSelect={() => onSelectCampaign(campaign.id)}
                    />
                ))}
            </div>
        </div>
    )
}