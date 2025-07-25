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

export function AppSidebar() {
    return (
        <Sheet>
            <SheetTrigger className="p-5"><PanelLeft /></SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Dashboard</SheetTitle>
                    {items.map((items, index) => (<SheetDescription key={index}>
                        <Link href={items.url} className="flex items-center space-x-2 gap-3 text-black hover:bg-blue-500 rounded-2xl p-3">
                            <items.icon />
                            {items.title}
                        </Link>
                    </SheetDescription>))}
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}