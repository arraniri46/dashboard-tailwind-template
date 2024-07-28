import { Button } from '@/components/ui/button'
import { ArrowLeftIcon } from 'lucide-react'
import React from 'react'

export default function NotFound() {
    return (
        <main className='bg-light flex min-h-screen flex-col items-center justify-center'>
            <header className='flex max-w-md flex-col items-center gap-4 text-center'>
                <h1 className='text-4xl font-bold text-gray-800'>404 - Page Not Found</h1>

                <p className='text-gray-600'>Oops! The page you are looking for does not exist.</p>

                <Button>
                    <ArrowLeftIcon className='w-4' />

                    <span>Go back to homepage</span>
                </Button>
            </header>
        </main>
    )
}
