import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { CharacterRepository } from "../../modules/character/implementations/CharacterRepository";
import { ICharacterRepository } from "../../modules/character/repositories/ICharacterRepository";
import { GrimoireRepository } from "../../modules/grimoire/implementations/GrimoireRepository";
import { IGrimoireRepository } from "../../modules/grimoire/repositories/IGrimoireRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<ICharacterRepository>(
    "CharacterRepository",
    CharacterRepository
);

container.registerSingleton<IGrimoireRepository>(
    "GrimoreRepository",
    GrimoireRepository
);
