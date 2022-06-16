import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSkillUseCase } from "./ListSkillUseCase";

class ListCharacterUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id_character } = request.params;

        const listCharacterUserUseCase = container.resolve(ListSkillUseCase);

        const list = await listCharacterUserUseCase.execute({
            id_character,
        });

        return response.status(200).json(list).send();
    }
}

export { ListCharacterUserController };
