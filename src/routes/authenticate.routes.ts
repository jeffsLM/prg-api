import { Router } from "express";

import { AuthenticateUserController } from "../modules/accounts/useCase/autenticateUser/AuthenticateUserController";

const autenticateRoutes = Router();
const authenticateUserController = new AuthenticateUserController();

autenticateRoutes.post("/sessions", authenticateUserController.handle);

export { autenticateRoutes };
