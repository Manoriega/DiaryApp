import { Request, Response } from "express";
import dbManager from "../singletons/dbManager";

class UserControllers{
    public async createUser(req: Request, res: Response){
        const db = dbManager.getManager();
        let post = req.body;
        if(post.name, post.password){
            let insertion = await db.insertInto('users', post);
            res.json(insertion);
        } else {
            res.json({
                status: 0,
                msg: "Data body is not complete"
            })
        }
    }

    public async getUserById(req: Request, res: Response){
        const db = dbManager.getManager();
        let get = req.query;
        if(get.id){
            let selection = await db.selectBySingleColumn('users', 'id', get.id);
            res.json(selection);
        } else{
            res.json({
                status: 0,
                msg: "No id presented"
            })
        }
    }     

    public async getUserByName(req: Request, res: Response){
        const db = dbManager.getManager();
        let get = req.query;
        if(get.name){
            let selection = await db.selectBySingleColumn('users', 'name', get.name);
            res.json(selection);
        } else {
            res.json({
                status: 0,
                msg: "Not username presented"
            })
        }
    }

    public async updateUser(req: Request, res: Response){
        const db = dbManager.getManager();
        let post = req.body;
        if(post.id){
            const id: any = post.id;
            delete post.id;
            let updated = await db.updateValue('users', post, 'id', id);
            res.json(updated);
        } else {
            res.json({
                status: 0,
                msg: "No user id presented"
            })
        }
    }

    public async deleteUser(req: Request, res: Response){
        const db = dbManager.getManager();
        let get = req.query;
        if(get.id){
            let deleted = await db.deleteRow('users', 'id', get.id);
            res.json(deleted);
        } else{
            res.json({
                status: 0,
                msg: "No user id presented"
            })
        }
    }
}

export const userscontrollers = new UserControllers();