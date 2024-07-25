export class BaseModel {
    private id:number;
    private createdAt:Date;
    private updatedAt:Date;

    public getId() {
        return this.id;
    }

    public setId(id:number) {
        this.id = id;
    }

    public getCreatedAt(){
        return this.createdAt;
    }
    public setCreatedAt(createdAt:Date){
        this.createdAt = createdAt;
    }
    public getUpdatedAt(){
        return this.updatedAt;
    }
    public setUpdatedAt(updatedAt:Date){
        this.updatedAt = updatedAt;
    }
}