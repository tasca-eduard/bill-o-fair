import React from 'react';
import { Link } from 'react-router-dom';

interface Props {

}

interface State {

}

class Invoices extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <section className="screen-structure">
                <nav className="navigation-component">
                    <ul className="list">
                        <li className="link">
                            <Link to='/bills'>Bills</Link>
                        </li>
                        <li className="link">
                            <Link to='/graphs'>Graphs</Link>
                        </li>
                        <li className="link">
                            <Link to='/overview'>Overview</Link>
                        </li>
                    </ul>
                </nav>
            </section>
        )
    }
}

export default Invoices;