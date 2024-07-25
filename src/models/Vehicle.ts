import { BaseModel } from "./BaseModel";
import { VehicleType } from "./enums/VehicleType";

export class Vehicle extends BaseModel {
    private number:string;
    private type:VehicleType;
    private ownerName:string;

    setVehicleNumber(number:string){
        this.number = number;
    }

    setVehicleType(type:VehicleType){
        this.type = type;
    }

    setOwnerName(name:string){
        this.ownerName = name;
    }
    
}