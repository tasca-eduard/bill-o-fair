import React, { MouseEvent } from 'react';
import { match } from 'react-router';
import { BillsTabelDTO } from '../../common/dtos/BillsTable';
import { handleHorizontalScroll } from '../../common/utilities/HorizontalScroll';
import BillsTableBody from './BillsTableBody';
import BillsTableHead from './BillsTableHead';
import ScrollContainer from 'react-indiana-drag-scroll';

interface Props {
    match: match,
    billsData: BillsTabelDTO
}

interface State {
    isScrolling: boolean,
    clientX: number,
    scrollX: number
}

class BillsTable extends React.Component<Props, State> {
    tableRef: React.RefObject<HTMLTableElement>;

    constructor(props: Props) {
        super(props);
        this.tableRef = React.createRef();
        this.state = {
          isScrolling: false,
          clientX: 0,
          scrollX: 0,
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="bills-component scrollable" >
                    <ScrollContainer>
                        <table className="bills-table">
                            <BillsTableHead 
                                match={this.props.match} 
                                groupPhoto={this.props.billsData.groupPhoto}
                                groupName={this.props.billsData.groupName}
                                services={this.props.billsData.services}
                            />
                            <BillsTableBody userBillData={this.props.billsData.userBillData} />
                        </table>
                    </ScrollContainer>
                </div>
            </React.Fragment>
        )
    }
}

export default BillsTable;