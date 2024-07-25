export class BaseError extends Error{
    private _errorCode:string;
    //private _message:string
    constructor(errorCode:string,message:string) {
        super(message)
        this._errorCode = errorCode;
        this.message = message
    }
}