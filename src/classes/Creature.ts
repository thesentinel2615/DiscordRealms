export enum CreatureType {
    Animal,
    NPC,
    Automata,
    Player,
    Monster
}

export type StatisticType = {
    name: string,
    value: number,
    description: string,
    avatar?: string,
}

export type SkillType = {
    name: string,
    hasSkill: boolean,
    description: string,
    avatar?: string,
}

export class Creature {
    constructor(
        public _id: string = Date.now().toString(),
        public health: number = 100,
        public type: CreatureType,
        public statistics: StatisticType[],
        public skills: SkillType[],
        public level: number = 1,
        public avatar: string = '',
        public description: string = '',
    ) {}
}
    