import { Router } from "express";
import { autenticateRouts } from "./autenticate.routes";
import { recipesRouts } from "./recipes.routes";
import { usersRouts } from "./users.routes";
import cors from "cors";

const router = Router();

router.use(cors());
router.use("/sessions", autenticateRouts);
router.use("/users", usersRouts);
router.use("/recipes", recipesRouts);

export { router };