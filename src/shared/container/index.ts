import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);
