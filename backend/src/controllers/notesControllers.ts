import { Request, Response } from "express";
import dbManager from "../singletons/dbManager";

class NotesControllers{
    public async getAllNotesByUser(req: Request, res: Response){
        const db = dbManager.getManager();
        let get = req.query;
        if(get.userid){
            let selection = await db.selectBySingleColumn('notes', 'userid', get.userid);
            res.json(selection);
        } else{
            res.json({
                status: 0,
                msg: "No user id presented"
            })
        }
    }    

    public async getNotesBetweenDates(req: Request, res: Response){
        const db = dbManager.getManager();
        let post = req.body;
        if(post.dateA, post.dateB, post.userid){
            let selection = await db.execProcedure('diaryapp', 'getNotesInTime', [post.dateA, post.dateB, post.userid]);
            res.json(selection);
        } else {
            res.json({
                status: 0,
                msg: "No dates presented"
            })
        }            
    }

    public async createNote(req: Request, res: Response){
        const db = dbManager.getManager();
        let post = req.body;
        if(post.userid, post.content, post.notedate){
            let insertion = await db.insertInto('notes', post);
            res.json(insertion);
        } else {
            res.json({
                status: 0,
                msg: "Data body is not complete"
            })
        }
    }

    public async updateNote(req: Request, res: Response){
        const db = dbManager.getManager();
        let post = req.body;
        if(post.id){
            const id: any = post.id;
            delete post.id;
            let updated = await db.updateValue('notes', post, 'id', id);
            res.json(updated); 
        } else {
            res.json({
                status: 0,
                msg: 'No id presented'
            })
        }
    }

    public async deleteNote(req: Request, res: Response){
        const db = dbManager.getManager();
        let get = req.query;
        if(get.id){
            let deleted = await db.deleteRow('notes', 'id', get.id);
            res.json(deleted);
        } else{
            res.json({
                status: 0,
                msg: "No user id presented"
            })
        }
    }
}

export const notescontrollers = new NotesControllers();