import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GlareCard } from '@/components/ui/glare-card';
import BaseCard from './BaseCard';
import { AnimatedModalDemo } from "./Modal";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "../components/ui/animated-modal";

import React from 'react'
import { AccordionDemo } from "./AccordionComponent";




interface Props {
    neutralCards: Array<object>;
    adventureCards: Array<object>;
    scifiCards: Array<object>;
    mysticalCards: Array<object>;
    fantasyCards: Array<object>;
    superheroCards: Array<object>;
}

const TabsComponent = ({
    neutralCards,
    adventureCards,
    scifiCards,
    mysticalCards,
    fantasyCards,
    superheroCards,
}: Props) => {

    const getLevels = ({ TechTree2 }: any) => {
        console.log(TechTree2);
        return "hello"
    }


    return (
        <div>
            <Tabs defaultValue="Neutral" className="w-full h-auto flex flex-col items-center justify-center">
                <TabsList className="bg-transparent flex items-center justify-center  my-10">
                    <TabsTrigger className="text-white" value="Neutral" >Neutral</TabsTrigger>
                    <TabsTrigger className="text-white" value="Adventure">Adventure</TabsTrigger>
                    <TabsTrigger className="text-white" value="Sci-Fi">Sci-Fi</TabsTrigger>
                    <TabsTrigger className="text-white" value="Mystical">Mystical</TabsTrigger>
                    <TabsTrigger className="text-white" value="Fantasy">Fantasy</TabsTrigger>
                    <TabsTrigger className="text-white" value="Superhero">Superhero</TabsTrigger>
                </TabsList>
                <TabsContent value="Neutral" className=" flex flex-col items-center justify-center px-10 rounded-2xl h-auto w-auto bg-gradient-to-br  from-slate-700 to-slate-900">
                    <h1 className="text-center font-semibold text-white pt-14"></h1>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-4">
                        {neutralCards.map((item: any, index: number) => (

                            <Modal key={index}>
                                <ModalTrigger>
                                    <div className='flex items-center flex-col justify-center h-[400px] w-full' key={index}>
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
                                </ModalTrigger>
                                <ModalBody>
                                    <ModalContent>
                                        <img
                                            src={`/images/${item.Image.toLowerCase()}.webp`}
                                            className=" object-cover h-full w-full -z-20 absolute top-0 left-0 "
                                        />
                                        <div className="-z-10 absolute top-0 left-0 h-full w-full bg-black opacity-85" />

                                        <div className="flex justify-center items-center text-xl py-2 mb-2 text-white shadow-lg shadow-black">
                                            {item.Description}
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="text-white">Attack Range:
                                                <span className="text-white text-lg font-semibold ml-2">
                                                    {item.AttackRange}
                                                </span>
                                            </p>
                                            <p className="text-white">Attack Speed:
                                                <span className="text-white text-lg font-semibold ml-2">
                                                    {item.TimeInBetweenAttacks}
                                                </span>
                                            </p>
                                            <p className="text-white">Base Damage:
                                                <span className="text-white text-lg font-semibold ml-2">
                                                    {item.Damage}
                                                </span>
                                            </p>
                                            <p className="text-white">Base Health:
                                                <span className="text-white text-lg font-semibold ml-2">
                                                    {item.Health}
                                                </span>
                                            </p>
                                            {item.PowerDamage && (
                                                <p className="text-white">Base Power Damage:
                                                    <span className="text-white text-lg font-semibold ml-2">
                                                        {item.PowerDamage}
                                                    </span>
                                                </p>
                                            )}
                                            {item.AOERadius > 0 && (
                                                <p className="text-white">AOE Range:
                                                    <span className="text-white text-lg font-semibold ml-2">
                                                        {item.AOERadius}
                                                    </span>
                                                </p>
                                            )}
                                            {item.ChargedPowerRadius > 0 && (
                                                <p className="text-white">Power Radius:
                                                    <span className="text-white text-lg font-semibold ml-2">
                                                        {item.ChargedPowerRadius}
                                                    </span>
                                                </p>
                                            )}
                                            {item.PowerDuration > 0 && (
                                                <p className="text-white">Power Duration:
                                                    <span className="text-white text-lg font-semibold ml-2">
                                                        {item.PowerDuration}
                                                    </span>
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <span className="text-white">
                                                levels
                                                {
                                                    item.TechTree2.Slots[0].value
                                                }
                                            </span>
                                        </div>
                                        {/* <AccordionDemo /> */}
                                    </ModalContent>
                                    {/* <ModalFooter className="gap-4">
                                        <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                                            Cancel
                                        </button>
                                        <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                                            Book Now
                                        </button>
                                    </ModalFooter> */}
                                </ModalBody>
                            </Modal>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="Adventure" className=" flex flex-col items-center justify-center px-10 rounded-2xl h-auto w-auto  bg-gradient-to-br from-blue-700 to-blue-900">
                    <h1 className="text-center font-semibold text-white  pt-14"></h1>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-4">
                        {adventureCards.map((item: any, index: number) => (
                            <Modal key={index}>
                                <ModalTrigger>
                                    <div className='flex items-center flex-col justify-center h-[400px] w-full' key={index}>
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
                                </ModalTrigger>
                                <ModalBody>
                                    <ModalContent>
                                        <img
                                            src={`/images/${item.Image.toLowerCase()}.webp`}
                                            className=" object-cover h-full w-full -z-20 absolute top-0 left-0 "
                                        />
                                        <div className="-z-10 absolute top-0 left-0 h-full w-full bg-black opacity-85" />

                                        <div className="flex justify-center items-center text-xl py-2 mb-2 text-white shadow-lg shadow-black">
                                            {item.Description}
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="text-white">Attack Range:
                                                <span className="text-white text-lg font-semibold ml-2">
                                                    {item.AttackRange}
                                                </span>
                                            </p>
                                            <p className="text-white">Attack Speed:
                                                <span className="text-white text-lg font-semibold ml-2">
                                                    {item.TimeInBetweenAttacks}
                                                </span>
                                            </p>
                                            <p className="text-white">Base Damage:
                                                <span className="text-white text-lg font-semibold ml-2">
                                                    {item.Damage}
                                                </span>
                                            </p>
                                            <p className="text-white">Base Health:
                                                <span className="text-white text-lg font-semibold ml-2">
                                                    {item.Health}
                                                </span>
                                            </p>
                                            {item.PowerDamage && (
                                                <p className="text-white">Base Power Damage:
                                                    <span className="text-white text-lg font-semibold ml-2">
                                                        {item.PowerDamage}
                                                    </span>
                                                </p>
                                            )}
                                            {item.AOERadius > 0 && (
                                                <p className="text-white">AOE Range:
                                                    <span className="text-white text-lg font-semibold ml-2">
                                                        {item.AOERadius}
                                                    </span>
                                                </p>
                                            )}
                                            {item.ChargedPowerRadius > 0 && (
                                                <p className="text-white">Power Radius:
                                                    <span className="text-white text-lg font-semibold ml-2">
                                                        {item.ChargedPowerRadius}
                                                    </span>
                                                </p>
                                            )}
                                            {item.PowerDuration > 0 && (
                                                <p className="text-white">Power Duration:
                                                    <span className="text-white text-lg font-semibold ml-2">
                                                        {item.PowerDuration}
                                                    </span>
                                                </p>
                                            )}
                                        </div>
                                    </ModalContent>
                                    {/* <ModalFooter className="gap-4">
                                    <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                                        Cancel
                                    </button>
                                    <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                                        Book Now
                                    </button>
                                </ModalFooter> */}
                                </ModalBody>
                            </Modal>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="Sci-Fi" className=" flex flex-col items-center justify-center px-10 rounded-2xl h-auto w-auto bg-gradient-to-br from-orange-700 to-orange-900">
                    <h1 className="text-center font-semibold text-white  pt-14"></h1>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-4">
                        {scifiCards.map((item: any, index: number) => (
                            <Modal key={index}>
                                <ModalTrigger>
                                    <div className='flex items-center flex-col justify-center h-[400px] w-full' key={index}>
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
                                </ModalTrigger>
                                <ModalBody>
                                    <ModalContent>
                                        <img
                                            src={`/images/${item.Image.toLowerCase()}.webp`}
                                            className=" object-cover h-full w-full -z-20 absolute top-0 left-0 "
                                        />
                                        <div className="-z-10 absolute top-0 left-0 h-full w-full bg-black opacity-85" />

                                        <div className="flex justify-center items-center text-xl py-2 mb-2 text-white shadow-lg shadow-black">
                                            {item.Description}
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="text-white">Attack Range:
                                                <span className="text-white text-lg font-semibold ml-2">
                                                    {item.AttackRange}
                                                </span>
                                            </p>
                                            <p className="text-white">Attack Speed:
                                                <span className="text-white text-lg font-semibold ml-2">
                                                    {item.TimeInBetweenAttacks}
                                                </span>
                                            </p>
                                            <p className="text-white">Base Damage:
                                                <span className="text-white text-lg font-semibold ml-2">
                                                    {item.Damage}
                                                </span>
                                            </p>
                                            <p className="text-white">Base Health:
                                                <span className="text-white text-lg font-semibold ml-2">
                                                    {item.Health}
                                                </span>
                                            </p>
                                            {item.PowerDamage && (
                                                <p className="text-white">Base Power Damage:
                                                    <span className="text-white text-lg font-semibold ml-2">
                                                        {item.PowerDamage}
                                                    </span>
                                                </p>
                                            )}
                                            {item.AOERadius > 0 && (
                                                <p className="text-white">AOE Range:
                                                    <span className="text-white text-lg font-semibold ml-2">
                                                        {item.AOERadius}
                                                    </span>
                                                </p>
                                            )}
                                            {item.ChargedPowerRadius > 0 && (
                                                <p className="text-white">Power Radius:
                                                    <span className="text-white text-lg font-semibold ml-2">
                                                        {item.ChargedPowerRadius}
                                                    </span>
                                                </p>
                                            )}
                                            {item.PowerDuration > 0 && (
                                                <p className="text-white">Power Duration:
                                                    <span className="text-white text-lg font-semibold ml-2">
                                                        {item.PowerDuration}
                                                    </span>
                                                </p>
                                            )}
                                        </div>
                                    </ModalContent>
                                    {/* <ModalFooter className="gap-4">
                                     <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                                         Cancel
                                     </button>
                                     <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                                         Book Now
                                     </button>
                                 </ModalFooter> */}
                                </ModalBody>
                            </Modal>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="Mystical" className="flex flex-col items-center justify-center px-10 rounded-2xl h-auto w-auto bg-gradient-to-br from-green-700 to-green-900">
                    <h1 className="text-center font-semibold text-white  pt-14"></h1>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-4">
                        {mysticalCards.map((item: any, index: number) => (
                            <Modal key={index}>
                                <ModalTrigger>
                                    <div className='flex items-center flex-col justify-center h-[400px] w-full' key={index}>
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
                                </ModalTrigger>
                                <ModalBody>
                                    <ModalContent>
                                        <img
                                            src={`/images/${item.Image.toLowerCase()}.webp`}
                                            className=" object-cover h-full w-full -z-20 absolute top-0 left-0 "
                                        />
                                        <div className="-z-10 absolute top-0 left-0 h-full w-full bg-black opacity-85" />

                                        <div className="flex justify-center items-center text-xl py-2 mb-2 text-white shadow-lg shadow-black">
                                            {item.Description}
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="text-white">Attack Range:
                                                <span className="text-white text-lg font-semibold ml-2">
                                                    {item.AttackRange}
                                                </span>
                                            </p>
                                            <p className="text-white">Attack Speed:
                                                <span className="text-white text-lg font-semibold ml-2">
                                                    {item.TimeInBetweenAttacks}
                                                </span>
                                            </p>
                                            <p className="text-white">Base Damage:
                                                <span className="text-white text-lg font-semibold ml-2">
                                                    {item.Damage}
                                                </span>
                                            </p>
                                            <p className="text-white">Base Health:
                                                <span className="text-white text-lg font-semibold ml-2">
                                                    {item.Health}
                                                </span>
                                            </p>
                                            {item.PowerDamage && (
                                                <p className="text-white">Base Power Damage:
                                                    <span className="text-white text-lg font-semibold ml-2">
                                                        {item.PowerDamage}
                                                    </span>
                                                </p>
                                            )}
                                            {item.AOERadius > 0 && (
                                                <p className="text-white">AOE Range:
                                                    <span className="text-white text-lg font-semibold ml-2">
                                                        {item.AOERadius}
                                                    </span>
                                                </p>
                                            )}
                                            {item.ChargedPowerRadius > 0 && (
                                                <p className="text-white">Power Radius:
                                                    <span className="text-white text-lg font-semibold ml-2">
                                                        {item.ChargedPowerRadius}
                                                    </span>
                                                </p>
                                            )}
                                            {item.PowerDuration > 0 && (
                                                <p className="text-white">Power Duration:
                                                    <span className="text-white text-lg font-semibold ml-2">
                                                        {item.PowerDuration}
                                                    </span>
                                                </p>
                                            )}
                                        </div>
                                    </ModalContent>
                                    {/* <ModalFooter className="gap-4">
                                    <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                                        Cancel
                                    </button>
                                    <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                                        Book Now
                                    </button>
                                </ModalFooter> */}
                                </ModalBody>
                            </Modal>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="Fantasy" className="flex flex-col items-center justify-center px-10 rounded-2xl h-auto w-auto bg-gradient-to-br from-pink-700 to-pink-900">
                    <h1 className="text-center font-semibold text-white  pt-14"></h1>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-4">
                        {fantasyCards.map((item: any, index: number) => (
                            <Modal key={index}>
                                <ModalTrigger>
                                    <div className='flex items-center flex-col justify-center h-[400px] w-full' key={index}>
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
                                </ModalTrigger>
                                <ModalBody>
                                    <ModalContent>
                                        <img
                                            src={`/images/${item.Image.toLowerCase()}.webp`}
                                            className=" object-cover h-full w-full -z-20 absolute top-0 left-0 "
                                        />
                                        <div className="-z-10 absolute top-0 left-0 h-full w-full bg-black opacity-85" />

                                        <div className="flex justify-center items-center text-xl py-2 mb-2 text-white shadow-lg shadow-black">
                                            {item.Description}
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="text-white">Attack Range:
                                                <span className="text-white text-lg font-semibold ml-2">
                                                    {item.AttackRange}
                                                </span>
                                            </p>
                                            <p className="text-white">Attack Speed:
                                                <span className="text-white text-lg font-semibold ml-2">
                                                    {item.TimeInBetweenAttacks}
                                                </span>
                                            </p>
                                            <p className="text-white">Base Damage:
                                                <span className="text-white text-lg font-semibold ml-2">
                                                    {item.Damage}
                                                </span>
                                            </p>
                                            <p className="text-white">Base Health:
                                                <span className="text-white text-lg font-semibold ml-2">
                                                    {item.Health}
                                                </span>
                                            </p>
                                            {item.PowerDamage && (
                                                <p className="text-white">Base Power Damage:
                                                    <span className="text-white text-lg font-semibold ml-2">
                                                        {item.PowerDamage}
                                                    </span>
                                                </p>
                                            )}
                                            {item.AOERadius > 0 && (
                                                <p className="text-white">AOE Range:
                                                    <span className="text-white text-lg font-semibold ml-2">
                                                        {item.AOERadius}
                                                    </span>
                                                </p>
                                            )}
                                            {item.ChargedPowerRadius > 0 && (
                                                <p className="text-white">Power Radius:
                                                    <span className="text-white text-lg font-semibold ml-2">
                                                        {item.ChargedPowerRadius}
                                                    </span>
                                                </p>
                                            )}
                                            {item.PowerDuration > 0 && (
                                                <p className="text-white">Power Duration:
                                                    <span className="text-white text-lg font-semibold ml-2">
                                                        {item.PowerDuration}
                                                    </span>
                                                </p>
                                            )}
                                        </div>

                                    </ModalContent>
                                    {/* <ModalFooter className="gap-4">
                                     <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                                         Cancel
                                     </button>
                                     <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                                         Book Now
                                     </button>
                                 </ModalFooter> */}
                                </ModalBody>
                            </Modal>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="Superhero" className="flex flex-col items-center justify-center px-10 rounded-2xl h-auto w-auto bg-gradient-to-br from-purple-400 to-purple-600">
                    <h1 className="text-center font-semibold text-white  pt-14"></h1>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-4">
                        {superheroCards.map((item: any, index: number) => (
                            <Modal key={index}>
                                <ModalTrigger>
                                    <div className='flex items-center flex-col justify-center h-[400px] w-full' key={index}>
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
                                </ModalTrigger>
                                <ModalBody>
                                    <ModalContent>
                                        <img
                                            src={`/images/${item.Image.toLowerCase()}.webp`}
                                            className=" object-cover h-full w-full -z-20 absolute top-0 left-0 "
                                        />
                                        <div className="-z-10 absolute top-0 left-0 h-full w-full bg-black opacity-85" />

                                        <div className="flex justify-center items-center text-xl py-2 mb-2 text-white shadow-lg shadow-black">
                                            {item.Description}
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="text-white">Attack Range:
                                                <span className="text-white text-lg font-semibold ml-2">
                                                    {item.AttackRange}
                                                </span>
                                            </p>
                                            <p className="text-white">Attack Speed:
                                                <span className="text-white text-lg font-semibold ml-2">
                                                    {item.TimeInBetweenAttacks}
                                                </span>
                                            </p>
                                            <p className="text-white">Base Damage:
                                                <span className="text-white text-lg font-semibold ml-2">
                                                    {item.Damage}
                                                </span>
                                            </p>
                                            <p className="text-white">Base Health:
                                                <span className="text-white text-lg font-semibold ml-2">
                                                    {item.Health}
                                                </span>
                                            </p>
                                            {item.PowerDamage && (
                                                <p className="text-white">Base Power Damage:
                                                    <span className="text-white text-lg font-semibold ml-2">
                                                        {item.PowerDamage}
                                                    </span>
                                                </p>
                                            )}
                                            {item.AOERadius > 0 && (
                                                <p className="text-white">AOE Range:
                                                    <span className="text-white text-lg font-semibold ml-2">
                                                        {item.AOERadius}
                                                    </span>
                                                </p>
                                            )}
                                            {item.ChargedPowerRadius > 0 && (
                                                <p className="text-white">Power Radius:
                                                    <span className="text-white text-lg font-semibold ml-2">
                                                        {item.ChargedPowerRadius}
                                                    </span>
                                                </p>
                                            )}
                                            {item.PowerDuration > 0 && (
                                                <p className="text-white">Power Duration:
                                                    <span className="text-white text-lg font-semibold ml-2">
                                                        {item.PowerDuration}
                                                    </span>
                                                </p>
                                            )}
                                        </div>
                                    </ModalContent>
                                    {/* <ModalFooter className="gap-4">
                                        <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                                            Cancel
                                        </button>
                                        <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                                            Book Now
                                        </button>
                                    </ModalFooter> */}
                                </ModalBody>
                            </Modal>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default TabsComponent