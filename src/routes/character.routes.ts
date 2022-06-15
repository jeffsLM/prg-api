import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateCharacterController } from "../modules/character/useCase/createCharacter/CreateCharacterController";
import { ListCharacterUserController } from "../modules/character/useCase/listCharacterUser/ListCharacterUserController";
import { UpdateCharacterInfoController } from "../modules/character/useCase/updateCharacterInfo/UpdateCharacterInfoController";

const characterRoutes = Router();
const authenticateUserController = new CreateCharacterController();
const updateCharacterInfoController = new UpdateCharacterInfoController();
const listCharacterUserController = new ListCharacterUserController();

characterRoutes.get(
    "/",
    ensureAuthenticated,
    listCharacterUserController.handle
);

characterRoutes.post(
    "/create",
    ensureAuthenticated,
    authenticateUserController.handle
);

characterRoutes.patch(
    "/update",
    ensureAuthenticated,
    updateCharacterInfoController.handle
);

export { characterRoutes };
