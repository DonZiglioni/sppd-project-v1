
import React from 'react'
import { Tabs } from './ui/tabs';
import { ExpandableCardDemo } from './CardList';
import { GlareCard } from '@/components/ui/glare-card';
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "../components/ui/animated-modal";
import BaseCard from './BaseCard';
interface Props {
    neutralCards: Array<object>;
    adventureCards: Array<object>;
    scifiCards: Array<object>;
    mysticalCards: Array<object>;
    fantasyCards: Array<object>;
    superheroCards: Array<object>;
}

const HeroTabs = async ({
    neutralCards,
    adventureCards,
    scifiCards,
    mysticalCards,
    fantasyCards,
    superheroCards,
}: Props) => {

    const tabs = [
        {
            title: "Neutral",
            value: "Neutral",
            content: (
                <div className="w-full flex flex-col items-center justify-center  relative h-auto rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-700 to-slate-900">
                    <p>Neutral Tab</p>
                    <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {neutralCards.map((item: any, index: number) => (
                            <div className='flex items-center justify-between mx-4 my-4 h-[350px] w-full' key={index}>
                                <GlareCard className="flex flex-col items-center justify-center">
                                    <BaseCard
                                        cardTheme={item.Theme}
                                        cardImage={item.Image}
                                        cardType={item.Type === "Character" ? item.CharacterType : item.Type}
                                        cardRarity={item.Rarity}
                                        cardCost={item.ManaCost}
                                        cardName={item.Name}
                                    />
                                </GlareCard>
                            </div>
                        ))}

                    </section>
                    {/* {neutralCards.map((card: any, index: number) => (
                        <div key={index}>{card.Name}</div>
                    ))} */}
                    {/* <ExpandableCardDemo /> */}
                </div>
            ),
        },
        {
            title: "Adventure",
            value: "Adventure",
            content: (
                <div className="w-full  flex flex-col items-center justify-center relative h-auto rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-blue-900">
                    <p>Adventure tab</p>
                    <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {adventureCards.map((item: any, index: number) => (
                            <div className='flex items-center justify-between mx-4 my-4 h-[350px] w-full' key={index}>
                                <GlareCard className="flex flex-col items-center justify-center">
                                    <BaseCard
                                        cardTheme={item.Theme}
                                        cardImage={item.Image}
                                        cardType={item.Type === "Character" ? item.CharacterType : item.Type}
                                        cardRarity={item.Rarity}
                                        cardCost={item.ManaCost}
                                        cardName={item.Name}
                                    />
                                </GlareCard>
                            </div>
                        ))}

                    </section>
                    {/* <ExpandableCardDemo /> */}
                </div>
            ),
        },
        {
            title: "Sci-Fi",
            value: "Sci-Fi",
            content: (
                <div className="w-full  flex flex-col items-center justify-center  relative h-auto rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-700 to-orange-900">
                    <p>Sci-Fi tab</p>
                    <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {scifiCards.map((item: any, index: number) => (
                            <div className='flex items-center justify-between mx-4 my-4 h-[350px] w-full' key={index}>
                                <GlareCard className="flex flex-col items-center justify-center">
                                    <BaseCard
                                        cardTheme={item.Theme}
                                        cardImage={item.Image}
                                        cardType={item.Type === "Character" ? item.CharacterType : item.Type}
                                        cardRarity={item.Rarity}
                                        cardCost={item.ManaCost}
                                        cardName={item.Name}
                                    />
                                </GlareCard>
                            </div>
                        ))}

                    </section>
                    {/* <ExpandableCardDemo /> */}
                </div>
            ),
        },
        {
            title: "Mystical",
            value: "Mystical",
            content: (
                <div className="w-full   flex flex-col items-center justify-center  relative h-auto rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-green-700 to-green-900">
                    <p>Mystical tab</p>
                    <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {mysticalCards.map((item: any, index: number) => (
                            <div className='flex items-center justify-between mx-4 my-4 h-[350px] w-full' key={index}>
                                <GlareCard className="flex flex-col items-center justify-center">
                                    <BaseCard
                                        cardTheme={item.Theme}
                                        cardImage={item.Image}
                                        cardType={item.Type === "Character" ? item.CharacterType : item.Type}
                                        cardRarity={item.Rarity}
                                        cardCost={item.ManaCost}
                                        cardName={item.Name}
                                    />
                                </GlareCard>
                            </div>
                        ))}

                    </section>
                    {/* <ExpandableCardDemo /> */}
                </div>
            ),
        },
        {
            title: "Fantasy",
            value: "Fantasy",
            content: (
                <div className="w-full  flex flex-col items-center justify-center relative h-auto rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-pink-700 to-pink-900">
                    <p>Fantasy tab</p>
                    <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {fantasyCards.map((item: any, index: number) => (
                            <div className='flex items-center justify-between mx-4 my-4 h-[350px] w-full' key={index}>
                                <GlareCard className="flex flex-col items-center justify-center">
                                    <BaseCard
                                        cardTheme={item.Theme}
                                        cardImage={item.Image}
                                        cardType={item.Type === "Character" ? item.CharacterType : item.Type}
                                        cardRarity={item.Rarity}
                                        cardCost={item.ManaCost}
                                        cardName={item.Name}
                                    />
                                </GlareCard>
                            </div>
                        ))}

                    </section>
                    {/* <ExpandableCardDemo /> */}
                </div>
            ),
        },
        {
            title: "Superhero",
            value: "Superhero",
            content: (
                <div className="w-full  flex flex-col items-center justify-center relative h-auto rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-400 to-purple-600">
                    <p>Superhero tab</p>
                    <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {superheroCards.map((item: any, index: number) => (
                            <div className='flex items-center justify-between mx-4 my-4 h-[350px] w-full' key={index}>
                                <GlareCard className="flex flex-col items-center justify-center">
                                    <BaseCard
                                        cardTheme={item.Theme}
                                        cardImage={item.Image}
                                        cardType={item.Type === "Character" ? item.CharacterType : item.Type}
                                        cardRarity={item.Rarity}
                                        cardCost={item.ManaCost}
                                        cardName={item.Name}
                                    />
                                </GlareCard>
                            </div>
                        ))}

                    </section>
                    {/* <ExpandableCardDemo /> */}
                </div>
            ),
        },
        {
            title: "Other",
            value: "Other",
            content: (
                <div className="w-full  flex flex-col items-center justify-center relative h-auto rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-yellow-400 to-yellow-600 pl-6">
                    <p>Other/All tab</p>
                    <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full h-full ">
                        {neutralCards.map((item: any, index: number) => (
                            <div className='flex items-center justify-between mx-4 my-4 h-[350px] w-full' key={index}>
                                <GlareCard className="flex flex-col items-center justify-center">
                                    <BaseCard
                                        cardTheme={item.Theme}
                                        cardImage={item.Image}
                                        cardType={item.Type === "Character" ? item.CharacterType : item.Type}
                                        cardRarity={item.Rarity}
                                        cardCost={item.ManaCost}
                                        cardName={item.Name}
                                    />
                                </GlareCard>
                            </div>
                        ))}

                    </section>
                </div>
            ),
        },
    ];
    return (
        <div className=" [perspective:1000px] absolute top-0 flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-20">
            <Tabs tabs={tabs} />
        </div>
    )
}

export default HeroTabs