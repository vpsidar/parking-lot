import { stat } from "fs";
import { BaseModel } from "./BaseModel";
import { ParkingLotStatus } from "./enums/ParkingLotStatus";
import { VehicleType } from "./enums/VehicleType";
import { Gate } from "./Gate";
import { ParkingFloor } from "./ParkingFloor";
import { SlotAllotmentStrategy } from "../strategies/SlotAllotmentStrategy";

export class ParkingLot extends BaseModel {
    private address:string;
    private parkingFloors:ParkingFloor[];
    private gates:Gate[];
    private allowedVehicleTypes:VehicleType[];
    private parkingLotStatus:ParkingLotStatus;
    private slotAllotmentStrategy:SlotAllotmentStrategy;
    
    public setAddress(address:string){
        this.address = address;
    }
    public getAddress(){
        return this.address;
    }
    public setParkingFloors(parkingFloors:ParkingFloor[]){
        this.parkingFloors = parkingFloors;
    }
    public getParkingFloors(){
        return this.parkingFloors;
    }
    public setGates(gates:Gate[]){
        this.gates = gates;
    }
    public getGates() {
        return this.gates;
    }
    public setAllowedVehicleTypes(allowedVehicleTypes:VehicleType[]){
        this.allowedVehicleTypes = allowedVehicleTypes;
    }
    public getAllowedVehicleTypes(){
        return this.allowedVehicleTypes;
    }
    public setParkingLotStatus(status:ParkingLotStatus){
        this.parkingLotStatus = status;
    }
    public getParkingLotStatus(){
        return this.parkingLotStatus;
    }
    setSlotAllotmentStrategy(strategy:SlotAllotmentStrategy){
        this.slotAllotmentStrategy = strategy;
    }
}