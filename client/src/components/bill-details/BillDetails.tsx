import React from 'react';
import { Settings } from "react-slick";
import Slider from "react-slick";
import { RouteComponentProps } from 'react-router';
import { ServiceDTO } from '../../common/dtos/Service';
import { NavLink } from 'react-router-dom';
import Modal from '../modal/Modal';

interface Props extends RouteComponentProps {
    serviceDetails: ServiceDTO[]
}

interface State {
    slideIndex: number
}

class BillDetails extends React.Component<Props, State> {
    sliderSettings: Settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        afterChange: (currentSlide: number) => {
            this.props.history.push(`/${this.props.location.pathname.split('/')[1]}/${this.getSlideName(currentSlide)}`)
        },
        easing: 'ease-in-out'
    }

    constructor(props: Props) {
        super(props);
        this.state = {
            slideIndex: this.getSlideIndex()
        }
    }

    getSlideIndex = () => {
        return this.props.serviceDetails.findIndex((service: ServiceDTO) => {
            const serviceName = service.name.toLowerCase().replaceAll(' ', '');
            const urlServiceName = this.props.location.pathname.split('/')[2].toLowerCase().replaceAll(' ', '');

            return serviceName === urlServiceName;
        })
    }

    getSlideName = (currentSlide: number) => {
        return this.props.serviceDetails[currentSlide].name.toLowerCase().replace(' ', '');
    }

    render() {
        return (
            <Modal {...this.props}>
                <div className="cta-wrapper">
                    <NavLink className="back-cta" to="/bills">
                        Back To Bills
                    </NavLink>
                </div>
                <Slider 
                    {...this.sliderSettings}
                    initialSlide={this.state.slideIndex}
                >
                    {
                        this.props.serviceDetails.map((service: ServiceDTO, index: number) => {
                            return (
                                <div key={index} className="bill-details-component">
                                    <div className="info">
                                        <div className="details">
                                            <h2 className="title">{service.name}</h2>
                                        </div>
                                        <div className="photo-wrapper scrollable">
                                            <img className="photo" src={service.photo} alt="Bill Photo" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </Modal>
        )
    }
}

export default BillDetails;