import {BookOpen, ScrollText, Shield, Swords} from "lucide-react";

const navItems = [
	{ 
        label: "Dashboard", 
        icon: BookOpen, 
        href: "/" 
    },
	{ 
        label: "Characters", 
        icon: Shield, 
        href: "/characters" 
    },
	{ 
        label: "Encounters", 
        icon: Swords, 
        href: "/encounters" },
	{ 
        label: "Sessions", 
        icon: ScrollText, 
        href: "/sessions" },
];

export function Sidebar() {
	return (
		<aside className="hidden min-h-screen w-64 border-r border-slate-800 bg-slate-950 px-4 py-6 text-slate-200 md:block">
			<div className="mb-8">
				<p className="font-heading text-5xl text-center text-amber-400">
					Barnaby
				</p>
				<p className="text-md text-center text-slate-400">Chronicle of the Old World</p>
			</div>

			<nav className="space-y-2">
				{navItems.map((item) => {
					const Icon = item.icon;

					return (
						<a
							key={item.label}
							href={item.href}
							className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-900 hover:text-amber-300"
						>
							<Icon className="h-4 w-4" />
							{item.label}
						</a>
					);
				})}
			</nav>
		</aside>
	);
}