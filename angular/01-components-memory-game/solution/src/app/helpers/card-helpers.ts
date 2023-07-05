import { Card } from "../models/card.model";

const IMAGES_NUMBER = 21;

let idCounter = 12345;

export function generateId(): string {
    return `id${++idCounter}`;
}

export function shuffleArray<T>(source: T[]): T[] {
    const res = [...source];
    for (let i = res.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [res[i], res[j]] = [res[j], res[i]];
    }
    return res;  
}

export function generateShuffledCards(): Card[] {
    const cards: Card[] = [];

    for (let index = 1; index <= IMAGES_NUMBER; index++) {
        for (let i = 0; i < 2; i++) {
            cards.push({
                id: generateId(), 
                image: index.toString()
            })            
        }
    }
    
    return shuffleArray(cards);
}

export function toMatrix<T>(arr: T[], width: number): T[][] {
    var res: T[][] = [];

    for (let i = 0; i < arr.length; i = i + width) {
        res.push(arr.slice(i, i + width));        
    }

    return res;
}

