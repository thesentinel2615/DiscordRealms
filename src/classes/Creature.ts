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
        public type: CreatureType = CreatureType.Animal,
        public statistics: StatisticType[] = [],
        public skills: SkillType[] = [],
        public level: number = 1,
        public avatar: string = '',
        public description: string = '',
        public background: string = '',
        public name: string = '',
        public isTemplate: boolean = false,
    ) {}

    createCreatureFromTemplate() {
        return new Creature(
            Date.now().toString(),
            this.health,
            this.type,
            this.statistics,
            this.skills,
            this.level,
            this.avatar,
            this.description,
            this.background,
            this.name,
            false,
        )
    }
}

export class Animal extends Creature {
    constructor(
        _id?: string,
        health?: number,
        statistics?: StatisticType[],
        skills?: SkillType[],
        level?: number,
        avatar?: string,
        description?: string,
        background?: string,
        name?: string
    ) {
        super(_id, health, CreatureType.Animal, statistics, skills, level, avatar, description, background, name);
    }
  
    // Animal-specific methods here
}
  
export class NPC extends Creature {
    constructor(
        _id?: string,
        health?: number,
        statistics?: StatisticType[],
        skills?: SkillType[],
        level?: number,
        avatar?: string,
        description?: string,
        background?: string,
        name?: string
    ) {
        super(_id, health, CreatureType.NPC, statistics, skills, level, avatar, description, background, name);
    }
  
    // NPC-specific methods here
}
  
export class Automata extends Creature {
    constructor(
        _id?: string,
        health?: number,
        statistics?: StatisticType[],
        skills?: SkillType[],
        level?: number,
        avatar?: string,
        description?: string,
        background?: string,
        name?: string
    ) {
        super(_id, health, CreatureType.Automata, statistics, skills, level, avatar, description, background, name);
    }
  
    // Automata-specific methods here
}
  
export class Player extends Creature {
    constructor(
        _id?: string,
        health?: number,
        statistics?: StatisticType[],
        skills?: SkillType[],
        level?: number,
        avatar?: string,
        description?: string,
        background?: string,
        name?: string
    ) {
        super(_id, health, CreatureType.Player, statistics, skills, level, avatar, description, background, name);
    }
}
  
export class Monster extends Creature {
    constructor(
        _id?: string,
        health?: number,
        statistics?: StatisticType[],
        skills?: SkillType[],
        level?: number,
        avatar?: string,
        description?: string,
        background?: string,
        name?: string
    ) {
        super(_id, health, CreatureType.Monster, statistics, skills, level, avatar, description, background, name);
    }
  
}