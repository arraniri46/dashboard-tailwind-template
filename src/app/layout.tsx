import './globals.css'
import NextTopLoader from 'nextjs-toploader'
import { Toaster } from 'sonner'
import { Metadata } from 'next'
import { ThemeProvider } from './theme-provider'

export const metadata: Metadata = {
    title: 'Dashboard Admin Template (NextJS + ShadcnUI + Tailwind)',
    description: 'Dashboard Admin Template (NextJS + ShadcnUI + Tailwind)',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className='min-h-screen bg-background'>
                <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
                    <NextTopLoader color='#20409A' showSpinner={false} />

                    <Toaster />

                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
