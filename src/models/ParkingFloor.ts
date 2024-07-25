import { BaseModel } from "./BaseModel";
import { ParkingSlot } from "./ParkingSlot";

export class ParkingFloor extends BaseModel {
    private floorNumber:number;
    private parkingSlots:ParkingSlot[];

    public setFloorNumber(num:number){
        this.floorNumber = num;
    }
    public setParkingSlots(parkingSlots:ParkingSlot[]){
        this.parkingSlots = parkingSlots;
    }

    public getFloorNumber(){
        return this.floorNumber;
    }
    public getParkingSlots(){
        return this.parkingSlots;
    }
}