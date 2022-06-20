import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../erros/appError";
import { ICharacterRepository } from "../../repositories/ICharacterRepository";
import {ICreateCharacterDTO} from '../../dtos/ICreateCharacterDTO';


@injectable()
class UpdateCharacterUseCase {
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
        const userCharacterAlreadyExists =
            await this.characterRepository.findByUserId(id_user);

        if (!userCharacterAlreadyExists) {
            throw new AppError("user not have un character");
        }

        const characterAlreadyExists = await this.characterRepository.findById(
            userCharacterAlreadyExists.id_character
        );

        if (!characterAlreadyExists) {
            throw new AppError("character not exists");
        }

        characterAlreadyExists.name = name;
        characterAlreadyExists.class_group = class_group;
        characterAlreadyExists.sub_class_group = sub_class_group;
        characterAlreadyExists.max_life_points = max_life_points;
        characterAlreadyExists.life_points = life_points;
        characterAlreadyExists.max_mana_points = max_mana_points;
        characterAlreadyExists.mana_points = mana_points;
        characterAlreadyExists.max_especial_points = max_especial_points;
        characterAlreadyExists.especial_points = especial_points;

        await this.characterRepository.save(characterAlreadyExists);
    }
}
export { UpdateCharacterUseCase };
