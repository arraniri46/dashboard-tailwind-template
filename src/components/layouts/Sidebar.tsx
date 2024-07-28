'use client'

import { JSX } from 'react'
import Logo from '../partials/Logo'
import { sidebarStore } from '@/store/sidebarStore'
import Link from 'next/link'
import { SidebarLink, SidebarSubCategoryLink, sidebar } from '@/data/sidebar-link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import { ArrowLeftIcon, CircleAlert, XIcon } from 'lucide-react'

export default function Sidebar(): JSX.Element {
    // pathname
    const pathname = usePathname()

    // global states
    const { isOpen, setIsOpen } = sidebarStore()

    return (
        <>
            <aside
                className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} bg-primary-accent fixed inset-y-0 left-0 z-50 flex w-[calc(100%-6rem)] flex-col items-center gap-y-8 px-6 py-4 duration-300 ease-in-out lg:w-72 lg:translate-x-0 lg:duration-0`}
            >
                {/* close sidebar */}
                <Button onClick={() => setIsOpen(false)} className='absolute right-2 top-2 lg:hidden' size='icon'>
                    <XIcon className='w-5 text-primary' />
                </Button>

                {/* logo wrapper*/}
                <div>
                    <header>
                        <Logo className='w-44' />
                    </header>
                </div>

                {/* navlinks wrapper*/}
                <div className='relative w-full overflow-y-auto'>
                    <ul className='space-y-6'>
                        {sidebar.map((sidebar: SidebarLink, index: number) => (
                            <li key={`sidebar-category-${index}`}>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-xs font-medium uppercase text-gray-400'>
                                        {sidebar.category}
                                    </span>

                                    <ul>
                                        {sidebar.sub_category.map((link: SidebarSubCategoryLink, index: number) => (
                                            <li key={`link-${index}`}>
                                                <Link
                                                    onClick={() => setIsOpen(false)}
                                                    className={`${pathname.includes(link.path) ? 'bg-accent font-bold text-primary' : 'font-medium text-primary'} flex items-center gap-2 rounded p-2 duration-150`}
                                                    href={link.path}
                                                >
                                                    <CircleAlert className='w-5' />

                                                    <span>{link.name}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* sidebar footer wrapper*/}
                <div className='apply-dark mt-auto flex w-full flex-col items-start border-t px-4 pt-2'>
                    <Button color='primary' size='sm'>
                        <ArrowLeftIcon className='w-5' /> <span>Logout</span>
                    </Button>
                </div>
            </aside>

            {/* backdrop layer */}
            <div
                onClick={() => setIsOpen(false)}
                className={`${isOpen ? '' : 'hidden'} fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden`}
            ></div>
        </>
    )
}
