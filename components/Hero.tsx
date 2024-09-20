"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { Vortex } from './ui/vortex'
import HeroTabs from './HeroTabs'
import Link from 'next/link'
import { AnimatedModalDemo } from './Modal'
import TabsComponent from './TabsComponent'

const Hero = () => {
    const router = useRouter()

    return (
        <div className="w-screen h-screen flex flex-col overflow-x-hidden bg-black">
            <Vortex
                backgroundColor="black"
                rangeY={800}
                particleCount={100}
                baseHue={200}
                className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
            >
                <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                    South Park: Phone Destroyer
                </h2>
                <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
                    Welcome, New Kid!
                </p>
                <div className='w-full flex justify-center mt-8'>
                    <Link href={'/cards'}>
                        <button className="px-8 py-2 rounded-full bg-gradient-to-b  from-purple-900 to-black  text-white focus:ring-2 focus:ring-blue-400 hover:scale-105 hover:shadow-md hover:shadow-[rgba(255,255,255,.25)] shadow-sm shadow-[rgba(255,255,255,.25)] transition duration-100">
                            Card Stats
                        </button>
                    </Link>
                    {/* <AccordionDemo /> */}
                    {/* <AnimatedModalDemo /> */}
                    {/* <TabsComponent /> */}
                </div>


                {/* <button
                        onClick={() => router.push('/test')}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                        Card List
                    </button> */}

            </Vortex>
        </div>
    )
}

export default Hero