import { BaseModel } from "./BaseModel";
import { Gate } from "./Gate";
import { Operator } from "./Operator";
import { ParkingSlot } from "./ParkingSlot";
import { Vehicle } from "./Vehicle";

export class Ticket extends BaseModel {
    private ticketNo:string;
    private entryTime:Date;
    private vehicle:Vehicle;
    private parkingSlot:ParkingSlot;
    private gate:Gate;
    private operator:Operator;

    getTicketNo(){
        return this.ticketNo;
    }
    getEntryTime(){
        return this.entryTime;
    }
    getVehicle(){
    return this.vehicle;
    }
    getParkingSlot(){
        return this.parkingSlot;
    }
    getGate(){
        return this.gate;
    }
    getOperator(){
        return this.operator;
    }
    setTicketNo(ticketNo:string){
        this.ticketNo = ticketNo;
    }
    setEntryTime(entryTime:Date){
       this.entryTime = entryTime;
    }
    setVehicle(vehicle:Vehicle){
        this.vehicle = vehicle;
    }
    setParkingSlot(parkingSlot:ParkingSlot){
        this.parkingSlot = parkingSlot;
    }
    setGate(gate:Gate){
        this.gate = gate;
    }
    setOperator(operator:Operator){
        this.operator = operator;
    }
    
}