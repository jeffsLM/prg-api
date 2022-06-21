import { inject, injectable } from "tsyringe";

// import { AppError } from "../../../../erros/appError";
import { Character } from "../../entities/Character";
import { ICharacterRepository } from "../../repositories/ICharacterRepository";

@injectable()
class ListAllCharactersUseCase {
    constructor(
        @inject("CharacterRepository")
        private characterRepository: ICharacterRepository
    ) {}

    async execute(): Promise<Character[]> {
        const userCharacterAlreadyExists =
            await this.characterRepository.findAll();

        return userCharacterAlreadyExists;
    }
}
export { ListAllCharactersUseCase };
