"use client"

import React, { useState, useEffect } from 'react'
interface Props {
    cardStats: Array<any>
    cardEvolve: Array<any>
    baseDmg: number
    baseHealth: number
    basePower: number
    baseHeroPower: number
    baseHeal: number
    cardType: string
    attackRange: number
    powerBoost: number
    baseHeroHeal: number
    baseDecrease: number
    basePoison: number
    baseDuration: number
    baseHealthBoost: number
    baseHealthLoss: number
}

const LevelComponent = ({
    cardStats,
    cardEvolve,
    baseDmg,
    baseHealth,
    basePower,
    baseHeal,
    baseHeroPower,
    cardType,
    attackRange,
    powerBoost,
    baseHeroHeal,
    baseDecrease,
    basePoison,
    baseDuration,
    baseHealthBoost,
    baseHealthLoss,
}: Props) => {
    const baseD = baseDmg;
    const baseH = baseHealth;
    const basePow = basePower;
    const baseHeroPow = baseHeroPower;
    const basePowHeal = baseHeal;
    const baseRange = attackRange;
    const basePowerBoost = powerBoost;
    const baseHealHero = baseHeroHeal;
    const baseAttackDecrease = baseDecrease;
    const basePoisonAmount = basePoison;
    const basePowerDuration = baseDuration;
    const baseHPGain = baseHealthBoost;
    const baseHPLoss = baseHealthLoss;

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
    const [maxPow7, setMaxPow7] = useState(0);
    const [maxPowHeal7, setMaxPowHeal7] = useState(0);
    const [startingHeroPower1, setStartingHeroPower1] = useState(baseHeroPower);
    const [startingHeroPower2, setStartingHeroPower2] = useState(baseHeroPower);
    const [startingHeroPower3, setStartingHeroPower3] = useState(baseHeroPower);
    const [startingHeroPower4, setStartingHeroPower4] = useState(baseHeroPower);
    const [startingHeroPower5, setStartingHeroPower5] = useState(baseHeroPower);
    const [startingHeroPower6, setStartingHeroPower6] = useState(baseHeroPower);
    const [startingHeroPower7, setStartingHeroPower7] = useState(baseHeroPower);
    const [maxHeroPower1, setMaxHeroPower1] = useState(baseHeroPower);
    const [maxHeroPower2, setMaxHeroPower2] = useState(baseHeroPower);
    const [maxHeroPower3, setMaxHeroPower3] = useState(baseHeroPower);
    const [maxHeroPower4, setMaxHeroPower4] = useState(baseHeroPower);
    const [maxHeroPower5, setMaxHeroPower5] = useState(baseHeroPower);
    const [maxHeroPower6, setMaxHeroPower6] = useState(baseHeroPower);
    const [maxHeroPower7, setMaxHeroPower7] = useState(baseHeroPower);
    const [startingHeroHeal1, setStartingHeroHeal1] = useState(baseHeroHeal);
    const [startingHeroHeal2, setStartingHeroHeal2] = useState(baseHeroHeal);
    const [startingHeroHeal3, setStartingHeroHeal3] = useState(baseHeroHeal);
    const [startingHeroHeal4, setStartingHeroHeal4] = useState(baseHeroHeal);
    const [startingHeroHeal5, setStartingHeroHeal5] = useState(baseHeroHeal);
    const [startingHeroHeal6, setStartingHeroHeal6] = useState(baseHeroHeal);
    const [startingHeroHeal7, setStartingHeroHeal7] = useState(baseHeroHeal);
    const [maxHeroHeal1, setMaxHeroHeal1] = useState(0);
    const [maxHeroHeal2, setMaxHeroHeal2] = useState(0);
    const [maxHeroHeal3, setMaxHeroHeal3] = useState(0);
    const [maxHeroHeal4, setMaxHeroHeal4] = useState(0);
    const [maxHeroHeal5, setMaxHeroHeal5] = useState(0);
    const [maxHeroHeal6, setMaxHeroHeal6] = useState(0);
    const [maxHeroHeal7, setMaxHeroHeal7] = useState(0);
    const [maxPowRange1, setMaxPowRange1] = useState(0);
    const [maxPowRange2, setMaxPowRange2] = useState(0);
    const [maxPowRange3, setMaxPowRange3] = useState(0);
    const [maxPowRange4, setMaxPowRange4] = useState(0);
    const [maxPowRange5, setMaxPowRange5] = useState(0);
    const [maxPowRange6, setMaxPowRange6] = useState(0);
    const [maxPowRange7, setMaxPowRange7] = useState(0);
    const [maxDuration1, setMaxDuration1] = useState(basePowerDuration);
    const [maxDuration2, setMaxDuration2] = useState(basePowerDuration);
    const [maxDuration3, setMaxDuration3] = useState(basePowerDuration);
    const [maxDuration4, setMaxDuration4] = useState(basePowerDuration);
    const [maxDuration5, setMaxDuration5] = useState(basePowerDuration);
    const [maxDuration6, setMaxDuration6] = useState(basePowerDuration);
    const [maxDuration7, setMaxDuration7] = useState(basePowerDuration);
    const [startingPowBoost1, setStartingPowBoost1] = useState(basePowerBoost);
    const [startingPowBoost2, setStartingPowBoost2] = useState(basePowerBoost);
    const [startingPowBoost3, setStartingPowBoost3] = useState(basePowerBoost);
    const [startingPowBoost4, setStartingPowBoost4] = useState(basePowerBoost);
    const [startingPowBoost5, setStartingPowBoost5] = useState(basePowerBoost);
    const [startingPowBoost6, setStartingPowBoost6] = useState(basePowerBoost);
    const [startingPowBoost7, setStartingPowBoost7] = useState(basePowerBoost);
    const [maxPowBoost1, setMaxPowBoost1] = useState(0);
    const [maxPowBoost2, setMaxPowBoost2] = useState(0);
    const [maxPowBoost3, setMaxPowBoost3] = useState(0);
    const [maxPowBoost4, setMaxPowBoost4] = useState(0);
    const [maxPowBoost5, setMaxPowBoost5] = useState(0);
    const [maxPowBoost6, setMaxPowBoost6] = useState(0);
    const [maxPowBoost7, setMaxPowBoost7] = useState(0);
    const [startingAttackDecrease1, setStartingAttackDecrease1] = useState(baseAttackDecrease);
    const [startingAttackDecrease2, setStartingAttackDecrease2] = useState(baseAttackDecrease);
    const [startingAttackDecrease3, setStartingAttackDecrease3] = useState(baseAttackDecrease);
    const [startingAttackDecrease4, setStartingAttackDecrease4] = useState(baseAttackDecrease);
    const [startingAttackDecrease5, setStartingAttackDecrease5] = useState(baseAttackDecrease);
    const [startingAttackDecrease6, setStartingAttackDecrease6] = useState(baseAttackDecrease);
    const [startingAttackDecrease7, setStartingAttackDecrease7] = useState(baseAttackDecrease);
    const [maxAttackDecrease1, setMaxAttackDecrease1] = useState(0);
    const [maxAttackDecrease2, setMaxAttackDecrease2] = useState(0);
    const [maxAttackDecrease3, setMaxAttackDecrease3] = useState(0);
    const [maxAttackDecrease4, setMaxAttackDecrease4] = useState(0);
    const [maxAttackDecrease5, setMaxAttackDecrease5] = useState(0);
    const [maxAttackDecrease6, setMaxAttackDecrease6] = useState(0);
    const [maxAttackDecrease7, setMaxAttackDecrease7] = useState(0);
    const [startingPoison1, setStartingPoison1] = useState(basePoisonAmount);
    const [startingPoison2, setStartingPoison2] = useState(basePoisonAmount);
    const [startingPoison3, setStartingPoison3] = useState(basePoisonAmount);
    const [startingPoison4, setStartingPoison4] = useState(basePoisonAmount);
    const [startingPoison5, setStartingPoison5] = useState(basePoisonAmount);
    const [startingPoison6, setStartingPoison6] = useState(basePoisonAmount);
    const [startingPoison7, setStartingPoison7] = useState(basePoisonAmount);
    const [maxPoison1, setMaxPoison1] = useState(0);
    const [maxPoison2, setMaxPoison2] = useState(0);
    const [maxPoison3, setMaxPoison3] = useState(0);
    const [maxPoison4, setMaxPoison4] = useState(0);
    const [maxPoison5, setMaxPoison5] = useState(0);
    const [maxPoison6, setMaxPoison6] = useState(0);
    const [maxPoison7, setMaxPoison7] = useState(0);
    const [startingHPBoost1, setStartingHPBoost1] = useState(baseHPGain);
    const [startingHPBoost2, setStartingHPBoost2] = useState(baseHPGain);
    const [startingHPBoost3, setStartingHPBoost3] = useState(baseHPGain);
    const [startingHPBoost4, setStartingHPBoost4] = useState(baseHPGain);
    const [startingHPBoost5, setStartingHPBoost5] = useState(baseHPGain);
    const [startingHPBoost6, setStartingHPBoost6] = useState(baseHPGain);
    const [startingHPBoost7, setStartingHPBoost7] = useState(baseHPGain);
    const [maxHPBoost1, setMaxHPBoost1] = useState(0);
    const [maxHPBoost2, setMaxHPBoost2] = useState(0);
    const [maxHPBoost3, setMaxHPBoost3] = useState(0);
    const [maxHPBoost4, setMaxHPBoost4] = useState(0);
    const [maxHPBoost5, setMaxHPBoost5] = useState(0);
    const [maxHPBoost6, setMaxHPBoost6] = useState(0);
    const [maxHPBoost7, setMaxHPBoost7] = useState(0);
    const [startingHPLoss1, setStartingHPLoss1] = useState(baseHPLoss);
    const [startingHPLoss2, setStartingHPLoss2] = useState(baseHPLoss);
    const [startingHPLoss3, setStartingHPLoss3] = useState(baseHPLoss);
    const [startingHPLoss4, setStartingHPLoss4] = useState(baseHPLoss);
    const [startingHPLoss5, setStartingHPLoss5] = useState(baseHPLoss);
    const [startingHPLoss6, setStartingHPLoss6] = useState(baseHPLoss);
    const [startingHPLoss7, setStartingHPLoss7] = useState(baseHPLoss);
    const [maxHPLoss1, setMaxHPLoss1] = useState(0);
    const [maxHPLoss2, setMaxHPLoss2] = useState(0);
    const [maxHPLoss3, setMaxHPLoss3] = useState(0);
    const [maxHPLoss4, setMaxHPLoss4] = useState(0);
    const [maxHPLoss5, setMaxHPLoss5] = useState(0);
    const [maxHPLoss6, setMaxHPLoss6] = useState(0);
    const [maxHPLoss7, setMaxHPLoss7] = useState(0);

    const levelUp = () => {
        let tempDmg = baseD;
        let tempHealth = baseH;
        let tempPow = basePow;
        let tempPowHeal = basePowHeal;
        let tempBoost = basePowerBoost;
        let tempHeroHeal = baseHealHero;
        let tempDecrease = baseAttackDecrease;
        let tempPoison = basePoisonAmount;
        let tempHPBoost = baseHPGain;
        let tempHPLoss = baseHPLoss;

        const evolve = (
            tempDmg: number,
            tempHealth: number,
            level: number,

        ) => {
            let newDamage = tempDmg;
            let newHealth = tempHealth;
            //console.log("Evolving...");

            switch (level) {
                case 2:
                    if (cardEvolve[0].Slots.length > 1) {
                        newDamage = newDamage + cardEvolve[0].Slots[1].value
                    }
                    newHealth = newHealth + cardEvolve[0].Slots[0].value
                    //console.log("To Level 2....", newDamage, newHealth);
                    setStartingDmg2(newDamage)
                    setStartingHealth2(newHealth)
                    break;
                case 3:
                    if (cardEvolve[0].Slots.length > 1) {
                        newDamage = newDamage + cardEvolve[1].Slots[1].value
                    }
                    newHealth = newHealth + cardEvolve[1].Slots[0].value
                    setStartingDmg3(newDamage)
                    setStartingHealth3(newHealth)
                    break;
                case 4:
                    if (cardEvolve[0].Slots.length > 1) {
                        newDamage = newDamage + cardEvolve[2].Slots[1].value
                    }
                    newHealth = newHealth + cardEvolve[2].Slots[0].value
                    setStartingDmg4(newDamage)
                    setStartingHealth4(newHealth)
                    break;
                case 5:
                    if (cardEvolve[0].Slots.length > 1) {
                        newDamage = newDamage + cardEvolve[3].Slots[1].value
                    }
                    newHealth = newHealth + cardEvolve[3].Slots[0].value
                    setStartingDmg5(newDamage)
                    setStartingHealth5(newHealth)
                    break;
                case 6:
                    if (cardEvolve[0].Slots.length > 1) {
                        newDamage = newDamage + cardEvolve[4].Slots[1].value
                    }
                    newHealth = newHealth + cardEvolve[4].Slots[0].value
                    setStartingDmg6(newDamage)
                    setStartingHealth6(newHealth)
                    break;
                case 7:
                    if (cardEvolve[0].Slots.length > 1) {
                        newDamage = newDamage + cardEvolve[5].Slots[1].value
                    }
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
                // console.log("Before Lvl 2 Dmg:", tempDmg, "Health:", tempHealth);
                setMaxDmg1(tempDmg)
                setMaxHealth1(tempHealth)
                setMaxPowHeal1(tempPowHeal)
                setStartingHeal2(tempPowHeal)
                setMaxPow1(tempPow)
                setStartingPower2(tempPow)
                setMaxPowBoost1(tempBoost)
                setStartingPowBoost2(tempBoost)
                setMaxAttackDecrease1(tempDecrease)
                setStartingAttackDecrease2(tempDecrease)
                setMaxPoison1(tempPoison)
                setStartingPoison2(tempPoison)
                setMaxHPBoost1(tempHPBoost)
                setStartingHPBoost2(tempHPBoost)
                setMaxHPLoss1(tempHPLoss)
                setStartingHPLoss2(tempHPLoss)
                const { newDamage, newHealth } = evolve(tempDmg, tempHealth, 2)
                tempDmg = newDamage;
                tempHealth = newHealth;

                break
            }
            if (e.property === 'MaxHealth') {
                tempHealth = tempHealth + e.value;
                // console.log("health +", e.value);
            }
            if (e.property === 'Damage') {
                tempDmg = tempDmg + e.value;
                // console.log("Dmg +", e.value);
            }
            if (e.property === 'PowerHealAbs') {
                tempPowHeal = tempPowHeal + e.value;
                // console.log("Heal +", e.value);
            }
            if (e.property === 'PowerDamageAbs') {
                tempPow = tempPow + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerAttackBoostAbs') {
                tempBoost = tempBoost + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerAttackBoostAbs') {
                tempBoost = tempBoost + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerAttackDecreaseAbs') {
                tempDecrease = tempDecrease + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerPoisonAmountAbs') {
                tempPoison = tempPoison + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerMaxHPGainAbs') {
                tempHPBoost = tempHPBoost + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerMaxHPLossAbs') {
                tempHPLoss = tempHPLoss + e.value;
                // console.log("Power +", e.value);
            }
        }

        for (let i = 4; i <= 14; i++) {
            const e = cardStats[i];
            if (i === 14) {
                // console.log("Before Lvl 3 Dmg:", tempDmg, "Health:", tempHealth);
                setMaxDmg2(tempDmg)
                setMaxHealth2(tempHealth)
                setMaxPowHeal2(tempPowHeal)
                setStartingHeal3(tempPowHeal)
                setMaxPow2(tempPow)
                setStartingPower3(tempPow)
                setMaxPowBoost2(tempBoost)
                setStartingPowBoost3(tempBoost)
                setMaxAttackDecrease2(tempDecrease)
                setStartingAttackDecrease3(tempDecrease)
                setMaxPoison2(tempPoison)
                setStartingPoison3(tempPoison)
                setMaxHPBoost2(tempHPBoost)
                setStartingHPBoost3(tempHPBoost)
                setMaxHPLoss2(tempHPLoss)
                setStartingHPLoss3(tempHPLoss)
                const { newDamage, newHealth } = evolve(tempDmg, tempHealth, 3)
                tempDmg = newDamage;
                tempHealth = newHealth;
                break
            }
            if (e.property === 'MaxHealth') {
                tempHealth = tempHealth + e.value;
                // console.log("health +", e.value);
            }
            if (e.property === 'Damage') {
                tempDmg = tempDmg + e.value;
                // console.log("Dmg +", e.value);
            }
            if (e.property === 'PowerHealAbs') {
                tempPowHeal = tempPowHeal + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerDamageAbs') {
                tempPow = tempPow + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerAttackBoostAbs') {
                tempBoost = tempBoost + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerAttackDecreaseAbs') {
                tempDecrease = tempDecrease + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerPoisonAmountAbs') {
                tempPoison = tempPoison + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerMaxHPGainAbs') {
                tempHPBoost = tempHPBoost + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerMaxHPLossAbs') {
                tempHPLoss = tempHPLoss + e.value;
                // console.log("Power +", e.value);
            }
        }

        for (let i = 14; i <= 24; i++) {
            const e = cardStats[i];
            if (i === 24) {
                // console.log("Before Lvl 4 Dmg:", tempDmg, "Health:", tempHealth);
                setMaxDmg3(tempDmg)
                setMaxHealth3(tempHealth)
                setMaxPowHeal3(tempPowHeal)
                setStartingHeal4(tempPowHeal)
                setMaxPow3(tempPow)
                setStartingPower4(tempPow)
                setMaxPowBoost3(tempBoost)
                setStartingPowBoost4(tempBoost)
                setMaxAttackDecrease3(tempDecrease)
                setStartingAttackDecrease4(tempDecrease)
                setMaxPoison3(tempPoison)
                setStartingPoison4(tempPoison)
                setMaxHPBoost3(tempHPBoost)
                setStartingHPBoost4(tempHPBoost)
                setMaxHPLoss3(tempHPLoss)
                setStartingHPLoss4(tempHPLoss)
                const { newDamage, newHealth } = evolve(tempDmg, tempHealth, 4)
                tempDmg = newDamage;
                tempHealth = newHealth;
                break
            }
            if (e.property === 'MaxHealth') {
                tempHealth = tempHealth + e.value;
                // console.log("health +", e.value);
            }
            if (e.property === 'Damage') {
                tempDmg = tempDmg + e.value;
                // console.log("Dmg +", e.value);
            }
            if (e.property === 'PowerHealAbs') {
                tempPowHeal = tempPowHeal + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerDamageAbs') {
                tempPow = tempPow + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerAttackBoostAbs') {
                tempBoost = tempBoost + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerAttackDecreaseAbs') {
                tempDecrease = tempDecrease + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerPoisonAmountAbs') {
                tempPoison = tempPoison + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerMaxHPGainAbs') {
                tempHPBoost = tempHPBoost + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerMaxHPLossAbs') {
                tempHPLoss = tempHPLoss + e.value;
                // console.log("Power +", e.value);
            }
        }

        for (let i = 24; i <= 39; i++) {
            const e = cardStats[i];
            if (i === 39) {
                // console.log("Before Lvl 5 Dmg:", tempDmg, "Health:", tempHealth);
                setMaxDmg4(tempDmg)
                setMaxHealth4(tempHealth)
                setMaxPowHeal4(tempPowHeal)
                setStartingHeal5(tempPowHeal)
                setMaxPow4(tempPow)
                setStartingPower5(tempPow)
                setMaxPowBoost4(tempBoost)
                setStartingPowBoost5(tempBoost)
                setMaxAttackDecrease4(tempDecrease)
                setStartingAttackDecrease5(tempDecrease)
                setMaxPoison4(tempPoison)
                setStartingPoison5(tempPoison)
                setMaxHPBoost4(tempHPBoost)
                setStartingHPBoost5(tempHPBoost)
                setMaxHPLoss4(tempHPLoss)
                setStartingHPLoss5(tempHPLoss)
                const { newDamage, newHealth } = evolve(tempDmg, tempHealth, 5)
                tempDmg = newDamage;
                tempHealth = newHealth;
                break
            }
            if (e.property === 'MaxHealth') {
                tempHealth = tempHealth + e.value;
                // console.log("health +", e.value);
            }
            if (e.property === 'Damage') {
                tempDmg = tempDmg + e.value;
                // console.log("Dmg +", e.value);
            }
            if (e.property === 'PowerHealAbs') {
                tempPowHeal = tempPowHeal + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerDamageAbs') {
                tempPow = tempPow + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerAttackBoostAbs') {
                tempBoost = tempBoost + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerAttackDecreaseAbs') {
                tempDecrease = tempDecrease + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerPoisonAmountAbs') {
                tempPoison = tempPoison + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerMaxHPGainAbs') {
                tempHPBoost = tempHPBoost + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerMaxHPLossAbs') {
                tempHPLoss = tempHPLoss + e.value;
                // console.log("Power +", e.value);
            }
        }

        for (let i = 39; i <= 54; i++) {
            const e = cardStats[i];
            if (i === 54) {
                // console.log("Before Lvl 6 Dmg:", tempDmg, "Health:", tempHealth);
                setMaxDmg5(tempDmg)
                setMaxHealth5(tempHealth)
                setMaxPowHeal5(tempPowHeal)
                setStartingHeal6(tempPowHeal)
                setMaxPow5(tempPow)
                setStartingPower6(tempPow)
                setMaxPowBoost5(tempBoost)
                setStartingPowBoost6(tempBoost)
                setMaxAttackDecrease5(tempDecrease)
                setStartingAttackDecrease6(tempDecrease)
                setMaxPoison5(tempPoison)
                setStartingPoison6(tempPoison)
                setMaxHPBoost5(tempHPBoost)
                setStartingHPBoost6(tempHPBoost)
                setMaxHPLoss5(tempHPLoss)
                setStartingHPLoss6(tempHPLoss)
                const { newDamage, newHealth } = evolve(tempDmg, tempHealth, 6)
                tempDmg = newDamage;
                tempHealth = newHealth;
                break
            }
            if (e.property === 'MaxHealth') {
                tempHealth = tempHealth + e.value;
                // console.log("health +", e.value);
            }
            if (e.property === 'Damage') {
                tempDmg = tempDmg + e.value;
                // console.log("Dmg +", e.value);
            }
            if (e.property === 'PowerHealAbs') {
                tempPowHeal = tempPowHeal + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerDamageAbs') {
                tempPow = tempPow + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerAttackBoostAbs') {
                tempBoost = tempBoost + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerAttackDecreaseAbs') {
                tempDecrease = tempDecrease + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerPoisonAmountAbs') {
                tempPoison = tempPoison + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerMaxHPGainAbs') {
                tempHPBoost = tempHPBoost + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerMaxHPLossAbs') {
                tempHPLoss = tempHPLoss + e.value;
                // console.log("Power +", e.value);
            }
        }

        for (let i = 54; i <= 69; i++) {
            const e = cardStats[i];
            if (i === 69) {
                // console.log("Before Lvl 7 Dmg:", tempDmg, "Health:", tempHealth);
                setMaxDmg6(tempDmg)
                setMaxHealth6(tempHealth)
                setMaxPowHeal6(tempPowHeal)
                setStartingHeal7(tempPowHeal)
                setMaxPow6(tempPow)
                setStartingPower7(tempPow)
                setMaxPowBoost6(tempBoost)
                setStartingPowBoost7(tempBoost)
                setMaxAttackDecrease6(tempDecrease)
                setStartingAttackDecrease7(tempDecrease)
                setMaxPoison6(tempPoison)
                setStartingPoison7(tempPoison)
                setMaxHPBoost6(tempHPBoost)
                setStartingHPBoost7(tempHPBoost)
                setMaxHPLoss6(tempHPLoss)
                setStartingHPLoss7(tempHPLoss)
                const { newDamage, newHealth } = evolve(tempDmg, tempHealth, 7)
                tempDmg = newDamage;
                tempHealth = newHealth;
                break
            }
            if (e.property === 'MaxHealth') {
                tempHealth = tempHealth + e.value;
                // console.log("health +", e.value);
            }
            if (e.property === 'Damage') {
                tempDmg = tempDmg + e.value;
                // console.log("Dmg +", e.value);
            }
            if (e.property === 'PowerHealAbs') {
                tempPowHeal = tempPowHeal + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerDamageAbs') {
                tempPow = tempPow + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerAttackBoostAbs') {
                tempBoost = tempBoost + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerAttackDecreaseAbs') {
                tempDecrease = tempDecrease + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerPoisonAmountAbs') {
                tempPoison = tempPoison + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerMaxHPGainAbs') {
                tempHPBoost = tempHPBoost + e.value;
                // console.log("Power +", e.value);
            }
            if (e.property === 'PowerMaxHPLossAbs') {
                tempHPLoss = tempHPLoss + e.value;
                // console.log("Power +", e.value);
            }
        }
    }

    const levelUpSpell = () => {
        let tempPower = basePow;
        let tempHeroPower = baseHeroPower;
        let tempRange = baseRange;
        let tempDuration = basePowerDuration;
        let tempPoison = basePoisonAmount;
        let tempHeal = baseHeal;

        let spellProperties: Array<string> = [];

        if (cardEvolve[0].Slots.length > 0) {
            cardEvolve[0].Slots.map((slot: any) => {
                spellProperties.push(slot.property)
            })
        }


        const spellEvolvePower = (level: number, amount: number) => {
            switch (level) {
                case 0:
                    setMaxPow2(amount)
                    break;
                case 1:
                    setMaxPow3(amount)
                    break;
                case 2:
                    setMaxPow4(amount)
                    break;
                case 3:
                    setMaxPow5(amount)
                    break;
                case 4:
                    setMaxPow6(amount)
                    break;
                case 5:
                    setMaxPow7(amount)
                    break;
                default:
                    break;
            }
        }
        const spellEvolveHeroPower = (level: number, amount: number) => {
            switch (level) {
                case 0:
                    setMaxHeroPower2(amount)
                    break;
                case 1:
                    setMaxHeroPower3(amount)
                    break;
                case 2:
                    setMaxHeroPower4(amount)
                    break;
                case 3:
                    setMaxHeroPower5(amount)
                    break;
                case 4:
                    setMaxHeroPower6(amount)
                    break;
                case 5:
                    setMaxHeroPower7(amount)
                    break;
                default:
                    break;
            }
        }
        const spellEvolveRange = (level: number, amount: number) => {
            switch (level) {
                case 0:
                    setMaxPowRange2(amount)
                    console.log("TEST: ", amount);

                    break;
                case 1:
                    setMaxPowRange3(amount)
                    console.log("TEST: ", amount);

                    break;
                case 2:
                    setMaxPowRange4(amount)
                    console.log("TEST: ", amount);

                    break;
                case 3:
                    setMaxPowRange5(amount)
                    console.log("TEST: ", amount);

                    break;
                case 4:
                    setMaxPowRange6(amount)
                    console.log("TEST: ", amount);

                    break;
                case 5:
                    setMaxPowRange7(amount)
                    console.log("TEST: ", amount);

                    break;
                default:
                    break;
            }
        }
        const spellEvolveDuration = (level: number, amount: number) => {
            switch (level) {
                case 0:
                    setMaxDuration2(amount)
                    //console.log("TEST: ", amount);
                    break;
                case 1:
                    setMaxDuration3(amount)
                    //console.log("TEST: ", amount);

                    break;
                case 2:
                    setMaxDuration4(amount)
                    // console.log("TEST: ", amount);

                    break;
                case 3:
                    setMaxDuration5(amount)
                    // console.log("TEST: ", amount);

                    break;
                case 4:
                    setMaxDuration6(amount)
                    // console.log("TEST: ", amount);

                    break;
                case 5:
                    setMaxDuration7(amount)
                    // console.log("TEST: ", amount);

                    break;
                default:
                    break;
            }
        }

        const spellEvolvePoison = (level: number, amount: number) => {
            switch (level) {
                case 0:
                    setMaxPoison2(amount)
                    //console.log("TEST: ", amount);
                    break;
                case 1:
                    setMaxPoison3(amount)
                    //console.log("TEST: ", amount);

                    break;
                case 2:
                    setMaxPoison4(amount)
                    // console.log("TEST: ", amount);

                    break;
                case 3:
                    setMaxPoison5(amount)
                    // console.log("TEST: ", amount);

                    break;
                case 4:
                    setMaxPoison6(amount)
                    // console.log("TEST: ", amount);

                    break;
                case 5:
                    setMaxPoison7(amount)
                    // console.log("TEST: ", amount);
                    break;
                default:
                    break;
            }
        }


        const spellEvolveHeal = (level: number, amount: number) => {
            switch (level) {
                case 0:
                    setMaxPowHeal2(amount)
                    //console.log("TEST: ", amount);
                    break;
                case 1:
                    setMaxPowHeal3(amount)
                    //console.log("TEST: ", amount);

                    break;
                case 2:
                    setMaxPowHeal4(amount)
                    // console.log("TEST: ", amount);

                    break;
                case 3:
                    setMaxPowHeal5(amount)
                    // console.log("TEST: ", amount);

                    break;
                case 4:
                    setMaxPowHeal6(amount)
                    // console.log("TEST: ", amount);

                    break;
                case 5:
                    setMaxPowHeal7(amount)
                    // console.log("TEST: ", amount);
                    break;
                default:
                    break;
            }
        }


        spellProperties.map((property: string) => {
            switch (property) {
                case "PowerDamageAbs":
                    setMaxPow1(tempPower)
                    for (let i = 0; i < cardEvolve.length; i++) {
                        const e = cardEvolve[i];
                        tempPower = tempPower + e.Slots[0].value
                        spellEvolvePower(i, tempPower)
                        // tempHeroPower = tempHeroPower + e.Slots[1].value
                    }
                    break;
                case "PowerHeroDamageAbs":
                    setMaxHeroPower1(tempHeroPower)
                    for (let i = 0; i < cardEvolve.length; i++) {
                        const e = cardEvolve[i];
                        tempHeroPower = tempHeroPower + e.Slots[1].value
                        spellEvolveHeroPower(i, tempHeroPower)
                    }
                    break;
                case "PowerRangeAbs":
                    setMaxPowRange1(tempRange)
                    for (let i = 0; i < cardEvolve.length; i++) {
                        const e = cardEvolve[i];
                        //console.log(tempRange, "AND", e.Slots[0].value);

                        tempRange = tempRange + e.Slots[0].value
                        spellEvolveRange(i, Number(tempRange.toFixed(1)))
                    }
                    break;
                case "PowerDurationAbs":
                    setMaxDuration1(tempDuration)
                    for (let i = 0; i < cardEvolve.length; i++) {
                        const e = cardEvolve[i];
                        //console.log(tempRange, "AND", e.Slots[0].value);
                        tempDuration = tempDuration + e.Slots[0].value
                        spellEvolveDuration(i, Number(tempDuration.toFixed(1)))
                    }
                    break;
                case "PowerPoisonAmountAbs":
                    setMaxPoison1(tempDuration)
                    for (let i = 0; i < cardEvolve.length; i++) {
                        const e = cardEvolve[i];
                        //console.log(tempRange, "AND", e.Slots[0].value);
                        tempPoison = tempPoison + e.Slots[0].value
                        spellEvolvePoison(i, Number(tempPoison))
                    }
                    break;
                case "PowerHealAbs":
                    setMaxPowHeal1(tempHeal)
                    for (let i = 0; i < cardEvolve.length; i++) {
                        const e = cardEvolve[i];
                        //console.log(tempRange, "AND", e.Slots[0].value);
                        tempHeal = tempHeal + e.Slots[0].value
                        spellEvolveHeal(i, Number(tempHeal))
                    }
                    break;
                default:
                    break;
            }
        })


        // for (let i = 0; i < cardEvolve.length; i++) {
        //     const e = cardEvolve[i];
        //     tempPower = tempPower + e.Slots[0].value
        //     tempHeroPower = tempHeroPower + e.Slots[1].value

        // }
        //console.log("FINAL", tempHeroPower, tempPower);


    }


    useEffect(() => {
        if (cardType === "Spell") {
            levelUpSpell()
        } else {
            levelUp()
        }
    }, [])

    return (
        <div className=' flex flex-col items-center h-auto bg-[rgba(0,0,255,.1)] mt-4 border-black rounded-lg shadow-lg shadow-black'>
            {cardType !== "Spell" && (
                <>
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
                            {basePowerBoost > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        BOOST:
                                        <span className='font-bold text-lg  text-blue-300'> {startingPowBoost1}</span>
                                    </div>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX BOOST:
                                        <span className='font-bold text-lg text-green-300'> {maxPowBoost1}</span>
                                    </div>
                                </div>
                            )}
                            {baseAttackDecrease > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        ATTACK DECREASE:
                                        <span className='font-bold text-lg  text-blue-300'> {startingAttackDecrease1}</span>
                                    </div>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX DECREASE:
                                        <span className='font-bold text-lg text-green-300'> {maxAttackDecrease1}</span>
                                    </div>
                                </div>
                            )}
                            {basePoisonAmount > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        POISON AMOUNT:
                                        <span className='font-bold text-lg  text-blue-300'> {startingPoison1}</span>
                                    </div>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX POISON:
                                        <span className='font-bold text-lg text-green-300'> {maxPoison1}</span>
                                    </div>
                                </div>
                            )}
                            {baseHPGain > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        HP BOOST:
                                        <span className='font-bold text-lg  text-blue-300'> {startingHPBoost1}</span>
                                    </div>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX BOOST:
                                        <span className='font-bold text-lg text-green-300'> {maxHPBoost1}</span>
                                    </div>
                                </div>
                            )}
                            {baseHPLoss > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        HP LOSS:
                                        <span className='font-bold text-lg  text-blue-300'> {startingHPLoss1}</span>
                                    </div>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX LOSS:
                                        <span className='font-bold text-lg text-green-300'> {maxHPLoss1}</span>
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
                            {basePowerBoost > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        BOOST:
                                        <span className='font-bold text-lg  text-blue-300'> {startingPowBoost2}</span>
                                    </div>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX BOOST:
                                        <span className='font-bold text-lg text-green-300'> {maxPowBoost2}</span>
                                    </div>
                                </div>
                            )}
                            {baseAttackDecrease > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        ATTACK DECREASE:
                                        <span className='font-bold text-lg  text-blue-300'> {startingAttackDecrease2}</span>
                                    </div>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX DECREASE:
                                        <span className='font-bold text-lg text-green-300'> {maxAttackDecrease2}</span>
                                    </div>
                                </div>
                            )}
                            {basePoisonAmount > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        POISON AMOUNT:
                                        <span className='font-bold text-lg  text-blue-300'> {startingPoison2}</span>
                                    </div>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX POISON:
                                        <span className='font-bold text-lg text-green-300'> {maxPoison2}</span>
                                    </div>
                                </div>
                            )}
                            {baseHealthBoost > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        HP BOOST:
                                        <span className='font-bold text-lg  text-blue-300'> {startingHPBoost2}</span>
                                    </div>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX BOOST:
                                        <span className='font-bold text-lg text-green-300'> {maxHPBoost2}</span>
                                    </div>
                                </div>
                            )}
                            {baseHPLoss > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        HP LOSS:
                                        <span className='font-bold text-lg  text-blue-300'> {startingHPLoss2}</span>
                                    </div>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX LOSS:
                                        <span className='font-bold text-lg text-green-300'> {maxHPLoss2}</span>
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
                            {basePowerBoost > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        BOOST:
                                        <span className='font-bold text-lg  text-blue-300'> {startingPowBoost3}</span>
                                    </div>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX BOOST:
                                        <span className='font-bold text-lg text-green-300'> {maxPowBoost3}</span>
                                    </div>
                                </div>
                            )}
                            {baseAttackDecrease > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        ATTACK DECREASE:
                                        <span className='font-bold text-lg  text-blue-300'> {startingAttackDecrease3}</span>
                                    </div>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX DECREASE:
                                        <span className='font-bold text-lg text-green-300'> {maxAttackDecrease3}</span>
                                    </div>
                                </div>
                            )}
                            {basePoisonAmount > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        POISON AMOUNT:
                                        <span className='font-bold text-lg  text-blue-300'> {startingPoison3}</span>
                                    </div>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX POISON:
                                        <span className='font-bold text-lg text-green-300'> {maxPoison3}</span>
                                    </div>
                                </div>
                            )}
                            {baseHealthBoost > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        HP BOOST:
                                        <span className='font-bold text-lg  text-blue-300'> {startingHPBoost3}</span>
                                    </div>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX BOOST:
                                        <span className='font-bold text-lg text-green-300'> {maxHPBoost3}</span>
                                    </div>
                                </div>
                            )}
                            {baseHPLoss > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        HP LOSS:
                                        <span className='font-bold text-lg  text-blue-300'> {startingHPLoss3}</span>
                                    </div>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX LOSS:
                                        <span className='font-bold text-lg text-green-300'> {maxHPLoss3}</span>
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
                            {basePowerBoost > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        BOOST:
                                        <span className='font-bold text-lg  text-blue-300'> {startingPowBoost4}</span>
                                    </div>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX BOOST:
                                        <span className='font-bold text-lg text-green-300'> {maxPowBoost4}</span>
                                    </div>
                                </div>
                            )}
                            {baseAttackDecrease > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        ATTACK DECREASE:
                                        <span className='font-bold text-lg  text-blue-300'> {startingAttackDecrease4}</span>
                                    </div>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX DECREASE:
                                        <span className='font-bold text-lg text-green-300'> {maxAttackDecrease4}</span>
                                    </div>
                                </div>
                            )}
                            {basePoisonAmount > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        POISON AMOUNT:
                                        <span className='font-bold text-lg  text-blue-300'> {startingPoison4}</span>
                                    </div>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX POISON:
                                        <span className='font-bold text-lg text-green-300'> {maxPoison4}</span>
                                    </div>
                                </div>
                            )}
                            {baseHealthBoost > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        HP BOOST:
                                        <span className='font-bold text-lg  text-blue-300'> {startingHPBoost4}</span>
                                    </div>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX BOOST:
                                        <span className='font-bold text-lg text-green-300'> {maxHPBoost4}</span>
                                    </div>
                                </div>
                            )}
                            {baseHPLoss > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        HP LOSS:
                                        <span className='font-bold text-lg  text-blue-300'> {startingHPLoss4}</span>
                                    </div>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX LOSS:
                                        <span className='font-bold text-lg text-green-300'> {maxHPLoss4}</span>
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
                            {basePowerBoost > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        BOOST:
                                        <span className='font-bold text-lg  text-blue-300'> {startingPowBoost5}</span>
                                    </div>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX BOOST:
                                        <span className='font-bold text-lg text-green-300'> {maxPowBoost5}</span>
                                    </div>
                                </div>
                            )}
                            {baseAttackDecrease > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        ATTACK DECREASE:
                                        <span className='font-bold text-lg  text-blue-300'> {startingAttackDecrease5}</span>
                                    </div>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX DECREASE:
                                        <span className='font-bold text-lg text-green-300'> {maxAttackDecrease5}</span>
                                    </div>
                                </div>
                            )}
                            {basePoisonAmount > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        POISON AMOUNT:
                                        <span className='font-bold text-lg  text-blue-300'> {startingPoison5}</span>
                                    </div>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX POISON:
                                        <span className='font-bold text-lg text-green-300'> {maxPoison5}</span>
                                    </div>
                                </div>
                            )}
                            {baseHealthBoost > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        HP BOOST:
                                        <span className='font-bold text-lg  text-blue-300'> {startingHPBoost5}</span>
                                    </div>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX BOOST:
                                        <span className='font-bold text-lg text-green-300'> {maxHPBoost5}</span>
                                    </div>
                                </div>
                            )}
                            {baseHPLoss > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        HP LOSS:
                                        <span className='font-bold text-lg  text-blue-300'> {startingHPLoss5}</span>
                                    </div>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX LOSS:
                                        <span className='font-bold text-lg text-green-300'> {maxHPLoss5}</span>
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
                            {basePowerBoost > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        BOOST:
                                        <span className='font-bold text-lg  text-blue-300'> {startingPowBoost6}</span>
                                    </div>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX BOOST:
                                        <span className='font-bold text-lg text-green-300'> {maxPowBoost6}</span>
                                    </div>
                                </div>
                            )}
                            {baseAttackDecrease > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        ATTACK DECREASE:
                                        <span className='font-bold text-lg  text-blue-300'> {startingAttackDecrease6}</span>
                                    </div>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX DECREASE:
                                        <span className='font-bold text-lg text-green-300'> {maxAttackDecrease6}</span>
                                    </div>
                                </div>
                            )}
                            {basePoisonAmount > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        POISON AMOUNT:
                                        <span className='font-bold text-lg  text-blue-300'> {startingPoison6}</span>
                                    </div>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX POISON:
                                        <span className='font-bold text-lg text-green-300'> {maxPoison6}</span>
                                    </div>
                                </div>
                            )}
                            {baseHealthBoost > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        HP BOOST:
                                        <span className='font-bold text-lg  text-blue-300'> {startingHPBoost6}</span>
                                    </div>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX BOOST:
                                        <span className='font-bold text-lg text-green-300'> {maxHPBoost6}</span>
                                    </div>
                                </div>
                            )}
                            {baseHPLoss > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        HP LOSS:
                                        <span className='font-bold text-lg  text-blue-300'> {startingHPLoss6}</span>
                                    </div>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX LOSS:
                                        <span className='font-bold text-lg text-green-300'> {maxHPLoss6}</span>
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
                                {basePowerBoost > 0 && (
                                    <div className='text-gray-300 -my-0.5 text-xs mr-2'>
                                        MAX BOOST:
                                        <span className='font-bold text-xl text-red-300'> {startingPowBoost7}</span>
                                    </div>
                                )}
                                {baseAttackDecrease > 0 && (
                                    <div className='text-gray-300 -my-0.5 text-xs mr-2'>
                                        MAX ATTACK DECREASE:
                                        <span className='font-bold text-xl text-red-300'> {startingAttackDecrease7}</span>
                                    </div>
                                )}
                                {basePoisonAmount > 0 && (
                                    <div className='text-gray-300 -my-0.5 text-xs mr-2'>
                                        MAX POISON:
                                        <span className='font-bold text-xl text-red-300'> {startingPoison7}</span>
                                    </div>
                                )}
                                {baseHPGain > 0 && (
                                    <div className='text-gray-300 -my-0.5 text-xs mr-2'>
                                        MAX HP BOOST:
                                        <span className='font-bold text-xl text-red-300'> {startingHPBoost7}</span>
                                    </div>
                                )}
                                {baseHPLoss > 0 && (
                                    <div className='text-gray-300 -my-0.5 text-xs mr-2'>
                                        MAX HP LOSS:
                                        <span className='font-bold text-xl text-red-300'> {startingHPLoss7}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
            {cardType === "Spell" && (
                <>
                    <div className=' text-white w-full flex items-center justify-center text-sm border-b-2 border-t-2 border-[rgba(255,255,255,.4)] rounded-lg shadow-lg shadow-black '>
                        <div className='flex flex-row items-center gap-x-4 px-4'>
                            <p >
                                Level 1:
                            </p>
                            {basePower > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        DAMAGE:
                                        <span className='font-bold text-lg text-blue-300'> {maxPow1}</span>
                                    </div>
                                </div>
                            )}
                            {baseHeroPower > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        HERO DAMAGE:
                                        <span className='font-bold text-lg text-blue-300'> {maxHeroPower1}</span>
                                    </div>
                                </div>
                            )}
                            {baseHeal > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        HEAL POWER:
                                        <span className='font-bold text-lg text-blue-300'> {maxPowHeal1}</span>
                                    </div>
                                </div>
                            )}
                            {basePoisonAmount > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        POISON DAMAGE:
                                        <span className='font-bold text-lg text-blue-300'> {maxPoison1}</span>
                                    </div>
                                </div>
                            )}
                            {cardEvolve[0].Slots[0].property === "PowerRangeAbs" && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        POWER RANGE:
                                        <span className='font-bold text-lg text-blue-300'> {maxPowRange1}</span>
                                    </div>
                                </div>
                            )}
                            {cardEvolve[0].Slots[0].property === "PowerDurationAbs" && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        DURATION:
                                        <span className='font-bold text-lg text-blue-300'> {maxDuration1}</span>
                                    </div>
                                </div>
                            )}
                            {cardEvolve[0].Slots[0].property === "PowerSummonLevelAbs" && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        LEVEL DECREASE:
                                        <span className='font-bold text-lg text-blue-300'> 0 </span>
                                    </div>
                                </div>
                            )}
                            {cardEvolve[0].Slots[0].property === "PowerTargetAbs" && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        NUMBER OF TARGETS:
                                        <span className='font-bold text-lg text-blue-300'> 1 </span>
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
                            {basePower > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        DAMAGE:
                                        <span className='font-bold text-lg text-blue-300'> {maxPow2}</span>
                                    </div>
                                </div>
                            )}
                            {baseHeroPower > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        HERO DAMAGE:
                                        <span className='font-bold text-lg text-blue-300'> {maxHeroPower2}</span>
                                    </div>
                                </div>
                            )}
                            {baseHeal > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        HEAL POWER:
                                        <span className='font-bold text-lg text-blue-300'> {maxPowHeal2}</span>
                                    </div>
                                </div>
                            )}
                            {basePoisonAmount > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        POISON DAMAGE:
                                        <span className='font-bold text-lg text-blue-300'> {maxPoison2}</span>
                                    </div>
                                </div>
                            )}
                            {cardEvolve[0].Slots[0].property === "PowerRangeAbs" && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        POWER RANGE:
                                        <span className='font-bold text-lg text-blue-300'> {maxPowRange2}</span>
                                    </div>
                                </div>
                            )}
                            {cardEvolve[0].Slots[0].property === "PowerDurationAbs" && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        DURATION:
                                        <span className='font-bold text-lg text-blue-300'> {maxDuration2}</span>
                                    </div>
                                </div>
                            )}
                            {cardEvolve[0].Slots[0].property === "PowerSummonLevelAbs" && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        LEVEL DECREASE:
                                        <span className='font-bold text-lg text-blue-300'> 1 </span>
                                    </div>
                                </div>
                            )}
                            {cardEvolve[0].Slots[0].property === "PowerTargetAbs" && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        NUMBER OF TARGETS:
                                        <span className='font-bold text-lg text-blue-300'> 2 </span>
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
                            {basePower > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        DAMAGE:
                                        <span className='font-bold text-lg text-blue-300'> {maxPow3}</span>
                                    </div>
                                </div>
                            )}
                            {baseHeroPower > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        HERO DAMAGE:
                                        <span className='font-bold text-lg text-blue-300'> {maxHeroPower3}</span>
                                    </div>
                                </div>
                            )}
                            {baseHeal > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        HEAL POWER:
                                        <span className='font-bold text-lg text-blue-300'> {maxPowHeal3}</span>
                                    </div>
                                </div>
                            )}
                            {basePoisonAmount > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        POISON DAMAGE:
                                        <span className='font-bold text-lg text-blue-300'> {maxPoison3}</span>
                                    </div>
                                </div>
                            )}
                            {cardEvolve[0].Slots[0].property === "PowerRangeAbs" && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        POWER RANGE:
                                        <span className='font-bold text-lg text-blue-300'> {maxPowRange3}</span>
                                    </div>
                                </div>
                            )}
                            {cardEvolve[0].Slots[0].property === "PowerDurationAbs" && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        DURATION:
                                        <span className='font-bold text-lg text-blue-300'> {maxDuration3}</span>
                                    </div>
                                </div>
                            )}
                            {cardEvolve[0].Slots[0].property === "PowerSummonLevelAbs" && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        LEVEL DECREASE:
                                        <span className='font-bold text-lg text-blue-300'> 2 </span>
                                    </div>
                                </div>
                            )}
                            {cardEvolve[0].Slots[0].property === "PowerTargetAbs" && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        NUMBER OF TARGETS:
                                        <span className='font-bold text-lg text-blue-300'> 3 </span>
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
                            {basePower > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        DAMAGE:
                                        <span className='font-bold text-lg text-blue-300'> {maxPow4}</span>
                                    </div>
                                </div>
                            )}
                            {baseHeroPower > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        HERO DAMAGE:
                                        <span className='font-bold text-lg text-blue-300'> {maxHeroPower4}</span>
                                    </div>
                                </div>
                            )}
                            {baseHeal > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        HEAL POWER:
                                        <span className='font-bold text-lg text-blue-300'> {maxPowHeal4}</span>
                                    </div>
                                </div>
                            )}
                            {basePoisonAmount > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        POISON DAMAGE:
                                        <span className='font-bold text-lg text-blue-300'> {maxPoison4}</span>
                                    </div>
                                </div>
                            )}
                            {cardEvolve[0].Slots[0].property === "PowerRangeAbs" && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        POWER RANGE:
                                        <span className='font-bold text-lg text-blue-300'> {maxPowRange4}</span>
                                    </div>
                                </div>
                            )}
                            {cardEvolve[0].Slots[0].property === "PowerDurationAbs" && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        DURATION:
                                        <span className='font-bold text-lg text-blue-300'> {maxDuration4}</span>
                                    </div>
                                </div>
                            )}
                            {cardEvolve[0].Slots[0].property === "PowerSummonLevelAbs" && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        LEVEL DECREASE:
                                        <span className='font-bold text-lg text-blue-300'> 3 </span>
                                    </div>
                                </div>
                            )}
                            {cardEvolve[0].Slots[0].property === "PowerTargetAbs" && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        NUMBER OF TARGETS:
                                        <span className='font-bold text-lg text-blue-300'> 4 </span>
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
                            {basePower > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        DAMAGE:
                                        <span className='font-bold text-lg text-blue-300'> {maxPow5}</span>
                                    </div>
                                </div>
                            )}
                            {baseHeroPower > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        HERO DAMAGE:
                                        <span className='font-bold text-lg text-blue-300'> {maxHeroPower5}</span>
                                    </div>
                                </div>
                            )}
                            {baseHeal > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        HEAL POWER:
                                        <span className='font-bold text-lg text-blue-300'> {maxPowHeal5}</span>
                                    </div>
                                </div>
                            )}
                            {basePoisonAmount > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        POISON DAMAGE:
                                        <span className='font-bold text-lg text-blue-300'> {maxPoison5}</span>
                                    </div>
                                </div>
                            )}
                            {cardEvolve[0].Slots[0].property === "PowerRangeAbs" && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        POWER RANGE:
                                        <span className='font-bold text-lg text-blue-300'> {maxPowRange5}</span>
                                    </div>
                                </div>
                            )}
                            {cardEvolve[0].Slots[0].property === "PowerDurationAbs" && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        DURATION:
                                        <span className='font-bold text-lg text-blue-300'> {maxDuration5}</span>
                                    </div>
                                </div>
                            )}
                            {cardEvolve[0].Slots[0].property === "PowerSummonLevelAbs" && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        LEVEL DECREASE:
                                        <span className='font-bold text-lg text-blue-300'> 4 </span>
                                    </div>
                                </div>
                            )}
                            {cardEvolve[0].Slots[0].property === "PowerTargetAbs" && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        NUMBER OF TARGETS:
                                        <span className='font-bold text-lg text-blue-300'> 5 </span>
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
                            {basePower > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        DAMAGE:
                                        <span className='font-bold text-lg text-blue-300'> {maxPow6}</span>
                                    </div>
                                </div>
                            )}
                            {baseHeroPower > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        HERO DAMAGE:
                                        <span className='font-bold text-lg text-blue-300'> {maxHeroPower6}</span>
                                    </div>
                                </div>
                            )}
                            {baseHeal > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        HEAL POWER:
                                        <span className='font-bold text-lg text-blue-300'> {maxPowHeal6}</span>
                                    </div>
                                </div>
                            )}
                            {basePoisonAmount > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        POISON DAMAGE:
                                        <span className='font-bold text-lg text-blue-300'> {maxPoison6}</span>
                                    </div>
                                </div>
                            )}
                            {cardEvolve[0].Slots[0].property === "PowerRangeAbs" && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        POWER RANGE:
                                        <span className='font-bold text-lg text-blue-300'> {maxPowRange6}</span>
                                    </div>
                                </div>
                            )}
                            {cardEvolve[0].Slots[0].property === "PowerDurationAbs" && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        DURATION:
                                        <span className='font-bold text-lg text-blue-300'> {maxDuration6}</span>
                                    </div>
                                </div>
                            )}
                            {cardEvolve[0].Slots[0].property === "PowerSummonLevelAbs" && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        LEVEL DECREASE:
                                        <span className='font-bold text-lg text-blue-300'> 5 </span>
                                    </div>
                                </div>
                            )}
                            {cardEvolve[0].Slots[0].property === "PowerTargetAbs" && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        NUMBER OF TARGETS:
                                        <span className='font-bold text-lg text-blue-300'> 6 </span>
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
                            {basePower > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX DAMAGE:
                                        <span className='font-bold text-lg text-red-300'> {maxPow7}</span>
                                    </div>
                                </div>
                            )}
                            {baseHeroPower > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX HERO DAMAGE:
                                        <span className='font-bold text-lg text-red-300'> {maxHeroPower7}</span>
                                    </div>
                                </div>
                            )}
                            {baseHeal > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        HEAL POWER:
                                        <span className='font-bold text-lg text-red-300'> {maxPowHeal7}</span>
                                    </div>
                                </div>
                            )}
                            {basePoisonAmount > 0 && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        POISON DAMAGE:
                                        <span className='font-bold text-lg text-red-300'> {maxPoison7}</span>
                                    </div>
                                </div>
                            )}
                            {cardEvolve[0].Slots[0].property === "PowerRangeAbs" && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        MAX POWER RANGE:
                                        <span className='font-bold text-lg text-red-300'> {maxPowRange7}</span>
                                    </div>
                                </div>
                            )}
                            {cardEvolve[0].Slots[0].property === "PowerDurationAbs" && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        DURATION:
                                        <span className='font-bold text-lg text-red-300'> {maxDuration7}</span>
                                    </div>
                                </div>
                            )}
                            {cardEvolve[0].Slots[0].property === "PowerSummonLevelAbs" && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        LEVEL DECREASE:
                                        <span className='font-bold text-lg text-red-300'> 6 </span>
                                    </div>
                                </div>
                            )}
                            {cardEvolve[0].Slots[0].property === "PowerTargetAbs" && (
                                <div className='flex flex-col items-end'>
                                    <div className='-my-0.5 text-xs mr-2 text-gray-300'>
                                        NUMBER OF TARGETS:
                                        <span className='font-bold text-lg text-red-300'> 7 </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}

        </div>
    )
}

export default LevelComponent