import React, { DragEvent, DragEventHandler } from 'react';
import { match } from 'react-router-dom';
import { ServiceDTO } from '../../common/dtos/Service';
import BillsTableServiceLinks from './BillsTableServiceLinks';

interface Props {
    groupPhoto: string,
    groupName: string,
    services: ServiceDTO[],
    match: match
}

interface State {
    mouseDown: boolean,
    startX: number,
    scrollLeft: number
}

class BillsTableHead extends React.Component<Props, State> {
    render() {
        return (
            <thead className="table-head">
                <tr className="row">
                    <th className="head">
                        <div className="group">
                            <div className="image-wrapper">
                                <img className="group-image" src={this.props.groupPhoto} alt="User group" />
                            </div>
                            <div className="group-info">
                                <h2 className="title">{this.props.groupName}</h2>
                                <h3 className="subtitle"> 
                                    18.03.2021
                                </h3>
                            </div>
                        </div>
                    </th>
                    <BillsTableServiceLinks 
                        services={this.props.services} 
                        match={this.props.match}
                    />
                    <th className="head total">
                        Total
                        <i className="bill-icon fas fa-money-bill"></i>
                    </th>
                </tr>
            </thead>
        )
    }
}

export default BillsTableHead;