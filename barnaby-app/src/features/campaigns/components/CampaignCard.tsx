import { Sword, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Campaign } from '@/src/types/campaign';

type Props = {
    campaign: Campaign;
    isSelected: boolean;
    onSelect: () => void;
}

export function CampaignCard({ campaign, isSelected, onSelect }: Props) {
    return (
        <Card
            onClick={onSelect}
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

                    <Badge variant="outline" className="text-amber-300 border-amber-400">
                        {campaign.status}
                    </Badge>
                </div>
                <div className="flex justify-between text-sm-text-slate-400">
                    <div className="flex items-center gap-1">
                        <Users size={14} />
                        {campaign.players}
                    </div>
                    <div className="flex items-center gap-1">
                        <Sword size={14} />
                        {campaign.nextSession}
                    </div>
                </div>
            </CardContent>
        </Card>
    
    )
}