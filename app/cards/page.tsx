import React from 'react'

import { promises as fs } from 'fs';

import BaseCard from '../../components/BaseCard';
import HeroTabs from '@/components/HeroTabs';

const page = async () => {

    //const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8')
    const file2 = await fs.readFile(process.cwd() + '/app/cards.json', 'utf8')

    const data = JSON.parse(file2);
    //console.log(data[3]);
    const neutralCards = (data: any) => {
        let neuArray: Array<object> = [];
        data.map((item: any) => {
            if (item.Theme === "Gen") {
                neuArray.push(item)
            }
        })
        return neuArray
    }
    const adventureCards = (data: any) => {
        let advArray: Array<object> = [];
        data.map((item: any) => {
            if (item.Theme === "Adv") {
                advArray.push(item)
            }
        })
        return advArray
    }
    const scifiCards = (data: any) => {
        let sciArray: Array<object> = [];
        data.map((item: any) => {
            if (item.Theme === "Sci") {
                sciArray.push(item)
            }
        })
        return sciArray
    }
    const mysticalCards = (data: any) => {
        let mysArray: Array<object> = [];
        data.map((item: any) => {
            if (item.Theme === "Mys") {
                mysArray.push(item)
            }
        })
        return mysArray
    }
    const fantasyCards = (data: any) => {
        let fanArray: Array<object> = [];
        data.map((item: any) => {
            if (item.Theme === "Fan") {
                fanArray.push(item)
            }
        })
        return fanArray
    }
    const superheroCards = (data: any) => {
        let supArray: Array<object> = [];
        data.map((item: any) => {
            if (item.Theme === "Sup") {
                supArray.push(item)
            }
        })
        return supArray
    }
    //neutralCards(data)
    //adventureCards(data)
    //scifiCards(data)
    //mysticalCards(data)
    //fantasyCards(data)
    //superheroCards(data)
    return (
        <div className=" bg-black flex flex-col items-center justify-center min-h-screen h-[5000px] p-8 pb-20 ">

            <HeroTabs
                neutralCards={neutralCards(data)}
                adventureCards={adventureCards(data)}
                scifiCards={scifiCards(data)}
                mysticalCards={mysticalCards(data)}
                fantasyCards={fantasyCards(data)}
                superheroCards={superheroCards(data)}

            />

        </div>
    )
}


export default page