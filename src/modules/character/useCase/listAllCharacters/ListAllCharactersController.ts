import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAllCharactersUseCase } from "./ListAllCharactersUseCase";

class ListAllCharactersController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listAllCharactersUseCase = container.resolve(
            ListAllCharactersUseCase
        );

        const list = await listAllCharactersUseCase.execute();

        return response.status(200).json(list).send();
    }
}

export { ListAllCharactersController };
