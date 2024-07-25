import { BaseModel } from "./BaseModel";
import { Bill } from "./Bill";
import { PaymentMode } from "./enums/PaymentModes";
import { PaymentStatus } from "./enums/PaymentStatus";

export class Payment extends BaseModel {
    private _amount: number;
    public get amount(): number {
        return this._amount;
    }
    public set amount(value: number) {
        this._amount = value;
    }
    private _paymentMode: PaymentMode;
    public get paymentMode(): PaymentMode {
        return this._paymentMode;
    }
    public set paymentMode(value: PaymentMode) {
        this._paymentMode = value;
    }
    private _paymentStatus: PaymentStatus;
    public get paymentStatus(): PaymentStatus {
        return this._paymentStatus;
    }
    public set paymentStatus(value: PaymentStatus) {
        this._paymentStatus = value;
    }
    private _bill: Bill;
    public get bill(): Bill {
        return this._bill;
    }
    public set bill(value: Bill) {
        this._bill = value;
    }
    private _refId: string;
    public get refId(): string {
        return this._refId;
    }
    public set refId(value: string) {
        this._refId = value;
    }

}