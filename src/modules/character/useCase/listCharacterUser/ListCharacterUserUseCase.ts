import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../erros/appError";
import { Character } from "../../entities/Character";
import { ICharacterRepository } from "../../repositories/ICharacterRepository";

interface IRequest {
    id_user: string;
}

@injectable()
class ListCharacterUserUseCase {
    constructor(
        @inject("CharacterRepository")
        private characterRepository: ICharacterRepository
    ) {}

    async execute({ id_user }: IRequest): Promise<Character> {
        const userCharacterAlreadyExists =
            await this.characterRepository.findByUserId(id_user);

        if (!userCharacterAlreadyExists) {
            throw new AppError("user not have un character");
        }

        return userCharacterAlreadyExists;
    }
}
export { ListCharacterUserUseCase };
