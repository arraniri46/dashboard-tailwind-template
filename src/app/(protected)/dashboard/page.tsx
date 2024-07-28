import { JSX } from 'react'

export default function Dashboard(): JSX.Element {
    return (
        <main>
            <header className='mt-4 flex flex-col gap-4 lg:mt-6 lg:gap-6'>
                <h1>Dashboard</h1>
            </header>

            <section className='py-4 lg:py-6'>
                <div className='bg-light rounded p-4 shadow-sm lg:p-6'></div>
            </section>
        </main>
    )
}
