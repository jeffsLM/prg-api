import { inject, injectable } from "tsyringe";

import { ICreateCharacterDTO } from "../../dtos/ICreateCharacterDTO";
import { ICharacterRepository } from "../../repositories/ICharacterRepository";

@injectable()
class CreateCharacterUseCase {
    constructor(
        @inject("CharacterRepository")
        private characterRepository: ICharacterRepository
    ) {}

    async execute({
        id_user,
        name,
        class_group,
        sub_class_group,
    }: ICreateCharacterDTO): Promise<void> {
        await this.characterRepository.create({
            id_user,
            name,
            class_group,
            sub_class_group,
        });
    }
}
export { CreateCharacterUseCase };
