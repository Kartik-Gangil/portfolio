import React from 'react'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Topbar({ title = 'Dashboard' }: { title?: string }) {
    return (
        <header className="w-full mb-6">
            <div className="flex items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
                    <p className="text-sm text-gray-500">Manage your projects, skills and experience</p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="hidden sm:flex items-center bg-white border rounded-md px-3 py-1 shadow-sm">
                        <Search className="w-4 h-4 text-gray-400 mr-2" />
                        <input aria-label="search" placeholder="Search..." className="outline-none text-sm" />
                    </div>
                    <Button variant="ghost" className="hidden sm:inline-flex">Profile</Button>
                </div>
            </div>
        </header>
    )
}

export default Topbar
