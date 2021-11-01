interface pokemonSpecies {
    name: string,
    url: string
}

export class OneGeneration {
    constructor(
        public abilities: Array<object>,
        public id: number,
        public main_region: Array<object>,
        public moves: Array<object>,
        public name: string,
        public names: Array<object>,
        public pokemon_species: pokemonSpecies[],
        public types: Array<object>,
        public version_groups: Array<object>,
    ) { }
}