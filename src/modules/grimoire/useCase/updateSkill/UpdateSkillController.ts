import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateSkillUseCase } from "./UpdateSkillUseCase";

class UpdateSkillController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            id_character,
            skill,
            skillOld,
            class_group,
            type,
            points,
            rules,
            icon,
        } = request.body;

        const updateSkillUseCase = container.resolve(UpdateSkillUseCase);

        await updateSkillUseCase.execute({
            id_character,
            skill,
            skillOld,
            class_group,
            type,
            points,
            rules,
            icon,
        });

        return response.status(204).send();
    }
}

export { UpdateSkillController };
