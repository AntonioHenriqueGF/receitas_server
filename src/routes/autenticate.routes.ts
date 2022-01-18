import { Router } from "express";
import autenticateUserController from "../modules/users/useCases/autenticateUser";

const autenticateRouts = Router();

autenticateRouts.post("/", (req, res) => {
    return autenticateUserController().handle(req, res);
});

export { autenticateRouts };