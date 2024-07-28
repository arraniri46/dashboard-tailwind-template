'use client'

import { sidebarStore } from '@/store/sidebarStore'
import { JSX } from 'react'
import ThemeSwitcher from '../partials/ThemeSwitcher'
import { Button } from '../ui/button'
import { MenuIcon } from 'lucide-react'

export default function Navbar(): JSX.Element {
    // global states
    const { isOpen, setIsOpen } = sidebarStore()

    return (
        <nav className='bg-light sticky top-4 z-30 flex items-center justify-between gap-4 rounded p-2 shadow-sm lg:static lg:px-6 lg:py-4'>
            <span className='font-medium lg:text-lg'>
                Good Morning, <span className='font-bold'>Admin</span>
            </span>

            <div className='flex items-center gap-2'>
                <ThemeSwitcher />

                <Button onClick={() => setIsOpen(!isOpen)} className='lg:hidden'>
                    <MenuIcon className='w-5' />
                </Button>
            </div>
        </nav>
    )
}
