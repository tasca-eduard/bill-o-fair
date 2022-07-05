import React from 'react';
import Tooltip from '../Tooltip/Tooltip';

interface Props {
    toggleTableScrollbars: () => void
}

class UtilityBar extends React.Component<Props, {}> {
    render() {
        return (
            <nav className="utility-bar">
                <ul className="utility-list">
                    <li className="utility-item">
                        <Tooltip
                            tooltip={
                                <button 
                                    type="button" 
                                    className="utility-btn"
                                    onClick={this.props.toggleTableScrollbars}
                                >
                                    <i className="fas fa-sign"></i>
                                    Scrollbars
                                </button>
                            }
                        >
                            <p>
                                Use <code>SCROLL</code> to scroll vertically
                            </p>
                            <p>
                                Use <code>SHIFT</code> + <code>SCROLL</code> to scroll horizontally
                            </p>
                        </Tooltip>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default UtilityBar;