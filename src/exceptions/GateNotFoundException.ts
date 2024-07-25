import { BaseError } from "./BaseError";

export class GateNotFoundException extends BaseError {
    constructor(errorCode:string, message:string){
        super(errorCode,message)
    }
}