import React from 'react';
import { PaymentDTO } from '../../common/dtos/Payment';

interface Props {
    payments: PaymentDTO[]
}

class BillsTablePayments extends React.Component<Props, {}> {
    render() {
        return (
            this.props.payments.map((payment: PaymentDTO, index: number) => {
                return (
                    <th key={index} className="cell">
                        {payment.amount}
                    </th>
                )
            })
        )
    }
}

export default BillsTablePayments;