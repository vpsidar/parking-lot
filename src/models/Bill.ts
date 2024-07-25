import { BaseModel } from "./BaseModel";
import { BillStatus } from "./enums/BillStatus";
import { Gate } from "./Gate";
import { Operator } from "./Operator";
import { Payment } from "./Payment";
import { Ticket } from "./Ticket";

export class Bill extends BaseModel{
    private exitTime:Date;
    private ticket:Ticket;
    private generatedAt:Gate;
    private generatedBy:Operator;
    private fee:number;
    private payments:Payment[];
    private billStatus:BillStatus;

    setExitTime(time:Date){
        this.exitTime = time;
    }
    setTicket(ticket:Ticket){
        this.ticket = ticket;
    }
    setGeneratedAt(generatedAt:Gate){
        this.generatedAt = generatedAt;
    }
    setGeneratedBy(operator:Operator){
        this.generatedBy = operator;
    }
    setPayments(payments:Payment[]){
        this.payments = payments;
    }
    setBillStatus(billStatus:BillStatus){
        this.billStatus = billStatus;
    }

    getExitTime(){
        return this.exitTime
    }
    getTicket(){
        return this.ticket;
    }
    getGeneratedAt(){
        return this.generatedAt;
    }
    getGeneratedBy(){
        return this.generatedBy;
    }
    getPayments(){
        return this.payments;
    }
    getBillStatus(){
        return this.billStatus;
    }
}