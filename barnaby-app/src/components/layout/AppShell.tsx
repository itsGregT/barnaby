import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

type AppShellProps = {
	children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
	return (
		<div className="min-h-screen bg-slate-900 text-slate-100">
			<div className="flex">
				<Sidebar />

				<div className="min-h-screen flex-1">
					<Header />
					<main className="p-6">{children}</main>
				</div>
			</div>
		</div>
	);
}