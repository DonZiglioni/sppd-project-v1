import React from 'react'
import LevelComponent from '@/components/LevelComponent'
import { promises as fs } from 'fs';

const page = async () => {
    const file2 = await fs.readFile(process.cwd() + '/app/cards.json', 'utf8')
    const data = JSON.parse(file2);
    const stats = data[0].TechTree2.Slots
    const evolve = data[0].TechTree2.Evolve
    const baseDmg = data[0].Damage
    const baseHealth = data[0].Health
    const basePower = data[0].PowerDamage
    const baseHeal = data[0].PowerHeal

    return (
        <div>
            <LevelComponent
                cardStats={stats}
                cardEvolve={evolve}
                baseDmg={Number(baseDmg)}
                baseHealth={Number(baseHealth)}
                baseHeal={Number(baseHeal)}
                basePower={Number(basePower)}
            />
        </div>

    )
}

export default page