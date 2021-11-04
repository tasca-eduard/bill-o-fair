import React from 'react';
import { Settings } from "react-slick";
import Slider from "react-slick";
import { RouteComponentProps } from 'react-router';
import { ServiceDTO } from '../../common/dtos/Service';
import { NavLink } from 'react-router-dom';

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

    goToBillsPage = () => {
        this.props.history.push('/bills');
    }

    preventPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    render() {
        return (
            <div className="modal-overlay" onClick={this.goToBillsPage}>
                <div className="modal" onClick={this.preventPropagation}>
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
                            this.props.serviceDetails.map((service: ServiceDTO) => {
                                return (
                                    <div className="bill-details-component">
                                        <div className="info">
                                            <div className="details">
                                                <h2 className="title">{service.name}</h2>
                                            </div>
                                            <div className="photo-wrapper">
                                                <img className="photo" src={service.photo} alt="Bill Photo" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        )
    }
}

export default BillDetails;