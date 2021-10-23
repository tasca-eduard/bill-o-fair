import { ServiceDTO } from "./Service";
import { UserBillDataDTO } from "./UserBillData";

export interface BillsTabelDTO {
    groupName: string,
    groupPhoto: string,
    services: ServiceDTO[],
    userBillData: UserBillDataDTO[]
}