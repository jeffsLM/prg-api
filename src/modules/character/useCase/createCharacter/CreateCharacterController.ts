import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCharacterUseCase } from "./CreateCharacterUseCase";

class CreateCharacterController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;
        const { name, class_group, sub_class_group } = request.body;

        const createUserUseCase = container.resolve(CreateCharacterUseCase);

        await createUserUseCase.execute({
            id_user: id,
            name,
            class_group,
            sub_class_group,
        });

        return response.status(201).send();
    }
}

export { CreateCharacterController };
