import { Container } from "inversify";
import { HomeController } from "../controllers/home.controller";


const myContainer = new Container();
myContainer.bind<HomeController>(HomeController).toSelf();


export { myContainer };