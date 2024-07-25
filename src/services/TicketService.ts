import { GateNotFoundException } from "../exceptions/GateNotFoundException";
import { VehicleType } from "../models/enums/VehicleType";
import { Ticket } from "../models/Ticket";
import { Vehicle } from "../models/Vehicle";
import { GateRepository } from "../repositories/GateRepository";
import { ParkingLotRepository } from "../repositories/ParkingLotRepository";
import { TicketRepository } from "../repositories/TicketRepository";
import { VehicleRepository } from "../repositories/VehicleRepository";

export class TicketService {
    private gateRepos:GateRepository;
    private ticketRepos:TicketRepository;
    private vehicleRepos:VehicleRepository;
    private parkingLotRepos:ParkingLotRepository;
    constructor(gateRepo:GateRepository,tickRepos:TicketRepository,vehicleRepos:VehicleRepository){
        this.gateRepos = gateRepo;
        this.ticketRepos = tickRepos;
        this.vehicleRepos = vehicleRepos;
    }

    issueTicket(vehicleNo:string,ownerName:string, vehicleType:VehicleType,gateId:number):Ticket {
        //1.create ticket object
        //2.Assigning a slot , not algorithm how you connect those algorithm
        //return the ticket
        const ticket = new Ticket();
        ticket.setEntryTime(new Date());
        
        //set the Gate; // Gate will be stored in db
        const gate = this.gateRepos.findGateById(gateId);
        if(!gate){
            throw new GateNotFoundException('ER_100','Gate not found in the system')
        }
        ticket.setGate(gate);
        const vehicleFromDB = this.vehicleRepos.getVehicleByNumber(vehicleNo);
        if(!vehicleFromDB){
            const vehicle = new Vehicle()
            vehicle.setCreatedAt(new Date())
            vehicle.setId(1);
            vehicle.setOwnerName(ownerName);
            vehicle.setVehicleType(vehicleType);
            vehicle.setVehicleNumber(vehicleNo);
            vehicle.setUpdatedAt(new Date());
            this.vehicleRepos.saveVehicle(vehicle);
            ticket.setVehicle(vehicle);
        }else {
            ticket.setVehicle(vehicleFromDB)
        }
        
        ticket.setTicketNo('TC-'+ticket.getTicketNo())
        
        return ticket;
    }
}