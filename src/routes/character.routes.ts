import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateCharacterController } from "../modules/character/useCase/createCharacter/CreateCharacterController";

const characterRoutes = Router();
const authenticateUserController = new CreateCharacterController();

characterRoutes.post(
    "/create",
    ensureAuthenticated,
    authenticateUserController.handle
);

export { characterRoutes };
