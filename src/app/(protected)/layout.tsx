'use client'

import Navbar from '@/components/layouts/Navbar'
import Sidebar from '@/components/layouts/Sidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Sidebar />

            <div className={`ml-auto p-4 lg:w-[calc(100%-18rem)] lg:p-6`}>
                <Navbar />

                {children}
            </div>
        </div>
    )
}
