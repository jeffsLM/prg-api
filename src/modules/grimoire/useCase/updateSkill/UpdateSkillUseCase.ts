import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../erros/appError";
import { IGrimoireRepository } from "../../repositories/IGrimoireRepository";

interface IRequest {
    id_character: string;
    skillOld: string;
    skill: string;
    class_group: string;
    type: string;
    points: string;
    rules: string;
    icon: string;
}

@injectable()
class UpdateSkillUseCase {
    constructor(
        @inject("GrimoreRepository")
        private grimoireRepository: IGrimoireRepository
    ) {}

    async execute({
        id_character,
        skill,
        skillOld,
        class_group,
        type,
        points,
        rules,
        icon,
    }: IRequest): Promise<void> {
        const skillAlreadyExists =
            await this.grimoireRepository.findByCharacterAndSkill(
                id_character,
                skillOld
            );

        if (!skillAlreadyExists) {
            throw new AppError("skill not exists");
        }

        await this.grimoireRepository.save({
            id_grimoire: skillAlreadyExists.id_grimoire,
            id_character,
            skill,
            class_group,
            type,
            points,
            rules,
            icon,
        });
    }
}
export { UpdateSkillUseCase };
