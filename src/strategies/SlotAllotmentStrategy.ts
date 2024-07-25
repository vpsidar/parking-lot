import { VehicleType } from "../models/enums/VehicleType";
import { Gate } from "../models/Gate";
import { ParkingSlot } from "../models/ParkingSlot";

export interface SlotAllotmentStrategy {
    getSlot(gate:Gate, vehicleType:VehicleType):ParkingSlot
}