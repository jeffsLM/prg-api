import { Router } from "express";

import { autenticateRoutes } from "./authenticate.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use(autenticateRoutes);

export { router };
