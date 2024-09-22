import React from 'react'
import Image from 'next/image';


interface Props {
    cardTheme: string;
    cardType: string;
    cardImage: string;
    cardRarity: number;
    cardCost: number;
    cardName: string;
}

const BaseCard = ({ cardTheme, cardType, cardImage, cardRarity, cardCost, cardName }: Props) => {
    let theme = '';
    let type = '';
    let top = '';

    const commonThemeFrame = (cardTheme: string) => {
        switch (cardTheme) {
            case "Gen":
                return '/images/common/general.png'
            case "Adv":
                return '/images/common/adventure.png'
            case "Sci":
                return '/images/common/scifi.png'
            case "Fan":
                return '/images/common/fantasy.png'
            case "Mys":
                return '/images/common/mystical.png'
            case "Sup":
                return '/images/common/superhero.png'
            default:
                return "theme not found"
        }
    }

    const specialThemeFrame = (cardTheme: string) => {
        switch (cardTheme) {
            case "Gen":
                return '/images/special/general.png'
            case "Adv":
                return '/images/special/adventure.png'
            case "Sci":
                return '/images/special/scifi.png'
            case "Fan":
                return '/images/special/fantasy.png'
            case "Mys":
                return '/images/special/mystical.png'
            case "Sup":
                return '/images/special/superhero.png'
            default:
                return "theme not found"
        }
    }

    const commonThemeType = (cardType: string, cardTheme: string) => {
        switch (cardTheme) {
            case "Gen":
                switch (cardType) {
                    case "Ranged":
                        return '/images/type-icons/ranged/common/general.png'
                    case "Assassin":
                        return '/images/type-icons/assassin/common/general.png'
                    case "Melee":
                        return '/images/type-icons/melee/common/general.png'
                    case "Spell":
                        return '/images/type-icons/spell/common/general.png'
                    case "Tank":
                        return '/images/type-icons/tank/common/general.png'
                    case "Totem":
                        return '/images/type-icons/totem/common/general.png'
                    case "Trap":
                        return '/images/type-icons/trap/common/general.png'
                    default:
                        break;
                }
            case "Adv":
                switch (cardType) {
                    case "Ranged":
                        return '/images/type-icons/ranged/common/adventure.png'
                    case "Assassin":
                        return '/images/type-icons/assassin/common/adventure.png'
                    case "Melee":
                        return '/images/type-icons/melee/common/adventure.png'
                    case "Spell":
                        return '/images/type-icons/spell/common/adventure.png'
                    case "Tank":
                        return '/images/type-icons/tank/common/adventure.png'
                    case "Totem":
                        return '/images/type-icons/totem/common/adventure.png'
                    case "Trap":
                        return '/images/type-icons/trap/common/adventure.png'
                    default:
                        break;
                }
            case "Sci":
                switch (cardType) {
                    case "Ranged":
                        return '/images/type-icons/ranged/common/scifi.png'
                    case "Assassin":
                        return '/images/type-icons/assassin/common/scifi.png'
                    case "Melee":
                        return '/images/type-icons/melee/common/scifi.png'
                    case "Spell":
                        return '/images/type-icons/spell/common/scifi.png'
                    case "Tank":
                        return '/images/type-icons/tank/common/scifi.png'
                    case "Totem":
                        return '/images/type-icons/totem/common/scifi.png'
                    case "Trap":
                        return '/images/type-icons/trap/common/scifi.png'
                    default:
                        break;
                }
            case "Fan":
                switch (cardType) {
                    case "Ranged":
                        return '/images/type-icons/ranged/common/fantasy.png'
                    case "Assassin":
                        return '/images/type-icons/assassin/common/fantasy.png'
                    case "Melee":
                        return '/images/type-icons/melee/common/fantasy.png'
                    case "Spell":
                        return '/images/type-icons/spell/common/fantasy.png'
                    case "Tank":
                        return '/images/type-icons/tank/common/fantasy.png'
                    case "Totem":
                        return '/images/type-icons/totem/common/fantasy.png'
                    case "Trap":
                        return '/images/type-icons/trap/common/fantasy.png'
                    default:
                        break;
                }
            case "Mys":
                switch (cardType) {
                    case "Ranged":
                        return '/images/type-icons/ranged/common/mystical.png'
                    case "Assassin":
                        return '/images/type-icons/assassin/common/mystical.png'
                    case "Melee":
                        return '/images/type-icons/melee/common/mystical.png'
                    case "Spell":
                        return '/images/type-icons/spell/common/mystical.png'
                    case "Tank":
                        return '/images/type-icons/tank/common/mystical.png'
                    case "Totem":
                        return '/images/type-icons/totem/common/mystical.png'
                    case "Trap":
                        return '/images/type-icons/trap/common/mystical.png'
                    default:
                        break;
                }
            case "Sup":
                switch (cardType) {
                    case "Ranged":
                        return '/images/type-icons/ranged/common/superhero.png'
                    case "Assassin":
                        return '/images/type-icons/assassin/common/superhero.png'
                    case "Melee":
                        return '/images/type-icons/melee/common/superhero.png'
                    case "Spell":
                        return '/images/type-icons/spell/common/superhero.png'
                    case "Tank":
                        return '/images/type-icons/tank/common/superhero.png'
                    case "Totem":
                        return '/images/type-icons/totem/common/superhero.png'
                    case "Trap":
                        return '/images/type-icons/trap/common/superhero.png'
                    default:
                        break;
                }
            default:
                return "theme not found"
        }
    }

    const specialThemeType = (cardType: string, cardTheme: string, rank: string) => {
        switch (cardTheme) {
            case "Gen":
                switch (cardType) {
                    case "Ranged":
                        return `/images/type-icons/ranged/special/${rank}.png`
                    case "Assassin":
                        return `/images/type-icons/assassin/special/${rank}.png`
                    case "Melee":
                        return `/images/type-icons/melee/special/${rank}.png`
                    case "Spell":
                        return `/images/type-icons/spell/special/${rank}.png`
                    case "Tank":
                        return `/images/type-icons/tank/special/${rank}.png`
                    case "Totem":
                        return `/images/type-icons/totem/special/${rank}.png`
                    case "Trap":
                        return `/images/type-icons/trap/special/${rank}.png`
                    default:
                        break;
                }
            case "Adv":
                switch (cardType) {
                    case "Ranged":
                        return `/images/type-icons/ranged/special/${rank}.png`
                    case "Assassin":
                        return `/images/type-icons/assassin/special/${rank}.png`
                    case "Melee":
                        return `/images/type-icons/melee/special/${rank}.png`
                    case "Spell":
                        return `/images/type-icons/spell/special/${rank}.png`
                    case "Tank":
                        return `/images/type-icons/tank/special/${rank}.png`
                    case "Totem":
                        return `/images/type-icons/totem/special/${rank}.png`
                    case "Trap":
                        return `/images/type-icons/trap/special/${rank}.png`
                    default:
                        break;
                }
            case "Sci":
                switch (cardType) {
                    case "Ranged":
                        return `/images/type-icons/ranged/special/${rank}.png`
                    case "Assassin":
                        return `/images/type-icons/assassin/special/${rank}.png`
                    case "Melee":
                        return `/images/type-icons/melee/special/${rank}.png`
                    case "Spell":
                        return `/images/type-icons/spell/special/${rank}.png`
                    case "Tank":
                        return `/images/type-icons/tank/special/${rank}.png`
                    case "Totem":
                        return `/images/type-icons/totem/special/${rank}.png`
                    case "Trap":
                        return `/images/type-icons/trap/special/${rank}.png`
                    default:
                        break;
                }
            case "Fan":
                switch (cardType) {
                    case "Ranged":
                        return `/images/type-icons/ranged/special/${rank}.png`
                    case "Assassin":
                        return `/images/type-icons/assassin/special/${rank}.png`
                    case "Melee":
                        return `/images/type-icons/melee/special/${rank}.png`
                    case "Spell":
                        return `/images/type-icons/spell/special/${rank}.png`
                    case "Tank":
                        return `/images/type-icons/tank/special/${rank}.png`
                    case "Totem":
                        return `/images/type-icons/totem/special/${rank}.png`
                    case "Trap":
                        return `/images/type-icons/trap/special/${rank}.png`
                    default:
                        break;
                }
            case "Mys":
                switch (cardType) {
                    case "Ranged":
                        return `/images/type-icons/ranged/special/${rank}.png`
                    case "Assassin":
                        return `/images/type-icons/assassin/special/${rank}.png`
                    case "Melee":
                        return `/images/type-icons/melee/special/${rank}.png`
                    case "Spell":
                        return `/images/type-icons/spell/special/${rank}.png`
                    case "Tank":
                        return `/images/type-icons/tank/special/${rank}.png`
                    case "Totem":
                        return `/images/type-icons/totem/special/${rank}.png`
                    case "Trap":
                        return `/images/type-icons/trap/special/${rank}.png`
                    default:
                        break;
                }
            case "Sup":
                switch (cardType) {
                    case "Ranged":
                        return `/images/type-icons/ranged/special/${rank}.png`
                    case "Assassin":
                        return `/images/type-icons/assassin/special/${rank}.png`
                    case "Melee":
                        return `/images/type-icons/melee/special/${rank}.png`
                    case "Spell":
                        return `/images/type-icons/spell/special/${rank}.png`
                    case "Tank":
                        return `/images/type-icons/tank/special/${rank}.png`
                    case "Totem":
                        return `/images/type-icons/totem/special/${rank}.png`
                    case "Trap":
                        return `/images/type-icons/trap/special/${rank}.png`
                    default:
                        break;
                }
            default:
                return "Cannot find TYPE"
        }
    }


    if (cardRarity === 0) {
        theme = commonThemeFrame(cardTheme)
        type = commonThemeType(cardType, cardTheme)
    } else {
        theme = specialThemeFrame(cardTheme)
        // HOW SPECIAL ???
        switch (cardRarity) {
            case 1:
                top = '/images/frame-tops/rare.png'
                type = specialThemeType(cardType, cardTheme, "rare")
                break;
            case 2:
                top = '/images/frame-tops/epic.png'
                type = specialThemeType(cardType, cardTheme, "epic")
                break;
            case 3:
                top = '/images/frame-tops/legendary.png'
                type = specialThemeType(cardType, cardTheme, "legendary")
                break;
            default:
                break;
        }

    }

    return (
        <div className=' relative rounded-lg h-[310px] w-[210px]'>

            {/* Frame Top */}
            {top && (
                <Image alt={`${cardImage}`} src={top} height={300} width={300} className='absolute z-20 scale-110 -top-3 -left-1' />
            )}
            {/* Type */}
            <Image alt={`${cardImage}`} src={type} height={75} width={75} className='absolute z-20 scale-100 -top-10 -left-4 ' />
            {/* Name */}
            <div className=' absolute top-1 flex items-center justify-center w-[210px] h-[37px]  z-30'>
                <h1 className='absolute z-20 text-xs text-white opacity-90 text-center'>{cardName}</h1>
            </div>
            {/* Frame */}
            <Image alt={`${cardImage}`} src={theme} height={300} width={380} className='absolute z-10 scale-100 ' />
            {/* Image */}
            <Image alt={`${cardImage}`} src={`/images/${cardImage}.webp`} height={300} width={380} unoptimized className='absolute scale-95' />
            {/* Mana */}
            <Image alt={`${cardImage}`} src={`/images/display.png`} height={300} width={380} className='absolute scale-100 ' />
            {/* Mana Cost*/}
            <h1 className='absolute scale-105 font-light text-[27px] text-white top-7 left-5 font-mono '>{cardCost}</h1>
        </div>
    )
}

export default BaseCard