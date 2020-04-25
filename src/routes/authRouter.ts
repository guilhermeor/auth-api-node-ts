import {Application} from "express";
import { AuthController } from "../controllers/authController";

export default class Routes { 
    
    public contactController: AuthController = new AuthController() 
    
    public routes(app: Application): void {          
        app.route('/authenticate')      
        .post(this.contactController.authenticate);
    }
}