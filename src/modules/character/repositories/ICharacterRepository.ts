import { ICreateCharacterDTO } from "../dtos/ICreateCharacterDTO";
import { Character } from "../entities/Character";

interface ICharacterRepository {
    create(data: ICreateCharacterDTO): Promise<void>;
    save(data: ICreateCharacterDTO): Promise<void>;
    findByUserId(email: string): Promise<Character>;
    findById(id: string): Promise<Character>;
}

export { ICharacterRepository };
