export type SidebarLink = {
    category: string
    sub_category: SidebarSubCategoryLink[]
}

export type SidebarSubCategoryLink = {
    name: string
    path: string
    icon?: string
}

export const sidebar: SidebarLink[] = [
    {
        category: 'Home',
        sub_category: [
            {
                name: 'Dashboard',
                path: '/dashboard',
            },
        ],
    },
    {
        category: 'Fleet Management',
        sub_category: [
            {
                name: 'Truck',
                path: '/truck',
            },
            {
                name: 'Driver',
                path: '/driver',
            },
            {
                name: 'Route',
                path: '/route',
            },
        ],
    },
    {
        category: 'Trip Management',
        sub_category: [
            {
                name: 'Active Trips',
                path: '/active-trips',
            },
            {
                name: 'Scheduled Trips',
                path: '/scheduled-trips',
            },
            {
                name: 'Trip History',
                path: '/trip-history',
            },
        ],
    },
    {
        category: 'Cargo Management',
        sub_category: [
            {
                name: 'Cargo Tracking',
                path: '/cargo-tracking',
            },
            {
                name: 'Loading/Unloading',
                path: '/loading-unloading',
            },
        ],
    },
    {
        category: 'Incident Management',
        sub_category: [
            {
                name: 'Report Incidents',
                path: '/report-incidents',
            },
        ],
    },
]
