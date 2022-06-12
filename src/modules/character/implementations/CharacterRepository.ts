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
    }: ICreateCharacterDTO): Promise<void> {
        const character_id = this.repository.create({
            id_user,
            name,
            class_group,
            sub_class_group,
        });

        await this.repository.save(character_id);
    }

    async findByName(name: string): Promise<Character> {
        const character = await this.repository.findOne({ name });
        return character;
    }

    async findById(id: string): Promise<Character> {
        const character = await this.repository.findOne(id);
        return character;
    }
}

export { CharacterRepository };
