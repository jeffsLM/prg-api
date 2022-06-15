import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../erros/appError";
import { ICharacterRepository } from "../../repositories/ICharacterRepository";

interface IUpdateCharacterRequest {
    id_user: string;
    name: string;
    class_group: string;
    sub_class_group: string;
}

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
    }: IUpdateCharacterRequest): Promise<void> {
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

        await this.characterRepository.save(characterAlreadyExists);
    }
}
export { UpdateCharacterUseCase };
