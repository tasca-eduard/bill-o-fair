import { PaymentDTO } from "./Payment";

export interface UserBillDataDTO {
    name: string,
    paid: boolean,
    photo: string,
    totalAmount: number,
    payments: PaymentDTO[]
}