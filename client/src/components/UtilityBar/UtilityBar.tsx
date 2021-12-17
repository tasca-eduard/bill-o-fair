import React from 'react';

interface Props {
    toggleTableScrollbars: () => void
}

class UtilityBar extends React.Component<Props, {}> {
    render() {
        return (
            <nav className="utility-bar">
                <ul className="utility-list">
                    <li className="utility-item">
                        <button 
                            type="button" 
                            className="utility-btn"
                            onClick={this.props.toggleTableScrollbars}
                        >
                            <i className="fas fa-sign"></i>
                            Scrollbars
                        </button>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default UtilityBar;