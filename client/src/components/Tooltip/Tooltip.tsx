import React from 'react';

interface Props {
    tooltip: React.ReactNode,
}

interface State {
    isTriggered: boolean
}

class Tooltip extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isTriggered: false
        }
    }

    handleShow = () => {
        this.setState({
            isTriggered: true
        })
    }

    handleHide = () => {
        this.setState({
            isTriggered: false
        })
    }

    render() {
        return (
            <React.Fragment>
                <div
                    onMouseEnter={this.handleShow}
                    onMouseLeave={this.handleHide}
                    onFocus={this.handleShow}
                    onBlur={this.handleHide}
                >
                    {this.props.tooltip}
                </div>
                {this.state.isTriggered && 
                    <div className="tooltip-component">
                        {this.props.children}
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default Tooltip;