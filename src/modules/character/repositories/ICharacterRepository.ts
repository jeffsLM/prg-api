import { ICreateCharacterDTO } from "../dtos/ICreateCharacterDTO";
import { Character } from "../entities/Character";

interface ICharacterRepository {
    create(data: ICreateCharacterDTO): Promise<void>;
    findByName(email: string): Promise<Character>;
    findById(id: string): Promise<Character>;
}

export { ICharacterRepository };
