import Link from 'next/link'
import React from 'react'


const Hero = async () => {

    return (
        <div className="grid bg-black grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1 className="text-fuchsia-500">South Park: Phone Destroyer</h1>

            <Link href={'/cards'}>
                <p className='text-white'>Click</p>
            </Link>
        </div>
    )
}

export default Hero