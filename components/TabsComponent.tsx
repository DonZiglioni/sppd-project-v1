import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GlareCard } from '@/components/ui/glare-card';
import BaseCard from './BaseCard';
//import { AnimatedModalDemo } from "./Modal";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "../components/ui/animated-modal";

import React from 'react'
import LevelComponent from "./LevelComponent";
//import { AccordionDemo } from "./AccordionComponent";




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
    const getDescription = (oldDescription: string, item: any) => {
        if (item.PowerMaxHPGain && item.PowerDamage && item.PowerDuration) {
            let string1 = oldDescription.replace('{PowerMaxHPGain}', item.PowerMaxHPGain)
            let string2 = string1.replace('{PowerDuration}', item.PowerDuration)
            let string3 = string2.replace('{PowerDamage}', item.PowerDamage)
            return string3
        }
        if (item.PowerDurationMin && item.PowerDurationMax) {
            let string1 = oldDescription.replace('{PowerDurationMin}', item.PowerDurationMin)
            let string2 = string1.replace('{PowerDurationMax}', item.PowerDurationMax)
            return string2
        }
        if (item.PowerHeal && item.PowerDuration > 0) {
            let string1 = oldDescription.replace('{PowerHeal}', item.PowerHeal)
            let string2 = string1.replace('{PowerDuration}', item.PowerDuration)
            return string2
        }
        if (item.PowerAttackDecrease && item.PowerDuration > 0) {
            let string1 = oldDescription.replace('{PowerAttackDecrease}', item.PowerAttackDecrease)
            let string2 = string1.replace('{PowerDuration}', item.PowerDuration)
            return string2
        }
        if (item.PowerPoisonAmount && item.PowerDuration) {
            let string1 = oldDescription.replace('{PowerPoisonAmount}', item.PowerPoisonAmount)
            let string2 = string1.replace('{PowerDuration}', item.PowerDuration)
            return string2
        }
        if (item.PowerAttackBoost && item.PowerDuration > 0) {
            let string1 = oldDescription.replace('{PowerAttackBoost}', item.PowerAttackBoost)
            let string2 = string1.replace('{PowerDuration}', item.PowerDuration)
            return string2
        }
        if (item.PowerAttackBoost && item.PowerHeal) {
            let string1 = oldDescription.replace('{PowerAttackBoost}', item.PowerAttackBoost)
            let string2 = string1.replace('{PowerHeal}', item.PowerHeal)
            return string2
        }
        if (item.PowerHeroHeal && item.PowerHeal) {
            let string1 = oldDescription.replace('{PowerHeal}', item.PowerHeal)
            let string2 = string1.replace('{PowerHeroHeal}', item.PowerHeroHeal)
            return string2
        }
        if (item.PowerDamage && item.PowerDuration) {
            let string1 = oldDescription.replace('{PowerDuration}', item.PowerDuration)
            let string2 = string1.replace('{PowerDamage}', item.PowerDamage)
            return string2
        }
        if (item.PowerDamage && item.PowerHeroDamage) {
            let string1 = oldDescription.replace('{PowerDamage}', item.PowerDamage)
            let string2 = string1.replace('{PowerHeroDamage}', item.PowerHeroDamage)
            return string2
        }
        if (item.PowerMaxHPLoss && item.PowerDamage) {
            let string1 = oldDescription.replace('{PowerMaxHPLoss}', item.PowerMaxHPLoss)
            let string2 = string1.replace('{PowerDamage}', item.PowerDamage)
            return string2
        }
        if (item.PowerDamage) {
            return oldDescription.replace('{PowerDamage}', item.PowerDamage)
        }
        if (item.PowerAttackBoost) {
            return oldDescription.replace('{PowerAttackBoost}', item.PowerAttackBoost)
        }
        if (item.PowerDuration) {
            return oldDescription.replace('{PowerDuration}', item.PowerDuration)
        }
        if (item.PowerHeal) {
            return oldDescription.replace('{PowerHeal}', item.PowerHeal)
        }
        if (item.PowerHeroDamage) {
            return oldDescription.replace('{PowerHeroDamage}', item.PowerHeroDamage)
        }
        if (item.PowerHeroHeal) {
            return oldDescription.replace('{PowerHeroHeal}', item.PowerHeroHeal)
        }
        if (item.PowerAttackDecrease) {
            return oldDescription.replace('{PowerAttackDecrease}', item.PowerAttackDecrease)
        }
        if (item.PowerPoisonAmount) {
            return oldDescription.replace('{PowerPoisonAmount}', item.PowerPoisonAmount)
        }
        if (item.PowerMaxHPGain) {
            return oldDescription.replace('{PowerMaxHealthBoost}', item.PowerMaxHPGain)
        }
        if (item.PowerMaxHPLoss) {
            return oldDescription.replace('{PowerMaxHPLoss}', item.PowerMaxHPLoss)
        }
        return "Oh Noooo!"
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
                                            src={`/images/${item.Image}.webp`}
                                            className=" object-cover h-full w-full -z-20 absolute top-0 left-0 "
                                        />
                                        <div className="-z-10 absolute top-0 left-0 h-full w-full bg-black opacity-85" />

                                        <div className="flex justify-center items-center text-xl py-2 mb-2 text-white shadow-md shadow-[rgba(255,255,255,.5)]">
                                            {
                                                item.PowerDamage || item.PowerDuration || item.PowerAttackBoost ?
                                                    getDescription(item.Description, item)
                                                    :
                                                    item.Description

                                            }
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="text-white">Attack Range:
                                                <span className=" text-lg font-semibold ml-2 text-green-300">
                                                    {item.AttackRange}
                                                </span>
                                            </p>
                                            <p className="text-white">Attack Speed:
                                                <span className=" text-lg font-semibold ml-2 text-green-300">
                                                    {item.TimeInBetweenAttacks}
                                                </span>
                                            </p>
                                            <p className="text-white">Base Damage:
                                                <span className=" text-lg font-semibold ml-2 text-green-300">
                                                    {item.Damage}
                                                </span>
                                            </p>
                                            <p className="text-white">Base Health:
                                                <span className=" text-lg font-semibold ml-2 text-green-300">
                                                    {item.Health}
                                                </span>
                                            </p>
                                            {item.PowerDamage && (
                                                <p className="text-white">Base Power Damage:
                                                    <span className=" text-lg font-semibold ml-2 text-green-300">
                                                        {item.PowerDamage}
                                                    </span>
                                                </p>
                                            )}
                                            {item.AOERadius > 0 && (
                                                <p className="text-white">AOE Range:
                                                    <span className=" text-lg font-semibold ml-2 text-green-300">
                                                        {item.AOERadius}
                                                    </span>
                                                </p>
                                            )}
                                            {item.ChargedPowerRadius > 0 && (
                                                <p className="text-white">Power Radius:
                                                    <span className=" text-lg font-semibold ml-2 text-green-300">
                                                        {item.ChargedPowerRadius}
                                                    </span>
                                                </p>
                                            )}
                                            {item.PowerDuration > 0 && (
                                                <p className="text-white">Power Duration:
                                                    <span className=" text-lg font-semibold ml-2 text-green-300">
                                                        {item.PowerDuration}
                                                    </span>
                                                </p>
                                            )}
                                        </div>

                                        <LevelComponent
                                            baseHealthBoost={Number(item.PowerMaxHPGain)}
                                            baseHealthLoss={Number(item.PowerMaxHPLoss)}
                                            baseDuration={Number(item.PowerDuration)}
                                            basePoison={Number(item.PowerPoisonAmount)}
                                            baseDecrease={Number(item.PowerAttackDecrease)}
                                            baseHeroHeal={Number(item.PowerHeroHeal)}
                                            powerBoost={(Number(item.PowerAttackBoost))}
                                            attackRange={Number(item.AttackRange)}
                                            cardStats={item.TechTree2.Slots}
                                            cardEvolve={item.TechTree2.Evolve}
                                            baseDmg={Number(item.Damage)}
                                            baseHealth={Number(item.Health)}
                                            baseHeal={Number(item.PowerHeal)}
                                            basePower={Number(item.PowerDamage)}
                                            baseHeroPower={Number(item.PowerHeroDamage)}
                                            cardType={item.Type}

                                        />
                                    </ModalContent>
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
                                            src={`/images/${item.Image}.webp`}
                                            className=" object-cover h-full w-full -z-20 absolute top-0 left-0 "
                                        />
                                        <div className="-z-10 absolute top-0 left-0 h-full w-full bg-black opacity-85" />

                                        <div className="flex justify-center items-center text-xl py-2 mb-2 text-white shadow-lg shadow-black">
                                            {
                                                item.PowerDamage || item.PowerDuration || item.PowerAttackDecrease || item.PowerHeroHeal || item.PowerAttackBoost || item.PowerHeal || item.PowerHeroDamage > 0 ?
                                                    getDescription(item.Description, item)
                                                    :
                                                    item.Description
                                            }
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="text-white">Attack Range:
                                                <span className=" text-lg font-semibold ml-2 text-green-300">
                                                    {item.AttackRange}
                                                </span>
                                            </p>
                                            <p className="text-white">Attack Speed:
                                                <span className=" text-lg font-semibold ml-2 text-green-300">
                                                    {item.TimeInBetweenAttacks}
                                                </span>
                                            </p>
                                            <p className="text-white">Base Damage:
                                                <span className=" text-lg font-semibold ml-2 text-green-300">
                                                    {item.Damage}
                                                </span>
                                            </p>
                                            <p className="text-white">Base Health:
                                                <span className=" text-lg font-semibold ml-2 text-green-300">
                                                    {item.Health}
                                                </span>
                                            </p>
                                            {item.PowerDamage && (
                                                <p className="text-white">Base Power Damage:
                                                    <span className=" text-lg font-semibold ml-2 text-green-300">
                                                        {item.PowerDamage}
                                                    </span>
                                                </p>
                                            )}
                                            {item.AOERadius > 0 && (
                                                <p className="text-white">AOE Range:
                                                    <span className=" text-lg font-semibold ml-2 text-green-300">
                                                        {item.AOERadius}
                                                    </span>
                                                </p>
                                            )}
                                            {item.ChargedPowerRadius > 0 && (
                                                <p className="text-white">Power Radius:
                                                    <span className=" text-lg font-semibold ml-2 text-green-300">
                                                        {item.ChargedPowerRadius}
                                                    </span>
                                                </p>
                                            )}
                                            {item.PowerDuration > 0 && (
                                                <p className="text-white">Power Duration:
                                                    <span className=" text-lg font-semibold ml-2 text-green-300">
                                                        {item.PowerDuration}
                                                    </span>
                                                </p>
                                            )}
                                        </div>

                                        <LevelComponent
                                            baseHealthBoost={Number(item.PowerMaxHPGain)}
                                            baseHealthLoss={Number(item.PowerMaxHPLoss)}
                                            baseDuration={Number(item.PowerDuration)}
                                            basePoison={Number(item.PowerPoisonAmount)}
                                            baseDecrease={Number(item.PowerAttackDecrease)}
                                            baseHeroHeal={Number(item.PowerHeroHeal)}
                                            powerBoost={(Number(item.PowerAttackBoost))}
                                            attackRange={Number(item.AttackRange)}
                                            cardStats={item.TechTree2.Slots}
                                            cardEvolve={item.TechTree2.Evolve}
                                            baseDmg={Number(item.Damage)}
                                            baseHealth={Number(item.Health)}
                                            baseHeal={Number(item.PowerHeal)}
                                            basePower={Number(item.PowerDamage)}
                                            baseHeroPower={Number(item.PowerHeroDamage)}
                                            cardType={item.Type}
                                        />
                                    </ModalContent>
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
                                            src={`/images/${item.Image}.webp`}
                                            className=" object-cover h-full w-full -z-20 absolute top-0 left-0 "
                                        />
                                        <div className="-z-10 absolute top-0 left-0 h-full w-full bg-black opacity-85" />

                                        <div className="flex justify-center items-center text-xl py-2 mb-2 text-white shadow-lg shadow-black">
                                            {
                                                item.PowerDamage || item.PowerDuration || item.PowerPoisonAmount || item.PowerAttackBoost || item.PowerHeal || item.PowerHeroDamage > 0 ?
                                                    getDescription(item.Description, item)
                                                    :
                                                    item.Description
                                            }
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="text-white">Attack Range:
                                                <span className=" text-lg font-semibold ml-2 text-green-300">
                                                    {item.AttackRange}
                                                </span>
                                            </p>
                                            <p className="text-white">Attack Speed:
                                                <span className=" text-lg font-semibold ml-2 text-green-300">
                                                    {item.TimeInBetweenAttacks}
                                                </span>
                                            </p>
                                            <p className="text-white">Base Damage:
                                                <span className=" text-lg font-semibold ml-2 text-green-300">
                                                    {item.Damage}
                                                </span>
                                            </p>
                                            <p className="text-white">Base Health:
                                                <span className=" text-lg font-semibold ml-2 text-green-300">
                                                    {item.Health}
                                                </span>
                                            </p>
                                            {item.PowerDamage && (
                                                <p className="text-white">Base Power Damage:
                                                    <span className=" text-lg font-semibold ml-2 text-green-300">
                                                        {item.PowerDamage}
                                                    </span>
                                                </p>
                                            )}
                                            {item.AOERadius > 0 && (
                                                <p className="text-white">AOE Range:
                                                    <span className=" text-lg font-semibold ml-2 text-green-300">
                                                        {item.AOERadius}
                                                    </span>
                                                </p>
                                            )}
                                            {item.ChargedPowerRadius > 0 && (
                                                <p className="text-white">Power Radius:
                                                    <span className=" text-lg font-semibold ml-2 text-green-300">
                                                        {item.ChargedPowerRadius}
                                                    </span>
                                                </p>
                                            )}
                                            {item.PowerDuration > 0 && (
                                                <p className="text-white">Power Duration:
                                                    <span className=" text-lg font-semibold ml-2 text-green-300">
                                                        {item.PowerDuration}
                                                    </span>
                                                </p>
                                            )}
                                        </div>

                                        <LevelComponent
                                            baseHealthBoost={Number(item.PowerMaxHPGain)}
                                            baseHealthLoss={Number(item.PowerMaxHPLoss)}
                                            baseDuration={Number(item.PowerDuration)}
                                            basePoison={Number(item.PowerPoisonAmount)}
                                            baseDecrease={Number(item.PowerAttackDecrease)}
                                            baseHeroHeal={Number(item.PowerHeroHeal)}
                                            powerBoost={(Number(item.PowerAttackBoost))}
                                            attackRange={Number(item.AttackRange)}
                                            cardStats={item.TechTree2.Slots}
                                            cardEvolve={item.TechTree2.Evolve}
                                            baseDmg={Number(item.Damage)}
                                            baseHealth={Number(item.Health)}
                                            baseHeal={Number(item.PowerHeal)}
                                            basePower={Number(item.PowerDamage)}
                                            baseHeroPower={Number(item.PowerHeroDamage)}
                                            cardType={item.Type}
                                        />
                                    </ModalContent>
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
                                            src={`/images/${item.Image}.webp`}
                                            className=" object-cover h-full w-full -z-20 absolute top-0 left-0 "
                                        />
                                        <div className="-z-10 absolute top-0 left-0 h-full w-full bg-black opacity-85" />

                                        <div className="flex justify-center items-center text-xl py-2 mb-2 text-white shadow-lg shadow-black">
                                            {
                                                item.PowerDamage || item.PowerDuration || item.PowerAttackBoost || item.PowerHeal || item.PowerHeroDamage > 0 ?
                                                    getDescription(item.Description, item)
                                                    :
                                                    item.Description
                                            }
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="text-white">Attack Range:
                                                <span className=" text-lg font-semibold ml-2 text-green-300">
                                                    {item.AttackRange}
                                                </span>
                                            </p>
                                            <p className="text-white">Attack Speed:
                                                <span className=" text-lg font-semibold ml-2 text-green-300">
                                                    {item.TimeInBetweenAttacks}
                                                </span>
                                            </p>
                                            <p className="text-white">Base Damage:
                                                <span className=" text-lg font-semibold ml-2 text-green-300">
                                                    {item.Damage}
                                                </span>
                                            </p>
                                            <p className="text-white">Base Health:
                                                <span className=" text-lg font-semibold ml-2 text-green-300">
                                                    {item.Health}
                                                </span>
                                            </p>
                                            {item.PowerDamage && (
                                                <p className="text-white">Base Power Damage:
                                                    <span className=" text-lg font-semibold ml-2 text-green-300">
                                                        {item.PowerDamage}
                                                    </span>
                                                </p>
                                            )}
                                            {item.AOERadius > 0 && (
                                                <p className="text-white">AOE Range:
                                                    <span className=" text-lg font-semibold ml-2 text-green-300">
                                                        {item.AOERadius}
                                                    </span>
                                                </p>
                                            )}
                                            {item.ChargedPowerRadius > 0 && (
                                                <p className="text-white">Power Radius:
                                                    <span className=" text-lg font-semibold ml-2 text-green-300">
                                                        {item.ChargedPowerRadius}
                                                    </span>
                                                </p>
                                            )}
                                            {item.PowerDuration > 0 && (
                                                <p className="text-white">Power Duration:
                                                    <span className=" text-lg font-semibold ml-2 text-green-300">
                                                        {item.PowerDuration}
                                                    </span>
                                                </p>
                                            )}
                                        </div>

                                        <LevelComponent
                                            baseHealthBoost={Number(item.PowerMaxHPGain)}
                                            baseHealthLoss={Number(item.PowerMaxHPLoss)}
                                            baseDuration={Number(item.PowerDuration)}
                                            basePoison={Number(item.PowerPoisonAmount)}
                                            baseDecrease={Number(item.PowerAttackDecrease)}
                                            baseHeroHeal={Number(item.PowerHeroHeal)}
                                            powerBoost={(Number(item.PowerAttackBoost))}
                                            attackRange={Number(item.AttackRange)}
                                            cardStats={item.TechTree2.Slots}
                                            cardEvolve={item.TechTree2.Evolve}
                                            baseDmg={Number(item.Damage)}
                                            baseHealth={Number(item.Health)}
                                            baseHeal={Number(item.PowerHeal)}
                                            basePower={Number(item.PowerDamage)}
                                            baseHeroPower={Number(item.PowerHeroDamage)}
                                            cardType={item.Type}
                                        />
                                    </ModalContent>
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
                                            src={`/images/${item.Image}.webp`}
                                            className=" object-cover h-full w-full -z-20 absolute top-0 left-0 "
                                        />
                                        <div className="-z-10 absolute top-0 left-0 h-full w-full bg-black opacity-85" />

                                        <div className="flex justify-center items-center text-xl py-2 mb-2 text-white shadow-lg shadow-black">
                                            {
                                                item.PowerDamage || item.PowerDuration || item.PowerMaxHPGain || item.PowerMaxHPLoss || item.PowerAttackBoost || item.PowerHeal || item.PowerHeroDamage > 0 ?
                                                    getDescription(item.Description, item)
                                                    :
                                                    item.Description
                                            }
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="text-white">Attack Range:
                                                <span className=" text-lg font-semibold ml-2 text-green-300">
                                                    {item.AttackRange}
                                                </span>
                                            </p>
                                            <p className="text-white">Attack Speed:
                                                <span className=" text-lg font-semibold ml-2 text-green-300">
                                                    {item.TimeInBetweenAttacks}
                                                </span>
                                            </p>
                                            <p className="text-white">Base Damage:
                                                <span className=" text-lg font-semibold ml-2 text-green-300">
                                                    {item.Damage}
                                                </span>
                                            </p>
                                            <p className="text-white">Base Health:
                                                <span className=" text-lg font-semibold ml-2 text-green-300">
                                                    {item.Health}
                                                </span>
                                            </p>
                                            {item.PowerDamage && (
                                                <p className="text-white">Base Power Damage:
                                                    <span className=" text-lg font-semibold ml-2 text-green-300">
                                                        {item.PowerDamage}
                                                    </span>
                                                </p>
                                            )}
                                            {item.AOERadius > 0 && (
                                                <p className="text-white">AOE Range:
                                                    <span className=" text-lg font-semibold ml-2 text-green-300">
                                                        {item.AOERadius}
                                                    </span>
                                                </p>
                                            )}
                                            {item.ChargedPowerRadius > 0 && (
                                                <p className="text-white">Power Radius:
                                                    <span className=" text-lg font-semibold ml-2 text-green-300">
                                                        {item.ChargedPowerRadius}
                                                    </span>
                                                </p>
                                            )}
                                            {item.PowerDuration > 0 && (
                                                <p className="text-white">Power Duration:
                                                    <span className=" text-lg font-semibold ml-2 text-green-300">
                                                        {item.PowerDuration}
                                                    </span>
                                                </p>
                                            )}
                                        </div>

                                        <LevelComponent
                                            baseHealthBoost={Number(item.PowerMaxHPGain)}
                                            baseHealthLoss={Number(item.PowerMaxHPLoss)}
                                            baseDuration={Number(item.PowerDuration)}
                                            basePoison={Number(item.PowerPoisonAmount)}
                                            baseDecrease={Number(item.PowerAttackDecrease)}
                                            baseHeroHeal={Number(item.PowerHeroHeal)}
                                            powerBoost={(Number(item.PowerAttackBoost))}
                                            attackRange={Number(item.AttackRange)}
                                            cardStats={item.TechTree2.Slots}
                                            cardEvolve={item.TechTree2.Evolve}
                                            baseDmg={Number(item.Damage)}
                                            baseHealth={Number(item.Health)}
                                            baseHeal={Number(item.PowerHeal)}
                                            basePower={Number(item.PowerDamage)}
                                            baseHeroPower={Number(item.PowerHeroDamage)}
                                            cardType={item.Type}
                                        />
                                    </ModalContent>
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
                                            src={`/images/${item.Image}.webp`}
                                            className=" object-cover h-full w-full -z-20 absolute top-0 left-0 "
                                        />
                                        <div className="-z-10 absolute top-0 left-0 h-full w-full bg-black opacity-85" />

                                        <div className="flex justify-center items-center text-xl py-2 mb-2 text-white shadow-lg shadow-black">
                                            {
                                                item.PowerDamage || item.PowerDuration || item.PowerMaxHPGain || item.PowerMaxHPLoss || item.PowerAttackBoost || item.PowerHeal || item.PowerHeroDamage > 0 ?
                                                    getDescription(item.Description, item)
                                                    :
                                                    item.Description
                                            }
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="text-white">Attack Range:
                                                <span className=" text-lg font-semibold ml-2 text-green-300">
                                                    {item.AttackRange}
                                                </span>
                                            </p>
                                            <p className="text-white">Attack Speed:
                                                <span className=" text-lg font-semibold ml-2 text-green-300">
                                                    {item.TimeInBetweenAttacks}
                                                </span>
                                            </p>
                                            <p className="text-white">Base Damage:
                                                <span className=" text-lg font-semibold ml-2 text-green-300">
                                                    {item.Damage}
                                                </span>
                                            </p>
                                            <p className="text-white">Base Health:
                                                <span className=" text-lg font-semibold ml-2 text-green-300">
                                                    {item.Health}
                                                </span>
                                            </p>
                                            {item.PowerDamage && (
                                                <p className="text-white">Base Power Damage:
                                                    <span className=" text-lg font-semibold ml-2 text-green-300">
                                                        {item.PowerDamage}
                                                    </span>
                                                </p>
                                            )}
                                            {item.AOERadius > 0 && (
                                                <p className="text-white">AOE Range:
                                                    <span className=" text-lg font-semibold ml-2 text-green-300">
                                                        {item.AOERadius}
                                                    </span>
                                                </p>
                                            )}
                                            {item.ChargedPowerRadius > 0 && (
                                                <p className="text-white">Power Radius:
                                                    <span className=" text-lg font-semibold ml-2 text-green-300">
                                                        {item.ChargedPowerRadius}
                                                    </span>
                                                </p>
                                            )}
                                            {item.PowerDuration > 0 && (
                                                <p className="text-white">Power Duration:
                                                    <span className=" text-lg font-semibold ml-2 text-green-300">
                                                        {item.PowerDuration}
                                                    </span>
                                                </p>
                                            )}
                                        </div>

                                        <LevelComponent
                                            baseHealthBoost={Number(item.PowerMaxHPGain)}
                                            baseHealthLoss={Number(item.PowerMaxHPLoss)}
                                            baseDuration={Number(item.PowerDuration)}
                                            basePoison={Number(item.PowerPoisonAmount)}
                                            baseDecrease={Number(item.PowerAttackDecrease)}
                                            baseHeroHeal={Number(item.PowerHeroHeal)}
                                            powerBoost={(Number(item.PowerAttackBoost))}
                                            attackRange={Number(item.AttackRange)}
                                            cardStats={item.TechTree2.Slots}
                                            cardEvolve={item.TechTree2.Evolve}
                                            baseDmg={Number(item.Damage)}
                                            baseHealth={Number(item.Health)}
                                            baseHeal={Number(item.PowerHeal)}
                                            basePower={Number(item.PowerDamage)}
                                            baseHeroPower={Number(item.PowerHeroDamage)}
                                            cardType={item.Type}
                                        />
                                    </ModalContent>
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