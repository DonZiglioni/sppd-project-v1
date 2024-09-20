"use client"

import React, { useState, useEffect } from 'react'
interface Props {
    cardStats: Array<any>
    cardEvolve: Array<any>
    baseDmg: number
    baseHealth: number
    basePower: number
    baseHeal: number
}

const LevelComponent = ({
    cardStats,
    cardEvolve,
    baseDmg,
    baseHealth,
    basePower,
    baseHeal,

}: Props) => {
    const baseD = baseDmg;
    const baseH = baseHealth;
    const basePow = basePower;
    const basePowHeal = baseHeal;
    const [startingDmg1, setStartingDmg1] = useState(baseD);
    const [startingHealth1, setStartingHealth1] = useState(baseH);
    const [startingDmg2, setStartingDmg2] = useState(baseD);
    const [startingHealth2, setStartingHealth2] = useState(baseH);
    const [startingDmg3, setStartingDmg3] = useState(baseD);
    const [startingHealth3, setStartingHealth3] = useState(baseH);
    const [startingDmg4, setStartingDmg4] = useState(baseD);
    const [startingHealth4, setStartingHealth4] = useState(baseH);
    const [startingDmg5, setStartingDmg5] = useState(baseD);
    const [startingHealth5, setStartingHealth5] = useState(baseH);
    const [startingDmg6, setStartingDmg6] = useState(baseD);
    const [startingHealth6, setStartingHealth6] = useState(baseH);
    const [startingDmg7, setStartingDmg7] = useState(baseD);
    const [startingHealth7, setStartingHealth7] = useState(baseH);
    const [maxDmg1, setMaxDmg1] = useState(0);
    const [maxHealth1, setMaxHealth1] = useState(0);
    const [maxDmg2, setMaxDmg2] = useState(0);
    const [maxHealth2, setMaxHealth2] = useState(0);
    const [maxDmg3, setMaxDmg3] = useState(0);
    const [maxHealth3, setMaxHealth3] = useState(0);
    const [maxDmg4, setMaxDmg4] = useState(0);
    const [maxHealth4, setMaxHealth4] = useState(0);
    const [maxDmg5, setMaxDmg5] = useState(0);
    const [maxHealth5, setMaxHealth5] = useState(0);
    const [maxDmg6, setMaxDmg6] = useState(0);
    const [maxHealth6, setMaxHealth6] = useState(0);
    const [startingPower1, setStartingPower1] = useState(basePow);
    const [startingHeal1, setStartingHeal1] = useState(basePowHeal);
    const [startingPower2, setStartingPower2] = useState(basePow);
    const [startingHeal2, setStartingHeal2] = useState(basePowHeal);
    const [startingPower3, setStartingPower3] = useState(basePow);
    const [startingHeal3, setStartingHeal3] = useState(basePowHeal);
    const [startingPower4, setStartingPower4] = useState(basePow);
    const [startingHeal4, setStartingHeal4] = useState(basePowHeal);
    const [startingPower5, setStartingPower5] = useState(basePow);
    const [startingHeal5, setStartingHeal5] = useState(basePowHeal);
    const [startingPower6, setStartingPower6] = useState(basePow);
    const [startingHeal6, setStartingHeal6] = useState(basePowHeal);
    const [startingPower7, setStartingPower7] = useState(basePow);
    const [startingHeal7, setStartingHeal7] = useState(basePowHeal);
    const [maxPow1, setMaxPow1] = useState(0);
    const [maxPowHeal1, setMaxPowHeal1] = useState(0);
    const [maxPow2, setMaxPow2] = useState(0);
    const [maxPowHeal2, setMaxPowHeal2] = useState(0);
    const [maxPow3, setMaxPow3] = useState(0);
    const [maxPowHeal3, setMaxPowHeal3] = useState(0);
    const [maxPow4, setMaxPow4] = useState(0);
    const [maxPowHeal4, setMaxPowHeal4] = useState(0);
    const [maxPow5, setMaxPow5] = useState(0);
    const [maxPowHeal5, setMaxPowHeal5] = useState(0);
    const [maxPow6, setMaxPow6] = useState(0);
    const [maxPowHeal6, setMaxPowHeal6] = useState(0);

    const levelUp = () => {
        let tempDmg = baseD;
        let tempHealth = baseH;
        let tempPow = basePow;
        let tempPowHeal = basePowHeal;

        const evolve = (
            tempDmg: number,
            tempHealth: number,
            level: number,

        ) => {
            let newDamage = tempDmg;
            let newHealth = tempHealth;
            console.log("Evolving...");

            switch (level) {
                case 2:
                    newDamage = newDamage + cardEvolve[0].Slots[1].value
                    newHealth = newHealth + cardEvolve[0].Slots[0].value
                    console.log("To Level 2....", newDamage, newHealth);
                    setStartingDmg2(newDamage)
                    setStartingHealth2(newHealth)
                    break;
                case 3:
                    newDamage = newDamage + cardEvolve[1].Slots[1].value
                    newHealth = newHealth + cardEvolve[1].Slots[0].value
                    setStartingDmg3(newDamage)
                    setStartingHealth3(newHealth)
                    break;
                case 4:
                    newDamage = newDamage + cardEvolve[2].Slots[1].value
                    newHealth = newHealth + cardEvolve[2].Slots[0].value
                    setStartingDmg4(newDamage)
                    setStartingHealth4(newHealth)
                    break;
                case 5:
                    newDamage = newDamage + cardEvolve[3].Slots[1].value
                    newHealth = newHealth + cardEvolve[3].Slots[0].value
                    setStartingDmg5(newDamage)
                    setStartingHealth5(newHealth)
                    break;
                case 6:
                    newDamage = newDamage + cardEvolve[4].Slots[1].value
                    newHealth = newHealth + cardEvolve[4].Slots[0].value
                    setStartingDmg6(newDamage)
                    setStartingHealth6(newHealth)
                    break;
                case 7:
                    newDamage = newDamage + cardEvolve[5].Slots[1].value
                    newHealth = newHealth + cardEvolve[5].Slots[0].value
                    setStartingDmg7(newDamage)
                    setStartingHealth7(newHealth)
                    break;
                default:
                    break;
            }

            return { newDamage, newHealth }
        }

        for (let i = 0; i <= 4; i++) {
            const e = cardStats[i];
            if (i === 4) {
                console.log("Before Lvl 2 Dmg:", tempDmg, "Health:", tempHealth);
                setMaxDmg1(tempDmg)
                setMaxHealth1(tempHealth)
                setMaxPowHeal1(tempPowHeal)
                setStartingHeal2(tempPowHeal)
                setMaxPow1(tempPow)
                setStartingPower2(tempPow)
                const { newDamage, newHealth } = evolve(tempDmg, tempHealth, 2)
                tempDmg = newDamage;
                tempHealth = newHealth;

                break
            }
            if (e.property === 'MaxHealth') {
                tempHealth = tempHealth + e.value;
                console.log("health +", e.value);
            }
            if (e.property === 'Damage') {
                tempDmg = tempDmg + e.value;
                console.log("Dmg +", e.value);
            }
            if (e.property === 'PowerHealAbs') {
                tempPowHeal = tempPowHeal + e.value;
                console.log("Heal +", e.value);
            }
            if (e.property === 'PowerDamageAbs') {
                tempPow = tempPow + e.value;
                console.log("Power +", e.value);
            }
        }

        for (let i = 4; i <= 14; i++) {
            const e = cardStats[i];
            if (i === 14) {
                console.log("Before Lvl 3 Dmg:", tempDmg, "Health:", tempHealth);
                setMaxDmg2(tempDmg)
                setMaxHealth2(tempHealth)
                setMaxPowHeal2(tempPowHeal)
                setStartingHeal3(tempPowHeal)
                setMaxPow2(tempPow)
                setStartingPower3(tempPow)
                const { newDamage, newHealth } = evolve(tempDmg, tempHealth, 3)
                tempDmg = newDamage;
                tempHealth = newHealth;
                break
            }
            if (e.property === 'MaxHealth') {
                tempHealth = tempHealth + e.value;
                console.log("health +", e.value);
            }
            if (e.property === 'Damage') {
                tempDmg = tempDmg + e.value;
                console.log("Dmg +", e.value);
            }
            if (e.property === 'PowerHealAbs') {
                tempPowHeal = tempPowHeal + e.value;
                console.log("Power +", e.value);
            }
            if (e.property === 'PowerDamageAbs') {
                tempPow = tempPow + e.value;
                console.log("Power +", e.value);
            }
            // console.log(e, tempDmg, tempHealth);
        }

        for (let i = 14; i <= 24; i++) {
            const e = cardStats[i];
            if (i === 24) {
                console.log("Before Lvl 4 Dmg:", tempDmg, "Health:", tempHealth);
                setMaxDmg3(tempDmg)
                setMaxHealth3(tempHealth)
                setMaxPowHeal3(tempPowHeal)
                setStartingHeal4(tempPowHeal)
                setMaxPow3(tempPow)
                setStartingPower4(tempPow)
                const { newDamage, newHealth } = evolve(tempDmg, tempHealth, 4)
                tempDmg = newDamage;
                tempHealth = newHealth;
                break
            }
            if (e.property === 'MaxHealth') {
                tempHealth = tempHealth + e.value;
                console.log("health +", e.value);
            }
            if (e.property === 'Damage') {
                tempDmg = tempDmg + e.value;
                console.log("Dmg +", e.value);
            }
            if (e.property === 'PowerHealAbs') {
                tempPowHeal = tempPowHeal + e.value;
                console.log("Power +", e.value);
            }
            if (e.property === 'PowerDamageAbs') {
                tempPow = tempPow + e.value;
                console.log("Power +", e.value);
            }
        }

        for (let i = 24; i <= 39; i++) {
            const e = cardStats[i];
            if (i === 39) {
                console.log("Before Lvl 5 Dmg:", tempDmg, "Health:", tempHealth);
                setMaxDmg4(tempDmg)
                setMaxHealth4(tempHealth)
                setMaxPowHeal4(tempPowHeal)
                setStartingHeal5(tempPowHeal)
                setMaxPow4(tempPow)
                setStartingPower5(tempPow)
                const { newDamage, newHealth } = evolve(tempDmg, tempHealth, 5)
                tempDmg = newDamage;
                tempHealth = newHealth;
                break
            }
            if (e.property === 'MaxHealth') {
                tempHealth = tempHealth + e.value;
                console.log("health +", e.value);
            }
            if (e.property === 'Damage') {
                tempDmg = tempDmg + e.value;
                console.log("Dmg +", e.value);
            }
            if (e.property === 'PowerHealAbs') {
                tempPowHeal = tempPowHeal + e.value;
                console.log("Power +", e.value);
            }
            if (e.property === 'PowerDamageAbs') {
                tempPow = tempPow + e.value;
                console.log("Power +", e.value);
            }
        }

        for (let i = 39; i <= 54; i++) {
            const e = cardStats[i];
            if (i === 54) {
                console.log("Before Lvl 6 Dmg:", tempDmg, "Health:", tempHealth);
                setMaxDmg5(tempDmg)
                setMaxHealth5(tempHealth)
                setMaxPowHeal5(tempPowHeal)
                setStartingHeal6(tempPowHeal)
                setMaxPow5(tempPow)
                setStartingPower6(tempPow)
                const { newDamage, newHealth } = evolve(tempDmg, tempHealth, 6)
                tempDmg = newDamage;
                tempHealth = newHealth;
                break
            }
            if (e.property === 'MaxHealth') {
                tempHealth = tempHealth + e.value;
                console.log("health +", e.value);
            }
            if (e.property === 'Damage') {
                tempDmg = tempDmg + e.value;
                console.log("Dmg +", e.value);
            }
            if (e.property === 'PowerHealAbs') {
                tempPowHeal = tempPowHeal + e.value;
                console.log("Power +", e.value);
            }
            if (e.property === 'PowerDamageAbs') {
                tempPow = tempPow + e.value;
                console.log("Power +", e.value);
            }
        }

        for (let i = 54; i <= 69; i++) {
            const e = cardStats[i];
            if (i === 69) {
                console.log("Before Lvl 7 Dmg:", tempDmg, "Health:", tempHealth);
                setMaxDmg6(tempDmg)
                setMaxHealth6(tempHealth)
                setMaxPowHeal6(tempPowHeal)
                setStartingHeal7(tempPowHeal)
                setMaxPow6(tempPow)
                setStartingPower7(tempPow)
                const { newDamage, newHealth } = evolve(tempDmg, tempHealth, 7)
                tempDmg = newDamage;
                tempHealth = newHealth;
                break
            }
            if (e.property === 'MaxHealth') {
                tempHealth = tempHealth + e.value;
                console.log("health +", e.value);
            }
            if (e.property === 'Damage') {
                tempDmg = tempDmg + e.value;
                console.log("Dmg +", e.value);
            }
            if (e.property === 'PowerHealAbs') {
                tempPowHeal = tempPowHeal + e.value;
                console.log("Power +", e.value);
            }
            if (e.property === 'PowerDamageAbs') {
                tempPow = tempPow + e.value;
                console.log("Power +", e.value);
            }
        }
    }

    useEffect(() => {
        levelUp()
    }, [])

    return (
        <div className=' flex flex-col items-center h-auto bg-[rgba(0,0,255,.1)] mt-4 border-black rounded-lg shadow-lg shadow-black'>
            <div className=' text-white w-full flex items-center justify-center text-sm border-b-2 border-t-2 border-[rgba(255,255,255,.4)] rounded-lg shadow-lg shadow-black '>
                <div className='flex flex-row items-center gap-x-4 px-4'>
                    <p >
                        Level 1:
                    </p>
                    <div className='flex flex-col items-end'>
                        <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                            DAMAGE:
                            <span className='font-bold text-lg text-blue-300'> {startingDmg1}</span>
                        </div>
                        <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                            MAX DAMAGE:
                            <span className='font-bold text-lg text-green-300'> {maxDmg1}</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-end'>

                        <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                            HEALTH:
                            <span className='font-bold text-lg  text-blue-300'> {startingHealth1}</span>
                        </div>
                        <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                            MAX HEALTH:
                            <span className='font-bold text-lg text-green-300'> {maxHealth1}</span>
                        </div>
                    </div>

                    {basePowHeal > 0 && (
                        <div className='flex flex-col items-end'>
                            <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                HEAL:
                                <span className='font-bold text-lg  text-blue-300'> {startingHeal1}</span>
                            </div>
                            <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                MAX HEAL:
                                <span className='font-bold text-lg text-green-300'> {maxPowHeal1}</span>
                            </div>
                        </div>
                    )}
                    {basePow > 0 && (
                        <div className='flex flex-col items-end'>
                            <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                POWER:
                                <span className='font-bold text-lg  text-blue-300'> {startingPower1}</span>
                            </div>
                            <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                MAX POWER:
                                <span className='font-bold text-lg text-green-300'> {maxPow1}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className=' text-white w-full flex items-center justify-center text-sm border-b-2 border-t-2 border-[rgba(255,255,255,.4)] rounded-lg shadow-lg shadow-black '>
                <div className='flex flex-row items-center gap-x-4 px-4'>
                    <p >
                        Level 2:
                    </p>
                    <div className='flex flex-col items-end'>
                        <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                            DAMAGE:
                            <span className='font-bold text-lg text-blue-300'> {startingDmg2}</span>
                        </div>
                        <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                            MAX DAMAGE:
                            <span className='font-bold text-lg text-green-300'> {maxDmg2}</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-end'>

                        <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                            HEALTH:
                            <span className='font-bold text-lg  text-blue-300'> {startingHealth2}</span>
                        </div>
                        <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                            MAX HEALTH:
                            <span className='font-bold text-lg text-green-300'> {maxHealth2}</span>
                        </div>
                    </div>

                    {basePowHeal > 0 && (
                        <div className='flex flex-col items-end'>
                            <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                HEAL:
                                <span className='font-bold text-lg  text-blue-300'> {startingHeal2}</span>
                            </div>
                            <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                MAX HEAL:
                                <span className='font-bold text-lg text-green-300'> {maxPowHeal2}</span>
                            </div>
                        </div>
                    )}
                    {basePow > 0 && (
                        <div className='flex flex-col items-end'>
                            <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                POWER:
                                <span className='font-bold text-lg  text-blue-300'> {startingPower2}</span>
                            </div>
                            <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                MAX POWER:
                                <span className='font-bold text-lg text-green-300'> {maxPow2}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className=' text-white w-full flex items-center justify-center text-sm border-b-2 border-t-2 border-[rgba(255,255,255,.4)] rounded-lg shadow-lg shadow-black '>
                <div className='flex flex-row items-center gap-x-4 px-4'>
                    <p >
                        Level 3:
                    </p>
                    <div className='flex flex-col items-end'>
                        <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                            DAMAGE:
                            <span className='font-bold text-lg text-blue-300'> {startingDmg3}</span>
                        </div>
                        <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                            MAX DAMAGE:
                            <span className='font-bold text-lg text-green-300'> {maxDmg3}</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-end'>

                        <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                            HEALTH:
                            <span className='font-bold text-lg  text-blue-300'> {startingHealth3}</span>
                        </div>
                        <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                            MAX HEALTH:
                            <span className='font-bold text-lg text-green-300'> {maxHealth3}</span>
                        </div>
                    </div>

                    {basePowHeal > 0 && (
                        <div className='flex flex-col items-end'>
                            <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                HEAL:
                                <span className='font-bold text-lg  text-blue-300'> {startingHeal3}</span>
                            </div>
                            <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                MAX HEAL:
                                <span className='font-bold text-lg text-green-300'> {maxPowHeal3}</span>
                            </div>
                        </div>
                    )}
                    {basePow > 0 && (
                        <div className='flex flex-col items-end'>
                            <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                POWER:
                                <span className='font-bold text-lg  text-blue-300'> {startingPower3}</span>
                            </div>
                            <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                MAX POWER:
                                <span className='font-bold text-lg text-green-300'> {maxPow3}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className=' text-white w-full flex items-center justify-center text-sm border-b-2 border-t-2 border-[rgba(255,255,255,.4)] rounded-lg shadow-lg shadow-black '>
                <div className='flex flex-row items-center gap-x-4 px-4'>
                    <p >
                        Level 4:
                    </p>
                    <div className='flex flex-col items-end'>
                        <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                            DAMAGE:
                            <span className='font-bold text-lg text-blue-300'> {startingDmg4}</span>
                        </div>
                        <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                            MAX DAMAGE:
                            <span className='font-bold text-lg text-green-300'> {maxDmg4}</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-end'>

                        <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                            HEALTH:
                            <span className='font-bold text-lg  text-blue-300'> {startingHealth4}</span>
                        </div>
                        <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                            MAX HEALTH:
                            <span className='font-bold text-lg text-green-300'> {maxHealth4}</span>
                        </div>
                    </div>

                    {basePowHeal > 0 && (
                        <div className='flex flex-col items-end'>
                            <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                HEAL:
                                <span className='font-bold text-lg  text-blue-300'> {startingHeal4}</span>
                            </div>
                            <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                MAX HEAL:
                                <span className='font-bold text-lg text-green-300'> {maxPowHeal4}</span>
                            </div>
                        </div>
                    )}
                    {basePow > 0 && (
                        <div className='flex flex-col items-end'>
                            <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                POWER:
                                <span className='font-bold text-lg  text-blue-300'> {startingPower4}</span>
                            </div>
                            <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                MAX POWER:
                                <span className='font-bold text-lg text-green-300'> {maxPow4}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className=' text-white w-full flex items-center justify-center text-sm border-b-2 border-t-2 border-[rgba(255,255,255,.4)] rounded-lg shadow-lg shadow-black '>
                <div className='flex flex-row items-center gap-x-4 px-4'>
                    <p >
                        Level 5:
                    </p>
                    <div className='flex flex-col items-end'>
                        <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                            DAMAGE:
                            <span className='font-bold text-lg text-blue-300'> {startingDmg5}</span>
                        </div>
                        <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                            MAX DAMAGE:
                            <span className='font-bold text-lg text-green-300'> {maxDmg5}</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-end'>

                        <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                            HEALTH:
                            <span className='font-bold text-lg  text-blue-300'> {startingHealth5}</span>
                        </div>
                        <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                            MAX HEALTH:
                            <span className='font-bold text-lg text-green-300'> {maxHealth5}</span>
                        </div>
                    </div>

                    {basePowHeal > 0 && (
                        <div className='flex flex-col items-end'>
                            <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                HEAL:
                                <span className='font-bold text-lg  text-blue-300'> {startingHeal5}</span>
                            </div>
                            <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                MAX HEAL:
                                <span className='font-bold text-lg text-green-300'> {maxPowHeal5}</span>
                            </div>
                        </div>
                    )}
                    {basePow > 0 && (
                        <div className='flex flex-col items-end'>
                            <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                POWER:
                                <span className='font-bold text-lg  text-blue-300'> {startingPower5}</span>
                            </div>
                            <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                MAX POWER:
                                <span className='font-bold text-lg text-green-300'> {maxPow5}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className=' text-white w-full flex items-center justify-center text-sm border-b-2 border-t-2 border-[rgba(255,255,255,.4)] rounded-lg shadow-lg shadow-black '>
                <div className='flex flex-row items-center gap-x-4 px-4'>
                    <p >
                        Level 6:
                    </p>
                    <div className='flex flex-col items-end'>
                        <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                            DAMAGE:
                            <span className='font-bold text-lg text-blue-300'> {startingDmg6}</span>
                        </div>
                        <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                            MAX DAMAGE:
                            <span className='font-bold text-lg text-green-300'> {maxDmg6}</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-end'>

                        <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                            HEALTH:
                            <span className='font-bold text-lg  text-blue-300'> {startingHealth6}</span>
                        </div>
                        <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                            MAX HEALTH:
                            <span className='font-bold text-lg text-green-300'> {maxHealth6}</span>
                        </div>
                    </div>

                    {basePowHeal > 0 && (
                        <div className='flex flex-col items-end'>
                            <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                HEAL:
                                <span className='font-bold text-lg  text-blue-300'> {startingHeal6}</span>
                            </div>
                            <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                MAX HEAL:
                                <span className='font-bold text-lg text-green-300'> {maxPowHeal6}</span>
                            </div>
                        </div>
                    )}
                    {basePow > 0 && (
                        <div className='flex flex-col items-end'>
                            <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                POWER:
                                <span className='font-bold text-lg  text-blue-300'> {startingPower6}</span>
                            </div>
                            <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                MAX POWER:
                                <span className='font-bold text-lg text-green-300'> {maxPow6}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className=' text-white w-full flex items-center justify-center text-sm border-b-2 border-t-2 border-[rgba(255,255,255,.4)] rounded-lg shadow-lg shadow-black '>
                <div className='flex flex-row items-center gap-x-4 px-4'>
                    <p >
                        Level 7:
                    </p>
                    <div className='flex flex-row gap-x-4 my-4 items-end'>
                        <div className='text-gray-300 -my-0.5 text-xs mr-2'>
                            MAX DAMAGE:
                            <span className='font-bold text-xl text-red-300'> {startingDmg7}</span>
                        </div>
                        <div className='text-gray-300 -my-0.5 text-xs mr-2'>
                            MAX HEALTH:
                            <span className='font-bold text-xl text-red-300'> {startingHealth7}</span>
                        </div>
                        {basePow > 0 && (
                            <div className='text-gray-300 -my-0.5 text-xs mr-2'>
                                MAX POWER:
                                <span className='font-bold text-xl text-red-300'> {startingPower7}</span>
                            </div>
                        )}
                        {basePowHeal > 0 && (
                            <div className='text-gray-300 -my-0.5 text-xs mr-2'>
                                MAX HEAL:
                                <span className='font-bold text-xl text-red-300'> {startingHeal7}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LevelComponent