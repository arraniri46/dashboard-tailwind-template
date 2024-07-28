import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Dashboard - Template',
    description: 'Dashboard Template',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
