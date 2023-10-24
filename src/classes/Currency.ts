export class Currency {
    constructor(
        public _id: string = Date.now().toString(),
        public name: string,
        public description: string,
        public avatar: string,
        public denominations: Denomination[],
    ){}
}

export class Denomination {
    constructor(
        public _id: string = Date.now().toString(),
        public name: string,
        public description: string,
        public avatar: string,
        public value: number,
    ){}
}