import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListItensUseCase } from "./ListItensUseCase";

class ListItensController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id_character } = request.params;

        const listCharacterUserUseCase = container.resolve(ListItensUseCase);

        const list = await listCharacterUserUseCase.execute({
            id_character,
        });

        return response.status(200).json(list).send();
    }
}

export { ListItensController };
