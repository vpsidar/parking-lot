import { VehicleType } from "../models/enums/VehicleType";

export class IssueTicketRequestDTO {
    private _vehicleNo: string;
    private _ownerName: string;
    private _gateId: number;
    private _vehicleType: VehicleType;
    public get vehicleNo(): string {
        return this._vehicleNo;
    }
    public set vehicleNo(value: string) {
        this._vehicleNo = value;
    }
    
    public get ownerName(): string {
        return this._ownerName;
    }
    public set ownerName(value: string) {
        this._ownerName = value;
    }
    
    public get gateId(): number {
        return this._gateId;
    }
    public set gateId(value: number) {
        this._gateId = value;
    }
    
    public get vehicleType(): VehicleType {
        return this._vehicleType;
    }
    public set vehicleType(value: VehicleType) {
        this._vehicleType = value;
    }
}