import React from 'react';
import { Route, match, RouteComponentProps } from 'react-router-dom';
import { ServiceDTO } from '../../common/dtos/Service';
import BillDetails from '../bill-details/BillDetails';

interface Props {
    match: match,
    services: ServiceDTO[]
}

class BillsRoutes extends React.Component<Props, {}> {
    render() {
        return (
            this.props.services.map((service: ServiceDTO, index: number) => {
                return (
                    <Route 
                        key={index} 
                        path={`${this.props.match.url}/${service.name.toLowerCase().replaceAll(' ', '')}`}
                        render={(props: RouteComponentProps) => 
                            <BillDetails 
                                serviceDetails={this.props.services}
                                {...props} 
                            />
                        }
                    />
                )
            })
        )
    }
}

export default BillsRoutes;