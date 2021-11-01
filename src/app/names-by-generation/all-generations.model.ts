interface generationNameUrl {
    name: string,
    url: string
}

export class AllGenerations {
    constructor(
        public count: number,
        public next: string,
        public previous: string,
        public results: generationNameUrl[]) { }
}