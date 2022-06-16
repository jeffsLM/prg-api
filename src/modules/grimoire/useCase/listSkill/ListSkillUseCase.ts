import { inject, injectable } from "tsyringe";

import { Grimoire } from "../../entities/Grimore";
import { IGrimoireRepository } from "../../repositories/IGrimoireRepository";

interface IRequest {
    id_character: string;
}

@injectable()
class ListSkillUseCase {
    constructor(
        @inject("GrimoreRepository")
        private grimoireRepository: IGrimoireRepository
    ) {}

    async execute({ id_character }: IRequest): Promise<Grimoire[]> {
        const userCharacterAlreadyExists =
            await this.grimoireRepository.findSkillsByCharacterAndType(
                id_character,
                "SKILL"
            );

        return userCharacterAlreadyExists;
    }
}
export { ListSkillUseCase };
