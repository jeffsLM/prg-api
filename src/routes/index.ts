import { Router } from "express";

import { autenticateRoutes } from "./authenticate.routes";
import { characterRoutes } from "./character.routes";
import { grimoireSkillRoutes } from "./grimoire.skills.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/character", characterRoutes);
router.use("/grimoire", grimoireSkillRoutes);
router.use(autenticateRoutes);

export { router };
