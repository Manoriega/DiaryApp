import { Router } from "express";
import { userscontrollers } from "../controllers/usersControllers";

class UsersRoutes{
    public router: Router = Router();
    constructor(){
        this.routes();
    }

    routes(): void {
        this.router.post('/create', userscontrollers.createUser);
        this.router.post('/update', userscontrollers.updateUser);
        this.router.get('/select/byId', userscontrollers.getUserById);
        this.router.get('/select/byName', userscontrollers.getUserByName);
        this.router.delete('/delete', userscontrollers.deleteUser);
    }
}

const usersRoutes = new UsersRoutes();
export default usersRoutes.router;