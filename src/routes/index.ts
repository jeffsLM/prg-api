import { Router } from "express";

import { autenticateRoutes } from "./authenticate.routes";
import { characterRoutes } from "./character.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/character", characterRoutes);
router.use(autenticateRoutes);

export { router };
