import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSkillUseCase } from "./CreateSkillUseCase";

class CreateSkillController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id_character, skill, type, class_group, icon, points, rules } =
            request.body;

        const createUserUseCase = container.resolve(CreateSkillUseCase);

        await createUserUseCase.execute({
            id_character,
            skill,
            type,
            class_group,
            icon,
            points,
            rules,
        });

        return response.status(201).send();
    }
}

export { CreateSkillController };
