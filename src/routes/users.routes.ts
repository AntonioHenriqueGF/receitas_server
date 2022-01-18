import { Router } from "express";
import listUsersController from "../modules/users/useCases/listUsers";
import createUserController from "../modules/users/useCases/createUser";
import updateUserController from "../modules/users/useCases/updateUser";
import deleteUserController from "../modules/users/useCases/deleteUser";
import { ensureAutenticated } from "../middlewares/ensureAutenticated";
import currentUserController from "../modules/users/useCases/currentUser";

const usersRouts = Router();

// usersRouts.get("/", (req, res) => {
//     return listUsersController().handle(req, res);
// });

usersRouts.get("/me", ensureAutenticated, (req, res) => {
    return currentUserController().handle(req, res);
});

usersRouts.post("/", (req, res) => {
    return createUserController().handle(req, res);
});

// usersRouts.put("/", (req, res) => {
//     return updateUserController().handle(req, res);
// })

// usersRouts.delete("/", (req, res) => {
//     return deleteUserController().handle(req, res);
// });


export { usersRouts };