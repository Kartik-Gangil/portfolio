
import { AppSidebar } from "./components/app-sidebar";
import Topbar from "./components/topbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex bg-transparent">
            <AppSidebar />
            <main className="flex-1 px-4 py-6 md:px-8 md:py-10">
                <Topbar />
                {children}
            </main>
        </div>
    );
}
