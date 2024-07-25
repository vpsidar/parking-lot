import { ResponseType } from "../models/enums/Response";
import { Ticket } from "../models/Ticket";

export class IssueTicketResponseDTO {
    private _ticket: Ticket;
    public get ticket(): Ticket {
        return this._ticket;
    }
    public set ticket(value: Ticket) {
        this._ticket = value;
    }
    private _responseType: ResponseType;
    public get responseType(): ResponseType {
        return this._responseType;
    }
    public set responseType(value: ResponseType) {
        this._responseType = value;
    }
    private _failureMessage: string;
    public get failureMessage(): string {
        return this._failureMessage;
    }
    public set failureMessage(value: string) {
        this._failureMessage = value;
    }
}