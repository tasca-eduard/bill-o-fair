import React, { WheelEvent } from 'react';
import { Switch, Route, NavLink, RouteComponentProps } from 'react-router-dom';
import { BillsTabelDTO } from '../../api/dtos/BillsTable';
import { PaymentDTO } from '../../api/dtos/Payment';
import { ServiceDTO } from '../../api/dtos/Service';
import { UserBillDataDTO } from '../../api/dtos/UserBillData';
import BillDetails from '../../components/bill-details/BillDetails';
import dummyBillsData from '../../dummy-data/bills.json';

interface Props extends RouteComponentProps {

}

interface State {
    billsData: BillsTabelDTO
}

class Bills extends React.Component<Props, State> {
    scrollContainer: React.RefObject<HTMLDivElement>;

    constructor(props: Props) {
        super(props);
        this.scrollContainer = React.createRef();
        this.state = {
            billsData: dummyBillsData
        }
    }

    onWheel = (e: WheelEvent) => {
        e.preventDefault()
        const container = this.scrollContainer.current;

        if(container) {
            const scrollContainerScrollPosition = container.scrollLeft;
            container.scrollTo({
                top: 0,
                left: scrollContainerScrollPosition + e.deltaY,
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="bills-component" onWheel={this.onWheel} ref={this.scrollContainer}>
                    <table className="bills-table">
                        <thead className="table-head">
                            <tr className="row">
                                <th className="head">
                                    <div className="group">
                                        <div className="image-wrapper">
                                            <img className="group-image" src={this.state.billsData.groupPhoto} alt="User group" />
                                        </div>
                                        <div className="group-info">
                                            <h2 className="title">{this.state.billsData.groupName}</h2>
                                            <h3 className="subtitle"> 
                                                18.03.2021
                                            </h3>
                                        </div>
                                    </div>
                                </th>
                                {this.state.billsData.services.map((service: ServiceDTO) => {
                                    return (
                                        <th className="head">
                                            <NavLink className="link" title={service.name} to={`${this.props.match.url}/${service.name.toLowerCase().replaceAll(' ', '')}`}>
                                                {service.name}
                                                <i className={`bill-icon ${service.icon}`}></i>
                                            </NavLink>
                                        </th>
                                    )
                                })}
                                <th className="head total">
                                    Total
                                    <i className="bill-icon fas fa-money-bill"></i>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            {
                                this.state.billsData.userBillData.map((userData: UserBillDataDTO) => {
                                    return (
                                        <tr className="row">
                                            <th className="head user">
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
                                            {userData.payments.map((payment: PaymentDTO) => {
                                                return (
                                                    <th className="cell">
                                                        {payment.amount}
                                                    </th>
                                                )
                                            })}
                                            <th className="cell total">
                                                {userData.totalAmount}
                                            </th>
                                        </tr>   
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                {this.state.billsData.services.map((service: ServiceDTO) => {
                    return (
                        <Switch>
                            <Route path={`${this.props.match.url}/${service.name.toLowerCase().replaceAll(' ', '')}`}
                                   render={(props: RouteComponentProps) => 
                                        <BillDetails 
                                            serviceDetails={this.state.billsData.services}
                                            {...props} 
                                       />
                                   }
                            />
                        </Switch>
                    )
                })}
            </React.Fragment>
        )
    }
}

export default Bills;
