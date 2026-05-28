import { Users, ScrollText, Edit, Save, X } from "lucide-react";
import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Campaign } from "@/src/types/campaign";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { updateCampaignDesc, updateCampaignName } from "../api/updateCampaign";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type Props = {
	campaign: Campaign | null;
};

type CampaignForm = {
	name: string;
	description: string;
};

type UpdateCampaignInfoInput = {
	id: string;
	name: string;
	description: string;
};

export function CampaignDetails({ campaign }: Props) {
	const [isEditing, setIsEditing] = useState(false);

	const [form, setForm] = useState<CampaignForm>({
		name: "",
		description: "",
	});

    const updateCampaignInfo = async ({id, name, description} : UpdateCampaignInfoInput) => {
        await updateCampaignName(id, name);

        await updateCampaignDesc(id, description);
    };

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: updateCampaignInfo,
        onSuccess: () => {
		    queryClient.invalidateQueries({
                queryKey: ["campaigns"],
            });

            setIsEditing(false);
        },
    })

	if (!campaign) {
		return (
			<Card className="bg-slate-950 border-slate-800">
				<CardContent className="bg-slate-950 border-slate-800 text-slate-100 p-6">
					Select a campaign to view its ledger
				</CardContent>
			</Card>
		);
	}

	const isDirty =
		form.name !== campaign.name || form.description !== campaign.description;

	const handleEdit = () => {
		setForm({
			name: campaign.name,
			description: campaign.description,
		});

		setIsEditing(true);
	};

	const handleCancel = () => {
		setIsEditing(false);
	};

	const handleSave = () => {
        mutation.mutate({
            id: campaign.id, 
            name: form.name,
            description: form.description
        });

		setIsEditing(false);
	};

	return (
		<div className="space-y-6">
            {mutation.isPending && (
                <Dialog open={mutation.isPending}>
                    <DialogContent showCloseButton={false} className="w-[300px]">Updating Campaign...</DialogContent>
                </Dialog>
            )}

            {mutation.error && (
                <Dialog open={!!mutation.error}>
                    <DialogContent showCloseButton={true} className="w-[300px]">Update failed! Try again.</DialogContent>
                </Dialog>
            )}

			<Card className="bg-slate-950 border-slate-800">
				<CardHeader>
                    
                    
                        <div className="flex items-center w-full gap-3">
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={form.name}
                                    onChange={(e) =>
                                        setForm((prev) => ({
                                            ...prev,
                                            name: e.target.value,
                                        }))
                                    }
                                    className="text-3xl bg-white text-slate-900 border-b border-slate-600 focus:outline-none focus:border-slate-400 px-1"
                                />
                            ) : (
                                <CardTitle className="font-heading text-3xl text-slate-100">
                                    {campaign.name}
                                </CardTitle>
                            )}

                            <div className="ml-auto flex items-center gap-1">
                                {isEditing && (
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="cursor-pointer text-slate-300 hover:text-white hover:bg-slate-700"
                                        onClick={handleCancel}
                                        type="button"
                                    >
                                        <X size={18} />
                                    </Button>
                                )}

                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="cursor-pointer text-slate-300 hover:text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
                                    onClick={isEditing ? handleSave : handleEdit}
                                    disabled={isEditing && !isDirty}
                                    type="button"
                                >
                                    {isEditing ? <Save size={18} /> : <Edit size={18} />}
                                </Button>
                            </div>
                        </div>					
				</CardHeader>

				<CardContent className="text-slate-400">
					{isEditing ? (
						<textarea
							value={form.description}
							onChange={(e) =>
								setForm((prev) => ({
									...prev,
									description: e.target.value,
								}))
							}
							className="w-full text-lg bg-white text-slate-900 border-b border-slate-600 focus:outline-none focus:border-slate-400 px-1 resize-none"
						/>
					) : (
						campaign.description
					)}
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
						{campaign.characters.map((character) => (
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
						{campaign.recentSessions.map((session) => (
							<p key={session}>{session}</p>
						))}
					</CardContent>
				</Card>
			</div>
		</div>
	);
}