import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateCharacterUseCase } from "./UpdateCharacterInfoUseCase";

class UpdateCharacterInfoController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;
        const { name, class_group, sub_class_group } = request.body;

        const createUserUseCase = container.resolve(UpdateCharacterUseCase);

        await createUserUseCase.execute({
            id_user: id,
            name,
            class_group,
            sub_class_group,
        });

        return response.status(204).send();
    }
}

export { UpdateCharacterInfoController };
