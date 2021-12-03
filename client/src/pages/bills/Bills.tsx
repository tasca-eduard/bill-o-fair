import React, { WheelEvent } from 'react';
import { Switch, Route, NavLink, RouteComponentProps } from 'react-router-dom';
import { BillsTabelDTO } from '../../common/dtos/BillsTable';
import { PaymentDTO } from '../../common/dtos/Payment';
import { ServiceDTO } from '../../common/dtos/Service';
import { UserBillDataDTO } from '../../common/dtos/UserBillData';
import BillDetails from '../../components/bill-details/BillDetails';
import dummyBillsData from '../../dummy-data/bills.json';
import { handleHorizontalScroll } from '../../common/utilities/HorizontalScroll';

interface Props extends RouteComponentProps {

}

interface State {
    billsData: BillsTabelDTO
}

class Bills extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            billsData: dummyBillsData
        }
    }

    renderTableHead = () => {
        return (
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
                    {this.renderServiceLinks()}
                    <th className="head total">
                        Total
                        <i className="bill-icon fas fa-money-bill"></i>
                    </th>
                </tr>
            </thead>
        )
    }

    renderServiceLinks = () => {
        return this.state.billsData.services.map((service: ServiceDTO, index: number) => {
            return (
                <th key={index} className="head">
                    <NavLink className="link" title={service.name} to={`${this.props.match.url}/${service.name.toLowerCase().replaceAll(' ', '')}`}>
                        {service.name}
                        <i className={`bill-icon ${service.icon}`}></i>
                    </NavLink>
                </th>
            )
        })
    }

    renderTableBody = () => {
        return (
            <tbody className="table-body">
                {
                    this.state.billsData.userBillData.map((userData: UserBillDataDTO, index: number) => {
                        return (
                            <tr key={index} className="row">
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
                                {this.renderPayments(userData.payments)}
                                <th className="cell total">
                                    {userData.totalAmount}
                                </th>
                            </tr>   
                        )
                    })
                }
            </tbody>
        )
    }

    renderPayments = (payments: PaymentDTO[]) => {
        return payments.map((payment: PaymentDTO, index: number) => {
            return (
                <th key={index} className="cell">
                    {payment.amount}
                </th>
            )
        })
    }

    renderBillRoutes = (serviceData: ServiceDTO[]) => {
        return serviceData.map((service: ServiceDTO, index: number) => {
            return (
                <Route 
                    key={index} 
                    path={`${this.props.match.url}/${service.name.toLowerCase().replaceAll(' ', '')}`}
                    render={(props: RouteComponentProps) => 
                        <BillDetails 
                            serviceDetails={this.state.billsData.services}
                            {...props} 
                        />
                    }
                />
                )
            })
    }

    render() {
        return (
            <React.Fragment>
                <div className="bills-component scrollable" onWheel={handleHorizontalScroll}>
                    <table className="bills-table">
                        {this.renderTableHead()}
                        {this.renderTableBody()}
                    </table>
                </div>
                <Switch>
                    {this.renderBillRoutes(this.state.billsData.services)}
                </Switch>
            </React.Fragment>
        )
    }
}

export default Bills;
