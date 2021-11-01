interface statsNameUrl {
    name: string;
    url: string
}

interface stats {
    base_stat: number,
    efforts: number,
    stat: statsNameUrl,
}

export class OneSpecie {
    constructor(
        public abilities: Array<object>,
        public base_experience: number,
        public forms: Array<object>,
        public game_indices: Array<object>,
        public height: number,
        public held_items: Array<object>,
        public id: number,
        public is_default: boolean,
        public location_area_encounters: string,
        public moves: Array<object>,
        public name: string,
        public order: number,
        public species: Array<object>,
        public sprites: Array<object>,
        public stats: stats[],
        public types: Array<object>,
        public weight: number
    ) { }
}