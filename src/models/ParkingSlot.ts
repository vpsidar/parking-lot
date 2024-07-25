import { BaseModel } from "./BaseModel";
import { ParkingSlotStatus } from "./enums/ParkingSlotStatus";
import { VehicleType } from "./enums/VehicleType";
import { ParkingFloor } from "./ParkingFloor";

export class ParkingSlot extends BaseModel {
    private vehicleType:VehicleType;
    private parkingSlotStatus:ParkingSlotStatus;
    private number:number;
    private floor:ParkingFloor;

    getVehicleType() {
        return this.vehicleType;
    }

    getParkingSlotStatus() {
        return this.parkingSlotStatus;
    }

    getNumber(){
        return this.number;
    }

    getFloor(){
        return this.floor;
    }
    setVehicleType(vehicleType:VehicleType){
        this.vehicleType = vehicleType;
    }
    setParkingSlotStatus(parkSlotStatus:ParkingSlotStatus){
        this.parkingSlotStatus = parkSlotStatus;
    }
    setNumber(no:number){
        this.number = no;
    }
    setFloor(floor:ParkingFloor){
        this.floor = floor;
    }
}