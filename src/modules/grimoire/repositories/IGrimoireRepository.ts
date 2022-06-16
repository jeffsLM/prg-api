import { ICreateGrimoireDTO } from "../dtos/ICreateGrimoireDTO";
import { Grimoire } from "../entities/Grimore";

interface IGrimoireRepository {
    create(data: ICreateGrimoireDTO): Promise<void>;
    save(data: ICreateGrimoireDTO): Promise<void>;
    findByCharacter(id_character: string): Promise<Grimoire[]>;
    findById(id: string): Promise<Grimoire>;
    findByCharacterAndSkill(
        id_character: string,
        skill: string
    ): Promise<Grimoire>;
    findSkillsByCharacterAndType(
        id_character: string,
        type: string
    ): Promise<Grimoire[]>;
}

export { IGrimoireRepository };
