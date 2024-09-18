"use client"
import React from 'react'
import { GlareCard } from '@/components/ui/glare-card'
import { Tabs } from "@/components/ui/tabs";
import Image from 'next/image';

const page = () => {

    // const tabs = [
    //     {
    //         title: "Neutral",
    //         value: "Neutral",
    //         content: (
    //             <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
    //                 <p>Neutral Tab</p>

    //             </div>
    //         ),
    //     },
    //     {
    //         title: "Adventure",
    //         value: "Adventure",
    //         content: (
    //             <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
    //                 <p>Adventure tab</p>
    //             </div>
    //         ),
    //     },
    //     {
    //         title: "Sci-Fi",
    //         value: "Sci-Fi",
    //         content: (
    //             <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
    //                 <p>Sci-Fi tab</p>
    //             </div>
    //         ),
    //     },
    //     {
    //         title: "Mystical",
    //         value: "Mystical",
    //         content: (
    //             <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
    //                 <p>Mystical tab</p>
    //             </div>
    //         ),
    //     },
    //     {
    //         title: "Fantasy",
    //         value: "Fantasy",
    //         content: (
    //             <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
    //                 <p>Fantasy tab</p>
    //             </div>
    //         ),
    //     },
    //     {
    //         title: "Superhero",
    //         value: "Superhero",
    //         content: (
    //             <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
    //                 <p>Superhero tab</p>
    //             </div>
    //         ),
    //     },
    //     {
    //         title: "Other/All",
    //         value: "Other/All",
    //         content: (
    //             <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
    //                 <p>Other/All tab</p>
    //             </div>
    //         ),
    //     },
    // ];

    return (
        <div>
            <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
                <p className="font-bold text-white text-lg">The greatest trick</p>
                <p className="font-normal text-base text-neutral-200 mt-4">
                    The greatest trick the devil ever pulled was to convince the world
                    that he didn&apos;t exist.
                </p>
            </GlareCard>
            <GlareCard className="flex flex-col items-center justify-center">
                <img
                    className="h-full w-full absolute inset-0 object-cover"
                    src="/images/A_Cock.webp"
                />
                <p className="font-bold text-black text-lg z-10">The greatest trick</p>
                <p className="font-normal text-base text-neutral-200 mt-4">
                    The greatest trick the devil ever pulled was to convince the world
                    that he didn&apos;t exist.
                </p>
            </GlareCard>
            {/* <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
                <Tabs tabs={tabs} />
            </div> */}
        </div>
    )
}

export default page