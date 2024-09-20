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



    const levelUp = () => {
        let tempDmg = baseD;
        let tempHealth = baseH;
        let tempPow = basePow;
        let tempPowHeal = basePowHeal;

        const evolve = (tempDmg: number, tempHealth: number, level: number) => {
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
                console.log("Power +", e.value);
            }
        }

        for (let i = 4; i <= 14; i++) {
            const e = cardStats[i];
            if (i === 14) {
                console.log("Before Lvl 3 Dmg:", tempDmg, "Health:", tempHealth);
                setMaxDmg2(tempDmg)
                setMaxHealth2(tempHealth)
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
            // console.log(e, tempDmg, tempHealth);
        }

        for (let i = 14; i <= 24; i++) {
            const e = cardStats[i];
            if (i === 24) {
                console.log("Before Lvl 4 Dmg:", tempDmg, "Health:", tempHealth);
                setMaxDmg3(tempDmg)
                setMaxHealth3(tempHealth)
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
        }

        for (let i = 24; i <= 39; i++) {
            const e = cardStats[i];
            if (i === 39) {
                console.log("Before Lvl 5 Dmg:", tempDmg, "Health:", tempHealth);
                setMaxDmg4(tempDmg)
                setMaxHealth4(tempHealth)
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
        }

        for (let i = 39; i <= 54; i++) {
            const e = cardStats[i];
            if (i === 54) {
                console.log("Before Lvl 6 Dmg:", tempDmg, "Health:", tempHealth);
                setMaxDmg5(tempDmg)
                setMaxHealth5(tempHealth)
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
        }

        for (let i = 54; i <= 69; i++) {
            const e = cardStats[i];
            if (i === 69) {
                console.log("Before Lvl 7 Dmg:", tempDmg, "Health:", tempHealth);
                setMaxDmg6(tempDmg)
                setMaxHealth6(tempHealth)
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
        }
    }

    useEffect(() => {
        levelUp()
    }, [])


    // console.log("D:", baseD, " H:", baseH);
    // {
    //     basePow ? console.log("Pow:", basePow) : console.log("Heal:", basePowHeal);
    // }

    return (
        <div>
            <div>
                Level 1:
                <div className='flex flex-row gap-x-4'>
                    <div className='flex flex-col'>
                        <div>
                            Starting Damage:
                            <span> {startingDmg1}</span>
                        </div>
                        <div>
                            Starting Health:
                            <span> {startingHealth1}</span>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div>
                            Maximum Damage:
                            <span> {maxDmg1}</span>
                        </div>
                        <div>
                            Maximum Health:
                            <span> {maxHealth1}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                Level 2:
                <div className='flex flex-row gap-x-4'>
                    <div className='flex flex-col'>
                        <div>
                            Starting Damage:
                            <span> {startingDmg2}</span>
                        </div>
                        <div>
                            Starting Health:
                            <span> {startingHealth2}</span>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div>
                            Maximum Damage:
                            <span> {maxDmg2}</span>
                        </div>
                        <div>
                            Maximum Health:
                            <span> {maxHealth2}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                Level 3:
                <div className='flex flex-row gap-x-4'>
                    <div className='flex flex-col'>
                        <div>
                            Starting Damage:
                            <span> {startingDmg3}</span>
                        </div>
                        <div>
                            Starting Health:
                            <span> {startingHealth3}</span>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div>
                            Maximum Damage:
                            <span> {maxDmg3}</span>
                        </div>
                        <div>
                            Maximum Health:
                            <span> {maxHealth3}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                Level 4:
                <div className='flex flex-row gap-x-4'>
                    <div className='flex flex-col'>
                        <div>
                            Starting Damage:
                            <span> {startingDmg4}</span>
                        </div>
                        <div>
                            Starting Health:
                            <span> {startingHealth4}</span>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div>
                            Maximum Damage:
                            <span> {maxDmg4}</span>
                        </div>
                        <div>
                            Maximum Health:
                            <span> {maxHealth4}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                Level 5:
                <div className='flex flex-row gap-x-4'>
                    <div className='flex flex-col'>
                        <div>
                            Starting Damage:
                            <span> {startingDmg5}</span>
                        </div>
                        <div>
                            Starting Health:
                            <span> {startingHealth5}</span>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div>
                            Maximum Damage:
                            <span> {maxDmg5}</span>
                        </div>
                        <div>
                            Maximum Health:
                            <span> {maxHealth5}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                Level 6:
                <div className='flex flex-row gap-x-4'>
                    <div className='flex flex-col'>
                        <div>
                            Starting Damage:
                            <span> {startingDmg6}</span>
                        </div>
                        <div>
                            Starting Health:
                            <span> {startingHealth6}</span>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div>
                            Maximum Damage:
                            <span> {maxDmg6}</span>
                        </div>
                        <div>
                            Maximum Health:
                            <span> {maxHealth6}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                Level 6:
                <div className='flex flex-row gap-x-4'>
                    <div className='flex flex-col'>
                        <div>
                            MAX Damage:
                            <span> {startingDmg7}</span>
                        </div>
                        <div>
                            MAX Health:
                            <span> {startingHealth7}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LevelComponent