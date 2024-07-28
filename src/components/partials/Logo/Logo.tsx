import { JSX, useEffect, useState } from 'react'
import Image from 'next/image'
import AssetLogoForLight from '@/assets/logo/asset-logo.webp'
import AssetLogoForDark from '@/assets/logo/asset-logo.webp'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

export default function Logo({ className }: { className?: string }): JSX.Element {
    // states
    const [mounted, setMounted] = useState<boolean>(false)

    const { theme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <>
            {mounted && (
                <figure>
                    <Image
                        className={`${cn('w-32', className)}`}
                        src={theme === 'dark' ? AssetLogoForDark : AssetLogoForLight}
                        alt='Asset Logo'
                        priority
                    />
                </figure>
            )}
        </>
    )
}
