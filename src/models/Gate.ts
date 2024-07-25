import { BaseModel } from "./BaseModel";
import { GateStatus } from "./enums/GateStatus";
import { GateType } from "./enums/GateType";
import { Operator } from "./Operator";

export class Gate extends BaseModel {
    private type:GateType;
    private status:GateStatus;
    private operator:Operator;

    getGateType() {
        return this.type;
    }
    getGateStatus() {
        return this.status;
    }
    getOperator(){
        return this.operator;
    }
    setGateType(type:GateType){
        this.type = type;
    }
    setGateStaus(status:GateStatus){
        this.status = status;
    }
    setOperator(operator:Operator){
        this.operator = operator;
    }
}   