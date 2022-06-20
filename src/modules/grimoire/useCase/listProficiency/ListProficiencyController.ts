import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListProficiencyUseCase } from "./ListProficiencyUseCase";

class ListProficiencyUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id_character } = request.params;

        const listProficiencyUseCase = container.resolve(ListProficiencyUseCase);

        const list = await listProficiencyUseCase.execute({
            id_character,
        });

        return response.status(200).json(list).send();
    }
}

export { ListProficiencyUserController };
