import { getRepository, Repository } from "typeorm";

import { ICreateCharacterDTO } from "../dtos/ICreateCharacterDTO";
import { Character } from "../entites/Character";
import { ICharacterRepository } from "../repositories/ICharacterRepository";

class CharacterRepository implements ICharacterRepository {
    private repository: Repository<Character>;

    constructor() {
        this.repository = getRepository(Character);
    }

    async create({
        id_user,
        name,
        class: classe,
        sub_class,
    }: ICreateCharacterDTO): Promise<void> {
        const character = this.repository.create({
            id_user,
            name,
            class: classe,
            sub_class,
        });

        await this.repository.save(character);
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
