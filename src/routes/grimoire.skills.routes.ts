import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSkillController } from "../modules/grimoire/useCase/createSkill/CreateSkillController";
import { ListItensController } from "../modules/grimoire/useCase/listItens/ListItensController";
import { ListCharacterUserController } from "../modules/grimoire/useCase/listSkill/ListSkillController";
import { UpdateSkillController } from "../modules/grimoire/useCase/updateSkill/UpdateSkillController";

const grimoireSkillRoutes = Router();
const createSkillController = new CreateSkillController();
const listCharacterUserController = new ListCharacterUserController();
const listItensController = new ListItensController();
const updateSkillController = new UpdateSkillController();

grimoireSkillRoutes.post(
    "/skill/create",
    ensureAuthenticated,
    createSkillController.handle
);
grimoireSkillRoutes.patch(
    "/skill/update",
    ensureAuthenticated,
    updateSkillController.handle
);
grimoireSkillRoutes.get(
    "/skill/:id_character",
    ensureAuthenticated,
    listCharacterUserController.handle
);

grimoireSkillRoutes.get(
    "/itens/:id_character",
    ensureAuthenticated,
    listItensController.handle
);

export { grimoireSkillRoutes };
