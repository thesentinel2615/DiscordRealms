export enum ItemType {
    Generic,
    Weapon,
    Armor,
    Consumable,
    Quest,
    Key,
    Spell,
    Enchantment,
    Gem,
    Gold,
    Junk,
}

export enum EnchantmentType {
    Fire,
    Ice,
    Poison,
    Stun,
    Knockback,
    Bleed,
}

export enum DamageType {
    Slashing,
    Piercing,
    Bludgeoning,
    Fire,
    Ice,
    Poison,
    Stun,
    Knockback,
    Bleed,
}

export enum WeaponType {
    Melee_Sword,
    Melee_Axe,
    Melee_Mace,
    Ranged_Bow,
    Ranged_Crossbow,
    Ranged_Sling,
    Martial_Dagger,
    Martial_Staff,
    Magical_Wand,
    Magical_Orb,
}

export enum ArmorType {
    Light_Leather,
    Light_Padded,
    Medium_Chainmail,
    Medium_Scale,
    Heavy_Plate,
    Heavy_Splint,
    Shield_Small,
    Shield_Large,
    Shield_Tower,
}

export enum ConsumableType {
    Food,
    Drink,
    Potion,
    Scroll,
    Bandage,
}

export enum ConsumableEffect {
    Heal,
    Damage,
    Buff,
    Debuff,
    Teleport,
    Summon,
    Dispel,
    Resurrect,
    Revive,
    Transform,
}

export enum Rarity {
    Common,
    Uncommon,
    Rare,
    Epic,
    Legendary,
}

export class Enchantment {
    constructor(
        public type: EnchantmentType,
        public level: number,
        public description: string,
        public damageTypes: DamageType[],
        public damageAmount: number
    ) {}
}
  
export class Item {
    constructor(
        public _id: string = Date.now().toString(),
        public name: string,
        public value: number,
        public description: string,
        public type: ItemType = ItemType.Generic,
        public enchantments: Enchantment[] = [],
        public requiredSkills: string[] = [],
        public rarity: Rarity = Rarity.Common
    ) {}
}  

export class Weapon extends Item {
    constructor(
        _id: string,
        name: string,
        value: number,
        description: string,
        public attackPower: number,
        public damageTypes: DamageType[],
        public weaponType: WeaponType,
        enchantments: Enchantment[] = [],
        requiredSkills: string[] = []
    ) {
        super(_id, name, value, description, ItemType.Weapon, enchantments, requiredSkills, Rarity.Common);
    }
}
  
export class Armor extends Item {
    constructor(
        _id: string,
        name: string,
        value: number,
        description: string,
        public defensePower: number,
        public armorType: ArmorType,
        enchantments: Enchantment[] = [],
        requiredSkills: string[] = []
    ) {
        super(_id, name, value, description, ItemType.Armor, enchantments, requiredSkills, Rarity.Common);
    }
}

export class Consumable extends Item {
    constructor(
        _id: string,
        name: string,
        value: number,
        description: string,
        public consumableType: ConsumableType,
        public consumableEffects: ConsumableEffect[],
        public consumableAmount: number,
        enchantments: Enchantment[] = [],
        requiredSkills: string[] = []
    ) {
        super(_id, name, value, description, ItemType.Consumable, enchantments, requiredSkills, Rarity.Common);
    }
}