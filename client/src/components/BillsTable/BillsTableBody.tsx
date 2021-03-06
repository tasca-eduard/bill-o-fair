import React, { MouseEvent } from 'react';
import { UserBillDataDTO } from '../../common/dtos/UserBillData';
import BillsTablePayments from './BillsTablePayments';

interface Props {
    userBillData: UserBillDataDTO[]
}

class BillsTableBody extends React.Component<Props, {}> {
    selectRow = (e: MouseEvent<HTMLTableCellElement>) => {
        e.currentTarget.closest('.row')?.classList.toggle('selected');
    }

    render() {
        return (
            <tbody className="table-body">
            {
                this.props.userBillData.map((userData: UserBillDataDTO, index: number) => {
                    return (
                        <tr key={index} className="row">
                            <th className="head user" onClick={this.selectRow}>
                                <div className="group">
                                    <img className="group-image" src={userData.photo} alt="User group" />
                                    <div className="group-info">
                                        <h2 className="title">{userData.name}</h2>
                                        <h3 className={`subtitle ${userData.paid ? 'paid' : 'unpaid'}`}> 
                                            {userData.paid ?
                                                <React.Fragment>
                                                    Paid 
                                                    <i className="status-icon fas fa-check"></i>
                                                </React.Fragment>
                                                :
                                                'Unpaid'
                                            }
                                        </h3>
                                    </div>
                                </div>
                            </th>
                            <BillsTablePayments payments={userData.payments} />
                            <th className="cell total">
                                <span>
                                    {userData.totalAmount}
                                </span>
                            </th>
                        </tr>   
                    )
                })
            }
        </tbody>
        )
    }    
}

export default BillsTableBody;