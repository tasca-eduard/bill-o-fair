import React from 'react';
import { match } from 'react-router';
import { BillsTabelDTO } from '../../common/dtos/BillsTable';
import { handleHorizontalScroll } from '../../common/utilities/HorizontalScroll';
import BillsTableBody from './BillsTableBody';
import BillsTableHead from './BillsTableHead';

interface Props {
    match: match,
    billsData: BillsTabelDTO
}

class BillsTable extends React.Component<Props, {}> {
    render() {
        return (
            <React.Fragment>
                <div className="bills-component scrollable" onWheel={handleHorizontalScroll}>
                    <table className="bills-table">
                        <BillsTableHead 
                            match={this.props.match} 
                            groupPhoto={this.props.billsData.groupPhoto}
                            groupName={this.props.billsData.groupName}
                            services={this.props.billsData.services}
                        />
                        <BillsTableBody userBillData={this.props.billsData.userBillData} />
                    </table>
                </div>
            </React.Fragment>
        )
    }
}

export default BillsTable;