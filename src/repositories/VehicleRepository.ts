import { Vehicle } from "../models/Vehicle";

export class VehicleRepository {
    getVehicleByNumber(vn:string):Vehicle|null{
        return null
    }
    saveVehicle(vehicle:Vehicle){
        return vehicle;
    }
}