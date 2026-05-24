import { Briefcase, Code, HammerIcon, PanelLeft } from "lucide-react"
import Link from "next/link"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

// Menu items.
const items = [
    {
        title: "Projects",
        url: "/dashboard/project",
        icon: HammerIcon,
    },
    {
        title: "Work Experience",
        url: "/dashboard/workexperience",
        icon: Briefcase,
    },
    {
        title: "Skills",
        url: "/dashboard/skills",
        icon: Code,
    },
]

function SidebarLinks({ className = "" }: { className?: string }) {
    return (
        <nav className={`flex flex-col space-y-2 ${className}`} aria-label="Dashboard navigation">
            {items.map((item, index) => (
                <Link
                    key={index}
                    href={item.url}
                    className="flex items-center gap-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 p-3 rounded-lg transition"
                >
                    <item.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.title}</span>
                </Link>
            ))}
        </nav>
    )
}

export function AppSidebar() {
    return (
        <>
            {/* Mobile: sheet trigger */}
            <div className="md:hidden fixed top-4 left-4 z-50">
                <Sheet>
                    <SheetTrigger className="p-2 rounded-md bg-white shadow"><PanelLeft /></SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader>
                            <SheetTitle>Dashboard</SheetTitle>
                            <div className="mt-4">
                                <SidebarLinks />
                            </div>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Desktop: persistent sidebar */}
            <aside className="hidden md:flex flex-col w-64 h-screen p-6 border-r bg-white">
                <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
                <SidebarLinks />
            </aside>
        </>
    )
}