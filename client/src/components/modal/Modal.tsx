import React from 'react';
import ReactDOM from 'react-dom';
import { RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps{

}

interface State {

}

class Modal extends React.Component<Props, State> {
    body: HTMLElement = document.querySelector('body') as HTMLElement;
    root: HTMLElement = document.querySelector('#root') as HTMLElement;

    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        this.root.classList.add('blur')
    }

    componentWillUnmount() {
        this.root.classList.remove('blur')
    }

    goToBillsPage = () => {
        this.props.history.push('/bills');
    }

    preventPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    render() {
        return (
            ReactDOM.createPortal(
                <React.Fragment>
                    <div className="modal-overlay" onClick={this.goToBillsPage}>
                        <div className="modal" onClick={this.preventPropagation}>
                            {this.props.children}
                        </div>
                    </div>
                </React.Fragment>
                ,
                this.body
            )
        ) 
    }
}

export default Modal;