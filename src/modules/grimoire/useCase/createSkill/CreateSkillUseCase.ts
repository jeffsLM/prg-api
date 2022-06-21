import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../erros/appError";
import { ICreateGrimoireDTO } from "../../dtos/ICreateGrimoireDTO";
import { IGrimoireRepository } from "../../repositories/IGrimoireRepository";

@injectable()
class CreateSkillUseCase {
    constructor(
        @inject("GrimoreRepository")
        private grimoireRepository: IGrimoireRepository
    ) {}

    async execute({
        id_character,
        skill,
        class_group,
        type,
        points,
        rules,
        icon,
    }: ICreateGrimoireDTO): Promise<void> {
        const skillAlreadyExists =
            await this.grimoireRepository.findByCharacterAndSkill(
                id_character,
                skill
            );

        // console.log({
        //     id_character,
        //     skill,
        //     class_group,
        //     type,
        //     points,
        //     rules,
        //     icon,
        // });
        if (skillAlreadyExists) {
            throw new AppError("Skill alredy exists");
        }

        await this.grimoireRepository.create({
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
export { CreateSkillUseCase };
