import React from 'react';
import { NavLink, match } from 'react-router-dom';
import { ServiceDTO } from '../../common/dtos/Service';


interface Props {
    services: ServiceDTO[],
    match: match
}

class BillsTableServiceLinks extends React.Component<Props, {}> {
    render() {
        return (
            this.props.services.map((service: ServiceDTO, index: number) => {
                return (
                    <th key={index} className="head">
                        <NavLink className="link" title={service.name} to={`${this.props.match.url}/${service.name.toLowerCase().replaceAll(' ', '')}`}>
                            {service.name}
                            <i className={`bill-icon ${service.icon}`}></i>
                        </NavLink>
                    </th>
                )
            })
        )
    }
}

export default BillsTableServiceLinks;