import { BaseModel } from "./BaseModel";

export class Operator extends BaseModel {
    private name:string;
    setName(name:string){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}