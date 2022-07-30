import { Request, Response, Router } from "express";

class IndexRoutes{
    public router: Router = Router();
    constructor(){
        this.routes();
    } 
    
    routes(): void {
        this.router.get('/', (req: Request, res: Response) => {
            res.json({
                status: 1,
                msg: "Server is fine"
            });
        })
    }
}
const indexroutes = new IndexRoutes();
export default indexroutes.router;