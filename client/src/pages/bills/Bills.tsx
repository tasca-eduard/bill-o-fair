import React from 'react';
import { Switch, RouteComponentProps } from 'react-router-dom';
import { BillsTabelDTO } from '../../common/dtos/BillsTable';
import dummyBillsData from '../../dummy-data/bills.json';
import BillsTable from '../../components/BillsTable/BillsTable';
import BillsRoutes from '../../components/BillsRoutes/BillsRoutes';

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

    render() {
        return (
            <React.Fragment>
                <BillsTable 
                    match={this.props.match} 
                    billsData={this.state.billsData}    
                />
                <Switch>
                    <BillsRoutes 
                        match={this.props.match}
                        services={this.state.billsData.services}
                    />
                </Switch>
            </React.Fragment>
        )
    }
}

export default Bills;
