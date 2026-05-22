import { Users, ScrollText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Campaign } from "@/src/types/campaign";

type Props = {
    campaign: Campaign | null;
}

export function CampaignDetails({ campaign }: Props) {
    if (!campaign) {
        return (
            <Card className='bg-slate-950 border-slate-800'>
                <CardContent className='bg-slate-950 border-slate-800 text-slate-100'>
                    Select a campaign to view its ledger
                </CardContent>
            </Card>
        )
    }

    return (
        <div className="space-y-6">
            <Card className="bg-slate-950 border-slate-800">
                <CardHeader>
                    <CardTitle className="font-heading text-3xl text-slate-100">
                        {campaign.name}
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-400">
                    {campaign.description}
                </CardContent>
            </Card>
            <div className="grid grid-cols-2 gap-4">
                <Card className="bg-slate-950 border-slate-800">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-slate-100">
                        <Users size={16} /> Characters
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-slate-400">
                        {campaign.characters.map((character: string) => (
                        <p key={character}>{character}</p>
                        ))}
                    </CardContent>
                </Card>
                <Card className="bg-slate-950 border-slate-800">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-slate-100">
                        <ScrollText size={16} /> Sessions
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-slate-400">
                        {campaign.recentSessions.map((session : string) => (
                        <p key={session}>{session}</p>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}