import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { CharacterRepository } from "../../modules/character/implementations/CharacterRepository";
import { ICharacterRepository } from "../../modules/character/repositories/ICharacterRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<ICharacterRepository>(
    "CharacterRepository",
    CharacterRepository
);
