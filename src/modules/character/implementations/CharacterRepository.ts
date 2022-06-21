import { getRepository, Repository } from "typeorm";

import { ICreateCharacterDTO } from "../dtos/ICreateCharacterDTO";
import { Character } from "../entities/Character";
import { ICharacterRepository } from "../repositories/ICharacterRepository";

class CharacterRepository implements ICharacterRepository {
    private repository: Repository<Character>;

    constructor() {
        this.repository = getRepository(Character);
    }

    async create({
        id_user,
        name,
        class_group,
        sub_class_group,
        max_life_points,
        life_points,
        max_mana_points,
        mana_points,
        max_especial_points,
        especial_points,
    }: ICreateCharacterDTO): Promise<void> {
        const character_id = this.repository.create({
            id_user,
            name,
            class_group,
            sub_class_group,
            max_life_points,
            life_points,
            max_mana_points,
            mana_points,
            max_especial_points,
            especial_points,
        });

        await this.repository.insert(character_id);
    }
    async save({
        id_character,
        id_user,
        name,
        class_group,
        sub_class_group,
        max_life_points,
        life_points,
        max_mana_points,
        mana_points,
        max_especial_points,
        especial_points,
    }: ICreateCharacterDTO): Promise<void> {
        await this.repository.update(
            {
                id_character,
            },
            {
                id_user,
                name,
                class_group,
                sub_class_group,
                max_life_points,
                life_points,
                max_mana_points,
                mana_points,
                max_especial_points,
                especial_points,
            }
        );
    }

    async findByUserId(idUser: string): Promise<Character> {
        const character = await this.repository.findOne({ id_user: idUser });
        return character;
    }

    async findById(id: string): Promise<Character> {
        const character = await this.repository.findOne(id);
        return character;
    }

    async findAll(): Promise<Character[]> {
        const character = await this.repository.find();
        return character;
    }
}

export { CharacterRepository };
