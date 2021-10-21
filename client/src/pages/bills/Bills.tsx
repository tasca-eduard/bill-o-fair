import React, { useRef, WheelEvent } from 'react';
import dummyBillsData from '../../dummy-data/bills.json';

interface Props {

}

interface State {
    billsData: any
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

    componentDidMount() {
        console.log(this.state.billsData)
    }

    render() {
        return (
            <div className="shadow-mask right">
                <div className="mask"></div>
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
                                {this.state.billsData.services.map((service: any) => {
                                    return (
                                        <th className="head">
                                            {service.name}
                                            <i className={`bill-icon ${service.icon}`}></i>
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
                                this.state.billsData.userBillData.map((userData: any) => {
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
                                            {userData.payments.map((payment: any) => {
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
            </div>
        )
    }
}

export default Bills;
