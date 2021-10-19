import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {

}

interface State {

}

class Navigation extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <nav className="navigation-component">
                <div className="navigation-container container">
                    <ul className="link-list">
                        <li className="link-item">
                            <NavLink to='/bills' className="link" activeClassName="active" title="Bills">Bills</NavLink>
                        </li>
                        <li className="link-item">
                            <NavLink to='/graphs' className="link" activeClassName="active" title="Graphs">Graphs</NavLink>
                        </li>
                        <li className="link-item">
                            <NavLink to='/overview' className="link" activeClassName="active" title="Overview">Overview</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navigation;