import {Router} from 'express'
import { createUser, updateUser, showUser, fetchUser } from '../Controller/UserController.js'

const userRouter = Router();

userRouter.post('/',createUser);
userRouter.put('/:id',updateUser);
userRouter.get("/:id", showUser);
userRouter.get("/fetch", fetchUser);






export default userRouter;
