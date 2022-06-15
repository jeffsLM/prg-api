import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCharacterUserUseCase } from "./ListCharacterUserUseCase";

class ListCharacterUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;

        const listCharacterUserUseCase = container.resolve(
            ListCharacterUserUseCase
        );

        const list = await listCharacterUserUseCase.execute({
            id_user: id,
        });

        return response.status(200).json(list).send();
    }
}

export { ListCharacterUserController };
