import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../erros/appError";
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
        max_life_points,
        life_points,
        max_mana_points,
        mana_points,
        max_especial_points,
        especial_points,
    }: ICreateCharacterDTO): Promise<void> {
        const userAlreadyExists = await this.characterRepository.findByUserId(
            id_user
        );

        if (userAlreadyExists) {
            throw new AppError("User alredy exists");
        }

        await this.characterRepository.create({
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
    }
}
export { CreateCharacterUseCase };
