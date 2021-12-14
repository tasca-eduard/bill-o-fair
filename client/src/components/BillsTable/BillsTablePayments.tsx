import React, { MouseEvent } from 'react';
import { PaymentDTO } from '../../common/dtos/Payment';

interface Props {
    payments: PaymentDTO[]
}

class BillsTablePayments extends React.Component<Props, {}> {
    selectCell = (e: MouseEvent<HTMLTableCellElement>) => {
        e.currentTarget.classList.toggle('selected');
    }

    render() {
        return (
            this.props.payments.map((payment: PaymentDTO, index: number) => {
                return (
                    <td key={index} className="cell" onClick={this.selectCell}>
                        {payment.amount}
                    </td>
                )
            })
        )
    }
}

export default BillsTablePayments;