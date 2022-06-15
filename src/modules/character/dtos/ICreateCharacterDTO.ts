interface ICreateCharacterDTO {
    id_user: string;
    id_character?: string;
    name: string;
    class_group: string;
    sub_class_group: string;
    max_life_points: number;
    life_points: number;
    max_mana_points: number;
    mana_points: number;
    max_especial_points: number;
    especial_points: number;
}

export { ICreateCharacterDTO };
