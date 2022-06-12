import { ICreateCharacterDTO } from "../dtos/ICreateCharacterDTO";
import { Character } from "../entites/Character";

interface ICharacterRepository {
    create(data: ICreateCharacterDTO): Promise<void>;
    findByName(email: string): Promise<Character>;
    findById(id: string): Promise<Character>;
}

export { ICharacterRepository };
