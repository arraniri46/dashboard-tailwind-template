'use client'

import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeSwitcher() {
    // states
    const [mounted, setMounted] = useState<boolean>(false)

    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div>
            <Button
                onClick={() => {
                    if (theme === 'dark') {
                        setTheme('light')

                        return
                    }

                    setTheme('dark')
                }}
                size='icon'
                aria-label='Dark Mode Switcher'
            >
                {theme === 'dark' ? <MoonIcon className='w-5' /> : <SunIcon className='w-5' />}
            </Button>
        </div>
    )
}
