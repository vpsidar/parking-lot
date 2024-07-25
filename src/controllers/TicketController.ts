import { IssueTicketRequestDTO } from "../dtos/IssueTicketRequestDTO";
import { IssueTicketResponseDTO } from "../dtos/IssueTicketResponseDTO";
import { ResponseType } from "../models/enums/Response";
import { TicketService } from "../services/TicketService";

export class TicketController {
    private ticketService:TicketService;  
    constructor(ticketService:TicketService){
        this.ticketService = ticketService;  //Dependency Injection
    }
    public issueTicket(issueTicketReqDTO:IssueTicketRequestDTO):IssueTicketResponseDTO {
        const issueTicketResDTO = new IssueTicketResponseDTO();
        try {
            const ticket =  this.ticketService.issueTicket(issueTicketReqDTO.vehicleNo,
                issueTicketReqDTO.ownerName,
                issueTicketReqDTO.vehicleType,
                issueTicketReqDTO.gateId
            )
            issueTicketResDTO.ticket = ticket;
            issueTicketResDTO.responseType = ResponseType.SUCCESS;
        } catch (error) {
            issueTicketResDTO.responseType = ResponseType.FAILURE;
            issueTicketResDTO.failureMessage = 'Something went wrong';
        }
        return issueTicketResDTO;
    }
    // Needs to interact with client 
    //validations on the input
    // call the service and proide it with the inputs
    // Recieve the output form service and send it over to the client in a proper format
}