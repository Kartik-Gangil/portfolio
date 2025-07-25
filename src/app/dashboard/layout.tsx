
import { AppSidebar } from "./components/app-sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div >
            <AppSidebar />
            {children}
        </div>

    );
}
