import { VehicleType } from "../models/enums/VehicleType";
import { Gate } from "../models/Gate";
import { ParkingSlot } from "../models/ParkingSlot";
import { SlotAllotmentStrategy } from "./SlotAllotmentStrategy";

export class RandomSlotStrategy implements SlotAllotmentStrategy {
    getSlot(gate: Gate, vehicleType: VehicleType): ParkingSlot {
        throw new Error("Method not implemented.");
    }

}