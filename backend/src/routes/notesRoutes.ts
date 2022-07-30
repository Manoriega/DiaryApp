import { Router } from "express"
import { notescontrollers } from "../controllers/notesControllers";

class NotesRoutes{
    public router: Router = Router();

    constructor(){
        this.routes();
    }

    routes(): void{
        this.router.get('/select/byUser', notescontrollers.getAllNotesByUser);
        this.router.get('/select/betweenDates', notescontrollers.getNotesBetweenDates);
        this.router.post('/create', notescontrollers.createNote);
        this.router.post('/update', notescontrollers.updateNote);
        this.router.delete('/delete', notescontrollers.deleteNote);
    }
}

const notesRoutes = new NotesRoutes();
export default notesRoutes.router;