import { Sword, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Campaign } from '@/src/types/campaign';
import { getStatusStyles } from "@/src/features/campaigns/utils/getStatusStyles";

type Props = {
    campaign: Campaign;
    isSelected: boolean;
    onSelect: (id: string) => void;
}

export function CampaignCard({ campaign, isSelected, onSelect }: Props) {
    return (
        <Card
            onClick={() => onSelect?.(campaign.id)}
            className={
                `cursor-pointer transition border
                ${isSelected 
                    ? 'border-amber-400 bg-slate-900'
                    : 'border-slate-800 bg-slate-950 hover:bg-slate-900'
                }`
            }
        >
            <CardContent className="p-4 space-y-3">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-heading text-lg text-slate-100">{campaign.name}</h3>
                        <p className="text-sm text-slate-400">{campaign.region}</p>
                    </div>

                    <Badge variant="outline" className={getStatusStyles(campaign.status)}>
                        {campaign.status}
                    </Badge>
                </div>
                <div className="flex justify-between text-slate-100">
                    <div className="flex items-center gap-1">
                        <Users size={20} />
                        {campaign.players}
                    </div>
                    <div className="flex items-center gap-1">
                        <Sword size={20} />
                        {campaign.nextSession}
                    </div>
                </div>
            </CardContent>
        </Card>
    
    )
}