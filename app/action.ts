"use server"

import { promises as fs } from 'fs';

const sortCardsByTheme = async () => {

    const file = await fs.readFile(process.cwd() + '/app/cards.json', 'utf8')

    const data = JSON.parse(file);

    console.log(data[0]);

    return 2
}

export default sortCardsByTheme