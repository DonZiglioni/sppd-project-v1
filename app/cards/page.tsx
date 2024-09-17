import React from 'react'


import { promises as fs } from 'fs';

import BaseCard from '../../components/BaseCard';

const page = async () => {
    const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8')
    const file2 = await fs.readFile(process.cwd() + '/app/cards.json', 'utf8')

    const data = JSON.parse(file2);
    //console.log(data[3]);


    return (
        <div className="grid bg-black grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1 className="text-fuchsia-500">South Park: Phone Destroyer</h1>
            <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {data.map((item: any, index: number) => (
                    <div className='flex items-center justify-between mx-4 my-4 h-[350px] w-full' key={index}>
                        <BaseCard
                            cardTheme={item.Theme}
                            cardImage={item.Image}
                            cardType={item.Type === "Character" ? item.CharacterType : item.Type}
                            cardRarity={item.Rarity}
                            cardCost={item.ManaCost}
                            cardName={item.Name}
                        />
                    </div>
                ))}

            </section>
        </div>
    )
}


export default page