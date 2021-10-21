import React from 'react';

interface Props {

}

interface State {

}

class Bills extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <table className="bills-component">
                <thead className="table-head">
                    <tr className="row">
                        <th className="head group">
                            <div className="image-wrapper">
                                <img className="group-image" src="https://c.pxhere.com/photos/6b/a1/apartment_building_balconies_building_balcony_apartment_architecture_home_housing-825619.jpg!s1" alt="User group" />
                            </div>
                            <div className="group-info">
                                <h2 className="title">Crinului 7</h2>
                                <h3 className="subtitle"> 
                                    18.03.2021
                                </h3>
                            </div>
                        </th>
                        <th className="head">
                            Heat 
                            <i className="bill-icon fas fa-fire"></i>
                        </th>
                        <th className="head">
                            Electricity
                            <i className="bill-icon fas fa-bolt"></i>
                        </th>
                        <th className="head">
                            Internet
                            <i className="bill-icon fas fa-wifi"></i>
                        </th>
                        <th className="head">
                            Water
                            <i className="bill-icon fas fa-tint"></i>
                        </th>
                        <th className="head">
                            Other
                        </th>
                        <th className="head total">
                            Total
                            <i className="bill-icon fas fa-money-bill"></i>
                        </th>
                    </tr>
                </thead>
                <tbody className="table-body">
                </tbody>
            </table>
        )
    }
}

export default Bills;