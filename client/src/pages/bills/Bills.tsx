import React from 'react';
import { Switch, RouteComponentProps } from 'react-router-dom';
import { BillsTabelDTO } from '../../common/dtos/BillsTable';
import dummyBillsData from '../../dummy-data/bills.json';
import BillsTable from '../../components/BillsTable/BillsTable';
import BillsRoutes from '../../components/BillsRoutes/BillsRoutes';
import UtilityBar from '../../components/UtilityBar/UtilityBar';

interface Props extends RouteComponentProps {

}

interface State {
    billsData: BillsTabelDTO,
    isShowScrollbar: boolean
}

class Bills extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            billsData: dummyBillsData,
            isShowScrollbar: localStorage.getItem('isShowScrollbar') ? localStorage.getItem('isShowScrollbar') === 'true' ? true : false : false
        }
    }

    toggleTableScrollbars = () => {
        this.setState((prevState: State) => {
            localStorage.setItem('isShowScrollbar', String(!prevState.isShowScrollbar));

            return {
                isShowScrollbar: !prevState.isShowScrollbar
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <UtilityBar toggleTableScrollbars={this.toggleTableScrollbars} />
                <BillsTable 
                    match={this.props.match} 
                    billsData={this.state.billsData}    
                    isShowScrollbar={this.state.isShowScrollbar}
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
