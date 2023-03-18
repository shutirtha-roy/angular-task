import { IMenu } from "./IMenu";

export class Menu implements IMenu {
    public id! : string;
    public path! : string;
    public title! : string;

    public constructor(init?:Partial<Menu>) {
        Object.assign(this, init);
    }
}