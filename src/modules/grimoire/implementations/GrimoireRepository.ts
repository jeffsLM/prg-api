import { getRepository, Repository } from "typeorm";

import { ICreateGrimoireDTO } from "../dtos/ICreateGrimoireDTO";
import { Grimoire } from "../entities/Grimore";
import { IGrimoireRepository } from "../repositories/IGrimoireRepository";

class GrimoireRepository implements IGrimoireRepository {
    private repository: Repository<Grimoire>;

    constructor() {
        this.repository = getRepository(Grimoire);
    }

    async create({
        id_character,
        skill,
        type,
        class_group,
        points,
        rules,
        icon,
    }: ICreateGrimoireDTO): Promise<void> {
        const data = {
            id_character,
            skill,
            class_group,
            type,
            points,
            rules,
            icon,
        };

        console.log(data);
        const grimoire_id = this.repository.create({
            id_character,
            skill,
            class_group,
            type,
            points,
            rules,
            icon,
        });

        await this.repository.insert(grimoire_id);
    }
    async save({
        id_grimoire,
        id_character,
        skill,
        class_group,
        points,
        type,
        rules,
        icon,
    }: ICreateGrimoireDTO): Promise<void> {
        await this.repository.update(
            {
                id_grimoire,
            },
            {
                id_character,
                skill,
                class_group,
                type,
                points,
                rules,
                icon,
            }
        );
    }

    async findByCharacter(id_character: string): Promise<Grimoire[]> {
        const grimoireCharacter = await this.repository.find({ id_character });
        return grimoireCharacter;
    }

    async findByCharacterAndSkill(
        id_character: string,
        skill: string
    ): Promise<Grimoire> {
        const skillCharacter = await this.repository.findOne({
            where: { id_character, skill },
        });
        return skillCharacter;
    }

    async findById(id: string): Promise<Grimoire> {
        const grimoire = await this.repository.findOne(id);
        return grimoire;
    }

    async findSkillsByCharacterAndType(
        id_character: string,
        type: string
    ): Promise<Grimoire[]> {
        const skillCharacter = await this.repository.find({
            where: { id_character, type },
        });
        return skillCharacter;
    }
}

export { GrimoireRepository };
